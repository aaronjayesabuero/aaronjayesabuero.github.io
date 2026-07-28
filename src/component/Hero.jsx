import { createElement } from "react";
import { Check, Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { FaLaravel, FaWordpress } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import hero from "../assets/img/profile2.jpg";
import heroHover from "../assets/img/profile.png";

const socials = [
	["https://github.com/aaronjayesabuero", Github, "GitHub"],
	["https://www.linkedin.com", Linkedin, "LinkedIn"],
	["mailto:aaronjayesabuero@gmail.com", Mail, "Email"],
];

const tech = [
	["Laravel", FaLaravel, "text-red-500"],
	["WordPress", FaWordpress, "text-sky-500"],
	["PostgreSQL", SiPostgresql, "text-sky-600"],
];

const Hero = () => (
	<main
		id="home"
		className="min-h-screen bg-[#111111] px-6 py-8 text-[#f4f4f5] max-sm:px-5 sm:px-10 lg:px-20"
	>
		<div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-[800px] flex-col justify-center pt-12 max-sm:pt-16">
			<div className="flex items-center gap-8 max-md:flex-col max-md:items-start max-md:gap-5">
				<div className="group relative h-[180px] w-[180px] shrink-0 overflow-hidden rounded-full border border-slate-500 bg-[#202124] max-sm:h-36 max-sm:w-36">
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
					<h1 className="flex items-center gap-2 text-3xl font-medium tracking-[-.04em] max-sm:text-2xl">
						Aaron Jaye Sabuero{" "}
						<span
							className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-500 text-[#111111]"
							aria-label="Verified"
						>
							<Check size={16} strokeWidth={3} />
						</span>
					</h1>
					<div className="mt-2 flex items-center gap-4 text-slate-400">
						{socials.map(([href, Icon, label]) => (
							<a
								href={href}
								key={label}
								target={href.startsWith("http") ? "_blank" : undefined}
								rel={href.startsWith("http") ? "noreferrer" : undefined}
								aria-label={label}
								className="transition hover:text-white"
							>
								{createElement(Icon, { size: 20, strokeWidth: 2.5 })}
							</a>
						))}
					</div>
				</div>
			</div>

			<h2 className="mt-5 text-[clamp(1.25rem,3vw,2rem)] font-medium leading-tight tracking-[-.04em] text-white">
				Full-Stack Web Developer{" "}
				<span className="text-slate-400">— Laravel &amp; WordPress</span>
			</h2>
			<p className="mt-5 max-w-[950px] text-[clamp(1.1rem,2vw,1.1rem)] font-light leading-[1.65] text-slate-400">
				I&apos;m a full-stack web developer building websites and backend
				systems with{" "}
				{tech.map(([name, Icon, color]) => (
					<span
						key={name}
						className="mx-1 my-1 inline-flex translate-y-[-2px] items-center gap-1 rounded-md border border-dashed border-slate-700 px-3 py-1 text-base text-slate-300 max-sm:px-2 max-sm:text-sm"
					>
						<span className={color}>{createElement(Icon, { size: 12 })}</span>
						{name}
					</span>
				))}{" "}
				with SEO experience from client work. I&apos;m currently leading
				architecture on a pet identification system using Siamese neural
				networks and EfficientNetV2B0, and an SMS-based order platform with LLM
				integration (OpenAI, Laravel, Flutter).
			</p>
			<a
				href="#about"
				className="mt-10 inline-flex w-fit items-center gap-3 rounded-lg bg-white px-5 py-2.5 text-[15px] font-medium !text-black transition hover:bg-slate-200 hover:!text-black max-sm:w-full max-sm:justify-center"
			>
				View Resume <ArrowRight size={20} />
			</a>
		</div>
	</main>
);

export default Hero;
