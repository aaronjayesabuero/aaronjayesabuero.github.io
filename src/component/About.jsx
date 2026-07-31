import { useEffect, useRef } from "react";
import { User, MapPin, Mail, Phone, Calendar } from "lucide-react";

const infoItems = [
	{ icon: <User />, label: "Full Name", value: "Aaron Jaye Sabuero" },
	{ icon: <Calendar />, label: "Age", value: "22 years old" },
	{ icon: <MapPin />, label: "Location", value: "Maibu, Butuan City" },
	{ icon: <Phone />, label: "Phone", value: "09154030630" },
	{ icon: <Mail />, label: "Email", value: "aaronjayesabuero@gmail.com" },
];

const About = () => {
	const sectionRef = useRef(null);
	useEffect(() => {
		const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
			if (entry.isIntersecting) entry.target.querySelectorAll(".fade-in").forEach((el) => el.classList.add("visible"));
		}), { threshold: 0.1 });
		if (sectionRef.current) observer.observe(sectionRef.current);
		return () => observer.disconnect();
	}, []);
	return (
		<section id="about" className="relative w-full py-20 max-md:py-16" ref={sectionRef}>
			<div className="mx-auto w-full max-w-[1000px] px-8 max-md:px-5">
				<div className="fade-in"><span className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[.1em] text-[var(--accent)]"><User className="h-4 w-4" />About</span><h2 className="mb-6 text-[clamp(1rem,2.1vw,2rem)] font-bold leading-[1.1] tracking-tight">Get to know me</h2></div>
				<div className="mt-6 grid grid-cols-2 items-center gap-16 max-lg:grid-cols-1 max-lg:gap-10">
					<div className="fade-in fade-in-delay-1 flex flex-col gap-6"><p className="text-base leading-7 text-[var(--text-secondary)]">I'm a passionate web developer with a focus on creating dynamic and user-friendly web applications. My journey in tech started with a love for problem-solving and a curiosity for how things work.</p><p className="text-base leading-7 text-[var(--text-secondary)]">I'm always eager to learn new technologies and improve my skills. When I'm not coding, I enjoy reading tech blogs, exploring new frameworks, and working on personal projects that challenge my abilities.</p></div>
					<div className="fade-in fade-in-delay-2 flex min-w-0 flex-col gap-5 rounded-[18px] border border-[var(--border)] bg-[var(--bg-secondary)] p-8 transition hover:border-[var(--border-hover)] max-sm:p-5">{infoItems.map((item) => <div className="flex items-start gap-4" key={item.label}><div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[var(--accent-border)] bg-[var(--accent-subtle)] text-[var(--accent)]">{item.icon}</div><div className="min-w-0"><div className="mb-1 text-xs font-medium uppercase tracking-[.1em] text-[var(--text-tertiary)]">{item.label}</div><div className="break-words text-sm font-medium text-[var(--text-primary)]">{item.value}</div></div></div>)}</div>
				</div>
			</div>
		</section>
	);
};

export default About;
