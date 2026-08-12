const experiences = [
	{
		period: "2026",
		title: "Web Developer",
		detail: "Student Intern in Human-Computer Interaction",
		place: "Caraga State University-main",
	},
	{
		period: "2022",
		title: "Welder",
		detail: "OJT in Maibu National High School",
		place: "Maibu Butuan City",
	},
];

const Experience = ({ detailed = false }) => {
	if (detailed) {
		return (
			<div className="relative ml-2 border-l border-[var(--accent-border)] pl-9 sm:ml-3 sm:pl-10">
				{experiences.map((experience) => (
					<article className="relative mb-16 last:mb-0" key={`${experience.period}-${experience.title}`}>
						<span className="absolute -left-[calc(2.25rem+9px)] top-1 h-5 w-5 rounded-full border-4 border-[var(--bg-primary)] bg-[var(--text-primary)] shadow-[0_0_0_1px_var(--accent-border)] sm:-left-[calc(2.5rem+9px)]" />
						<p className="text-sm text-[var(--text-secondary)]">{experience.period}</p>
						<h2 className="mt-2 text-xl font-bold leading-tight text-[var(--text-primary)] sm:text-2xl">
							{experience.title}
						</h2>
						<p className="mt-2 font-semibold text-[var(--text-primary)]">{experience.detail}</p>
						<p className="mt-1 text-base text-[var(--text-secondary)]">{experience.place}</p>
						{experience.points && (
							<ul className="mt-5 list-disc space-y-3 pl-5 text-base leading-7 text-[var(--text-secondary)]">
								{experience.points.map((point) => <li key={point}>{point}</li>)}
							</ul>
						)}
					</article>
				))}
			</div>
		);
	}

	return (
	<section id="experience" className="w-full py-13 max-md:py-16">
		<div className="mx-auto w-full max-w-[1000px] px-8 max-md:px-5">
			<div className="mb-12 flex items-center justify-between gap-6">
				<div>
					<h2 className="text-[clamp(1.5rem,3vw,2rem)] font-medium leading-[1.1] tracking-tight">
						My experience
					</h2>
				</div>
				<a
					href="#about"
					className="shrink-0 text-sm text-[var(--text-secondary)] transition hover:text-[var(--accent)] max-sm:hidden"
				>
					View Details <span aria-hidden="true">→</span>
				</a>
			</div>

			<div className="flex flex-col">
				{experiences.map((experience) => (
					<article
						className="grid grid-cols-[180px_minmax(0,1fr)] gap-12 py-8 first:pt-0 max-md:grid-cols-[100px_minmax(0,1fr)] max-md:gap-6 max-sm:grid-cols-1 max-sm:gap-3"
						key={`${experience.period}-${experience.title}`}
					>
						<p className="text-sm text-[var(--text-secondary)]">
							{experience.period}
						</p>
						<div>
							<h3 className="text-[18px] font-bold leading-tight max-sm:text-lg">
								{experience.title}
							</h3>
							<p className="mt-2 text-sm font-semibold text-[var(--text-primary)]">
								{experience.detail}
							</p>
							<p className="text-[12px] font-thin pt-2">{experience.place}</p>
						</div>
					</article>
				))}
			</div>
		</div>
	</section>
 	);
};

export default Experience;
