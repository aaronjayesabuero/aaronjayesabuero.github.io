/* global process */

const query = `
  query($from: DateTime!, $to: DateTime!) {
    viewer {
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              contributionLevel
              date
            }
          }
        }
      }
    }
  }
`;

export default async function handler(req, res) {
	const token = process.env.GITHUB_TOKEN || process.env.GITHUB_PAT;
	const year = Number(req.query?.year || new Date().getFullYear());

	if (!token)
		return res.status(500).json({ error: "GITHUB_TOKEN is not configured" });
	if (!Number.isInteger(year) || year < 2008 || year > 2100)
		return res.status(400).json({ error: "Invalid year" });

	try {
		const response = await fetch("https://api.github.com/graphql", {
			method: "POST",
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "application/json",
				"User-Agent": "AJ-Sabuero-Portfolio",
			},
			body: JSON.stringify({
				query,
				variables: {
					from: `${year}-01-01T00:00:00Z`,
					to: `${year}-12-31T23:59:59Z`,
				},
			}),
		});
		const payload = await response.json();
		if (!response.ok || payload.errors?.length)
			return res
				.status(502)
				.json({
					error: payload.errors?.[0]?.message || "GitHub request failed",
				});

		const calendar =
			payload.data.viewer.contributionsCollection.contributionCalendar;
		const contributions = calendar.weeks.flatMap((week) =>
			week.contributionDays.map((day) => ({
				date: day.date,
				count: day.contributionCount,
				level:
					{
						NONE: 0,
						FIRST_QUARTILE: 1,
						SECOND_QUARTILE: 2,
						THIRD_QUARTILE: 3,
						FOURTH_QUARTILE: 4,
					}[day.contributionLevel] ?? 0,
			})),
		);

		return res
			.status(200)
			.json({ contributions, total: { [year]: calendar.totalContributions } });
	} catch {
		return res
			.status(500)
			.json({ error: "Unable to load GitHub contributions" });
	}
}
