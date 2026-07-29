import { useEffect, useMemo, useState } from "react";

const currentYear = new Date().getFullYear();
const years = [currentYear, currentYear - 1, currentYear - 2];
const monthNames = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec",
];

const emptyWeeks = () =>
	Array.from({ length: 53 }, () =>
		Array.from({ length: 7 }, () => ({ count: 0, level: 0, date: "" })),
	);

const GithubActivity = () => {
	const [year, setYear] = useState(currentYear);
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	useEffect(() => {
		const controller = new AbortController();
		setLoading(true);
		setError("");
		const parseResponse = (response) => response.text().then((body) => {
			if (!response.ok) throw new Error("Private contribution data unavailable");
			try { return JSON.parse(body); } catch { throw new Error("Invalid GitHub API response"); }
		});
		fetch(`/api/github-contributions?year=${year}`, { signal: controller.signal })
			.then(parseResponse)
			.catch(async (error) => {
				if (error.name === "AbortError") throw error;
				const fallback = await fetch(`https://github-contributions-api.jogruber.de/v4/aaronjayesabuero?y=${year}`, { signal: controller.signal });
				return parseResponse(fallback);
			})
			.then(setData)
			.catch((error) => {
				if (error.name !== "AbortError") { setData(null); setError(error.message); }
			})
			.finally(() => setLoading(false));
		return () => controller.abort();
	}, [year]);

	const weeks = useMemo(() => {
		const grid = emptyWeeks();
		const firstDate = new Date(year, 0, 1);
		firstDate.setDate(firstDate.getDate() - firstDate.getDay());
		data?.contributions?.forEach((item) => {
			const date = new Date(`${item.date}T00:00:00`);
			const dayIndex = Math.floor((date - firstDate) / 86400000);
			const weekIndex = Math.floor(dayIndex / 7);
			if (weekIndex >= 0 && weekIndex < 53 && date.getFullYear() === year)
				grid[weekIndex][date.getDay()] = {
					count: item.count,
					level: item.level ?? Math.min(4, Math.ceil(item.count / 3)),
					date: item.date,
				};
		});
		return grid;
	}, [data, year]);

	const monthPositions = useMemo(() => {
		const firstDate = new Date(year, 0, 1);
		firstDate.setDate(firstDate.getDate() - firstDate.getDay());
		return monthNames.map((_, month) => {
			const date = new Date(year, month, 1);
			return { month, index: Math.floor((date - firstDate) / 86400000 / 7) };
		});
	}, [year]);

	const total =
		data?.total?.[year] ??
		data?.contributions?.reduce((sum, item) => sum + item.count, 0) ??
		0;

	return (
		<section
			id="github-activity"
			className="w-full border-t border-[var(--border-strong)] py-20 max-md:py-16"
		>
			<div className="mx-auto w-full max-w-[1000px] px-8 max-md:px-5">
				<div className="mb-6 flex items-center justify-between gap-4 max-sm:flex-col max-sm:items-start">
					<h2 className="text-[clamp(1.75rem,4vw,2.25rem)] font-light tracking-[-.04em] text-[var(--text-primary)]">
						GitHub Activity
					</h2>
					<div className="flex items-center gap-5 text-sm text-[var(--text-secondary)]">
					<span>{loading ? "Loading contributions" : error || `${total.toLocaleString()} contributions`}</span>
						<div className="flex items-center gap-4">
							{years.map((item) => (
								<button
									key={item}
									onClick={() => setYear(item)}
									className={`transition hover:text-[var(--text-primary)] ${year === item ? "rounded-full bg-[var(--text-primary)] px-4 py-1.5 !text-[var(--bg-primary)]" : ""}`}
								>
									{item}
								</button>
							))}
						</div>
					</div>
				</div>

				<div className="overflow-x-auto rounded-[20px] border border-dashed border-[var(--border-strong)] p-8 max-md:p-5">
					<div className="min-w-[680px]">
						<div className="relative mb-2 h-5 text-xs text-[var(--text-tertiary)]">
							{monthPositions.map(({ month, index }) => (
								<span
									key={month}
									className="absolute"
									style={{ left: `${(index / 53) * 100}%` }}
								>
									{monthNames[month]}
								</span>
							))}
						</div>
						<div className="grid grid-cols-[repeat(53,minmax(0,1fr))] gap-1.5">
							{weeks.map((week, weekIndex) => (
								<div className="grid grid-rows-7 gap-1.5" key={weekIndex}>
									{week.map((cell, dayIndex) => (
										<span
											key={`${weekIndex}-${dayIndex}`}
											title={
												cell.date
													? `${cell.count} contribution${cell.count === 1 ? "" : "s"} on ${cell.date}`
													: "No contributions"
											}
							className={`aspect-square w-full rounded-[4px] bg-[var(--github-level-0)] ${cell.level === 1 ? "!bg-[var(--github-level-1)]" : cell.level === 2 ? "!bg-[var(--github-level-2)]" : cell.level === 3 ? "!bg-[var(--github-level-3)]" : cell.level >= 4 ? "!bg-[var(--github-level-4)]" : ""}`}
										/>
									))}
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default GithubActivity;
