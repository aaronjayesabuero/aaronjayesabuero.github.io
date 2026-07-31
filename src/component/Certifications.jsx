import { useEffect, useRef } from "react";
import certificateImage from "../assets/img/project/Cert1dost.png";

const certifications = [
	{
		period: "2026",
		title: "DICT Certificate",
		issuer: "Department of Information and Communications Technology",
		image: certificateImage,
	},
];

const Certifications = () => {
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
			id="certifications"
			className="w-full py-10 max-md:py-16"
			ref={sectionRef}
		>
			<div className="mx-auto w-full max-w-[1000px] px-8 max-md:px-5">
				<div className="mb-10 flex items-center gap-3 fade-in">
					<h2 className="text-[clamp(1.5rem,3vw,2rem)] font-medium leading-[1.1] tracking-tight">
						Certifications
					</h2>
				</div>
				<div className="flex flex-col gap-12">
					{certifications.map((certification) => (
						<article
							className="grid grid-cols-[180px_minmax(0,1fr)] gap-12 fade-in max-md:grid-cols-[100px_minmax(0,1fr)] max-md:gap-6 max-sm:grid-cols-1 max-sm:gap-3"
							key={certification.title}
						>
							<p className="text-sm text-[var(--text-secondary)]">
								{certification.period}
							</p>
							<div>
								<h3 className="text-lg font-bold leading-tight">
									{certification.title}
								</h3>
								<p className="mt-2 text-base text-[var(--text-secondary)]">
									{certification.issuer}
								</p>
								<a
									href={certification.image}
									target="_blank"
									rel="noreferrer"
									className="mt-5 block w-fit overflow-hidden rounded-lg border border-[var(--border)] transition hover:border-[var(--accent-border)]"
								>
									<img
										src={certification.image}
										alt={`${certification.title} certificate`}
										className="h-20 w-32 object-cover transition hover:scale-105"
									/>
								</a>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
};

export default Certifications;
