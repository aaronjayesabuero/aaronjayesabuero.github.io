import { createElement } from "react";
import { Check, Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import hero from "../assets/img/profile2.jpg";
import heroHover from "../assets/img/profile.png";

const socials = [
	["https://github.com/aaronjayesabuero", Github, "GitHub"],
	["https://www.linkedin.com", Linkedin, "LinkedIn"],
	["mailto:aaronjayesabuero@gmail.com", Mail, "Email"],
];

const tech = [
	["Node.js", FaNodeJs, "text-green-500"],
	["React", FaReact, "text-sky-500"],
	["Tailwind CSS", SiTailwindcss, "text-cyan-500"],
];

const Hero = () => (
	<main
		id="home"
		className="w-full min-h-screen bg-[var(--bg-primary)] py-8 text-[var(--text-primary)]"
	>
		<div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-[1000px] flex-col justify-center px-8 pt-12 max-md:px-5 max-md:pt-16">
			<div className="flex items-center gap-8 max-md:flex-col max-md:items-start max-md:gap-5">
				<div className="group relative h-[180px] w-[180px] shrink-0 overflow-hidden rounded-full border border-[var(--border-strong)] bg-[var(--bg-tertiary)] max-md:h-40 max-md:w-40 max-sm:h-36 max-sm:w-36">
					<img
						src={hero}
						alt="Aaron Jaye Sabuero"
						className="absolute inset-0 h-full w-full object-cover object-top grayscale-[15%] transition-opacity duration-500 group-hover:opacity-0"
					/>
					<img
						src={heroHover}
						alt=""
						aria-hidden="true"
						className="absolute inset-0 h-full w-full object-cover object-top opacity-0 grayscale-[15%] transition-opacity duration-500 group-hover:opacity-100"
					/>
				</div>
				<div>
					<h1 className="flex flex-wrap items-center gap-2 text-3xl font-medium tracking-[-.04em] max-sm:text-2xl">
						Aaron Jaye Sabuero{" "}
						<span
							className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-500 text-[var(--bg-primary)]"
							aria-label="Verified"
						>
							<Check size={16} strokeWidth={3} />
						</span>
					</h1>
					<div className="mt-2 flex items-center gap-4 text-[var(--text-secondary)]">
						{socials.map(([href, Icon, label]) => (
							<a
								href={href}
								key={label}
								target={href.startsWith("http") ? "_blank" : undefined}
								rel={href.startsWith("http") ? "noreferrer" : undefined}
								aria-label={label}
								className="transition hover:text-[var(--text-primary)]"
							>
								{createElement(Icon, { size: 20, strokeWidth: 2.5 })}
							</a>
						))}
					</div>
				</div>
			</div>

			<h2 className="mt-5 text-[clamp(1.25rem,3vw,2rem)] font-medium leading-tight tracking-[-.04em] text-[var(--text-primary)]">
				Full-Stack Web Developer{" "}
				<span className="text-[var(--text-secondary)]">
					— Node.js &amp; React
				</span>
			</h2>
			<p className="mt-5 max-w-[950px] text-[clamp(1.1rem,2vw,1.1rem)] font-light leading-[1.65] text-[var(--text-secondary)]">
				I&apos;m a full-stack web developer building websites and backend
				systems with{" "}
				{tech.map(([name, Icon, color]) => (
					<span
						key={name}
						className="mx-1 my-1 inline-flex translate-y-[-2px] items-center gap-1 rounded-md border border-dashed border-[var(--border-strong)] px-3 py-1 text-base text-[var(--text-primary)] max-sm:px-2 max-sm:text-sm"
					>
						<span className={color}>{createElement(Icon, { size: 12 })}</span>
						{name}
					</span>
				))}{" "}
				with hands-on experience in designing and developing modern web
				applications. During my On-the-Job Training (OJT) in Human-Computer
				Interaction (HCI), I worked on user-centered design, UI/UX improvement,
				and usability testing while contributing to the development of
				intuitive, responsive, and accessible software solutions.
			</p>
			<a
				href="#about"
				className="mt-10 inline-flex w-fit items-center gap-3 rounded-lg bg-[var(--text-primary)] px-5 py-2.5 text-[15px] font-medium !text-[var(--bg-primary)] transition hover:bg-[var(--text-secondary)] max-md:w-full max-md:justify-center"
			>
				View Resume <ArrowRight size={20} />
			</a>
		</div>
	</main>
);

export default Hero;
