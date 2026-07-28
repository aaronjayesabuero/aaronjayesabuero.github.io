import { useEffect, useRef } from "react";
import { FaReact, FaJsSquare, FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const skills = [
	{
		name: "React",
		icon: <FaReact style={{ color: "#61DAFB", fontSize: "1.75rem" }} />,
	},
	{
		name: "JavaScript",
		icon: <FaJsSquare style={{ color: "#F7DF1E", fontSize: "1.75rem" }} />,
	},
	{
		name: "Tailwind CSS",
		icon: <SiTailwindcss style={{ color: "#06B6D4", fontSize: "1.75rem" }} />,
	},
	{
		name: "CSS3",
		icon: <FaCss3Alt style={{ color: "#2965F1", fontSize: "1.75rem" }} />,
	},
];

const Skills = () => {
	const sectionRef = useRef(null);
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) =>
				entries.forEach((entry) => {
					if (entry.isIntersecting)
						entry.target
							.querySelectorAll(".fade-in")
							.forEach((el) => el.classList.add("visible"));
				}),
			{ threshold: 0.1 },
		);
		if (sectionRef.current) observer.observe(sectionRef.current);
		return () => observer.disconnect();
	}, []);

	return (
		<section
			id="skills"
			className="relative border-t border-[var(--border-strong)] px-5 py-24 lg:px-90 max-md:py-16"
			ref={sectionRef}
		>
			<div className="mx-auto w-full max-w-[1200px]">
				<div className="mb-12 text-center fade-in">
					<span className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[.1em] text-[var(--accent)]">
						Skills
					</span>
					<h2 className="mb-2 text-[clamp(1rem,2.1vw,2rem)] font-bold leading-[1.1] tracking-tight">
						Technologies I work with
					</h2>
					<p className="mx-auto max-w-[480px] text-[13px] leading-7 text-[var(--text-secondary)]">
						Tools and frameworks I use to bring ideas to life
					</p>
				</div>
				<div className="grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-md:gap-3">
					{skills.map((skill, index) => (
						<div
							className={`fade-in fade-in-delay-${index + 1} flex cursor-default flex-col items-center gap-4 rounded-[18px] border border-[var(--border)] bg-[var(--bg-secondary)] px-6 py-8 transition hover:-translate-y-1 hover:border-[var(--accent-border)] hover:bg-[var(--bg-tertiary)] hover:shadow-[0_0_40px_rgba(59,130,246,.06)] max-md:px-4 max-md:py-6`}
							key={skill.name}
						>
							<div className="flex h-14 w-14 items-center justify-center rounded-[14px] border border-[var(--accent-border)] bg-[var(--accent-subtle)] text-3xl">
								{skill.icon}
							</div>
							<span className="text-sm font-semibold tracking-wider">
								{skill.name}
							</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Skills;
