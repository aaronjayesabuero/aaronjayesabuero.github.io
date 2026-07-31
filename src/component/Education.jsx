import { useEffect, useRef } from "react";

const Education = () => {
	const sectionRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) =>
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target
							.querySelectorAll(".fade-in")
							.forEach((el) => el.classList.add("visible"));
					}
				}),
			{ threshold: 0.1 },
		);
		if (sectionRef.current) observer.observe(sectionRef.current);
		return () => observer.disconnect();
	}, []);

	return (
		<section
			id="education"
			className="w-full py-20 max-md:py-16"
			ref={sectionRef}
		>
			<div className="mx-auto w-full max-w-[1000px] px-8 max-md:px-5">
				<div className="fade-in">
					<div className="mb-10 flex items-center gap-3">
						<h2 className="text-[clamp(1.5rem,3vw,2rem)] font-medium leading-[1.1] tracking-tight">
							Education
						</h2>
					</div>
					<div className="grid grid-cols-[100px_minmax(0,1fr)] gap-8 max-sm:grid-cols-1 max-sm:gap-3">
						<p className="text-sm text-[var(--text-secondary)]">2022 - 2026</p>
						<div className="pl-25">
							<h3 className="text-lg font-bold leading-tight">
								Bachelor of Science in Information System
							</h3>
							<p className="mt-2 text-base text-[var(--text-secondary)]">
								Caraga State University
							</p>
							<p className="text-base text-[var(--text-secondary)]">
								Main - Campus
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="mx-auto w-full max-w-[1000px] px-8 max-md:px-5">
				<div className="fade-in">
					<div className="pt-10 grid grid-cols-[100px_minmax(0,1fr)] gap-8 max-sm:grid-cols-1 max-sm:gap-3">
						<p className="text-sm text-[var(--text-secondary)]">2020 - 2022</p>
						<div className="pl-25">
							<h3 className="text-lg font-bold leading-tight">
								Shelded Metal Arc Welding (SMAW)
							</h3>
							<p className="mt-2 text-base text-[var(--text-secondary)]">
								Maibu Senior Hign School
							</p>
							<p className="text-base text-[var(--text-secondary)]">
								Maibu Butuan City
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Education;
