import { createElement, useEffect, useRef } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { FaCss3Alt, FaHtml5, FaJsSquare, FaLaravel } from "react-icons/fa";
import {
	SiFigma,
	SiMysql,
	SiNodedotjs,
	SiReact,
	SiTailwindcss,
} from "react-icons/si";
import owwaImage from "../assets/img/project/Owwa.png";
import nextgenImage from "../assets/img/project/NextGen3.png";
import visitationImage from "../assets/img/project/VisitationManagementSystem.png";
import thriveImage from "../assets/img/project/CsuThrives.png";

const githubProfile = "https://github.com/aaronjayesabuero";

const projects = [
	{
		name: "OWWA Redesigning Tool",
		label: "FIGMA · UI/UX DESIGN",
		description:
			"A user-centered UI/UX redesign created in Figma, with wireframes, interactive prototypes, and modern interface improvements.",
		kind: "owwa",
		image: owwaImage,
		icons: [[SiFigma, "#f24e1e"]],
		link: "https://www.figma.com/design/iDqTvR7RhEFe9NkQWB6z05/OWWA?node-id=0-1&t=hVXOUF44QoCBIc54-1",
		linkLabel: "Open Figma",
	},
	{
		name: "NextGen3",
		label: "GROUP PROJECT",
		description:
			"A collaborative platform built by a group, with responsive dashboards, role-based workflows, and a clear user experience. My contributions focused on UI implementation, integration, and testing.",
		kind: "nextgen",
		image: nextgenImage,
		icons: [
			[FaHtml5, "#e34f26"],
			[FaCss3Alt, "#1572b6"],
			[FaJsSquare, "#f7df1e"],
		],
		link: "https://nexgen3.netlify.app/",
		linkLabel: "View details",
	},
	{
		name: "CSU Visitation Management System",
		label: "WEB APPLICATION",
		description:
			"A web-based system for Caraga State University that streamlines visitor registration, approval workflows, and visit tracking.",
		kind: "visitation",
		image: visitationImage,
		icons: [
			[FaLaravel, "#ff2d20"],
			[SiReact, "#22d3ee"],
			[SiTailwindcss, "#06b6d4"],
			[SiMysql, "#4479a1"],
		],
		link: githubProfile,
		linkLabel: "View details",
	},
	{
		name: "CSU Thrive",
		label: "INTELLIGENT ACADEMIC GOVERNANCE",
		description:
			"An intelligent academic governance platform for thesis management, adviser assignment, chapter submissions, workflow automation, and research progress tracking.",
		kind: "thrive",
		image: thriveImage,
		icons: [
			[SiReact, "#22d3ee"],
			[SiTailwindcss, "#06b6d4"],
			[SiNodedotjs, "#34d399"],
			[SiMysql, "#4479a1"],
		],
		link: githubProfile,
		linkLabel: "View details",
	},
];

const Preview = ({ kind, image, name }) => (
	<div className={`project-preview project-preview-${kind}`} aria-hidden="true">
		<div className="project-preview-window">
			<img
				className="project-preview-image"
				src={image}
				alt={`${name} project preview`}
			/>
		</div>
	</div>
);

const ProjectIcons = ({ project }) => (
	<div
		className="flex items-center gap-3 text-lg"
		aria-label="Technologies used"
	>
		{project.icons.map(([Icon, color], index) =>
			createElement(Icon, {
				key: `${project.name}-${index}`,
				style: { color },
			}),
		)}
	</div>
);

const Projects = () => {
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
			id="projects"
			className="w-full border-t border-[var(--border-strong)] py-20 max-md:py-16"
			ref={sectionRef}
		>
			<div className="mx-auto w-full max-w-[1000px] px-8 max-md:px-5">
				<div className="fade-in mb-8 flex items-end justify-between gap-5">
					<div>
						<h2 className="text-[clamp(1.5rem,3vw,2rem)] font-medium tracking-[-.04em]">
							Projects
						</h2>
					</div>
					<p className="max-w-[300px] text-right text-sm leading-6 text-[var(--text-secondary)] max-sm:hidden">
						A selection of design work and systems built for real-world needs.
					</p>
				</div>
				<div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
					{projects.map((project, index) => (
						<article
							className={`fade-in fade-in-delay-${(index % 4) + 1} project-card`}
							key={project.name}
						>
							<Preview
								kind={project.kind}
								image={project.image}
								name={project.name}
							/>
							<div className="flex min-h-[188px] flex-col px-4 pb-4 pt-4">
								<div className="mb-2 flex items-start justify-between gap-3">
									<h3 className="text-base font-semibold leading-5">
										{project.name}
									</h3>
									<span className="project-status shrink-0">
										{project.label}
									</span>
								</div>
								<p className="max-w-[390px] text-sm leading-6 text-[var(--text-secondary)]">
									{project.description}
								</p>
								<div className="mt-auto flex items-end justify-between border-t border-[var(--border-strong)] pt-4">
									<ProjectIcons project={project} />
									<a
										href={project.link}
										target="_blank"
										rel="noreferrer"
										className="text-[10px] uppercase tracking-[.16em] text-[var(--text-secondary)] transition hover:text-[var(--text-primary)]"
									>
										{project.linkLabel}{" "}
										<ArrowRight className="ml-1 inline" size={12} />
									</a>
								</div>
							</div>
						</article>
					))}
				</div>
				<div className="mt-7 flex justify-center">
					<a
						href={githubProfile}
						target="_blank"
						rel="noreferrer"
						className="inline-flex items-center gap-2 rounded-lg bg-[var(--text-primary)] px-5 py-2.5 text-sm font-medium !text-[var(--bg-primary)] transition hover:opacity-80"
					>
						View all Projects <ExternalLink size={15} />
					</a>
				</div>
			</div>
		</section>
	);
};

export default Projects;
