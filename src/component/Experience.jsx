import { Briefcase } from "lucide-react";

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

const Experience = () => (
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

export default Experience;
