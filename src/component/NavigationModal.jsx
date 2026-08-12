import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import Projects from "./Projects";
import Experience from "./Experience";
import Footer from "./Footer";

const viewDetails = {
	projects: {
		title: "Selected Projects",
		description:
			"A collection of web apps and sites I have designed, built, and optimized.",
	},
	experience: {
		title: "Experience",
		description: "Where I have worked and what I did there.",
	},
	events: {
		title: "Events",
		description: "Events and activities related to my work and development journey.",
	},
};

const NavigationModal = ({ view, onClose }) => {
	const details = viewDetails[view];

	useEffect(() => {
		document.body.style.overflow = "hidden";
		const onKeyDown = (event) => event.key === "Escape" && onClose();
		document.addEventListener("keydown", onKeyDown);
		return () => {
			document.body.style.overflow = "";
			document.removeEventListener("keydown", onKeyDown);
		};
	}, [onClose]);

	return (
		<div className="fixed inset-0 z-40 overflow-y-auto bg-[var(--bg-primary)]">
			<div className="mx-auto min-h-screen w-full max-w-[1000px] px-5 pb-16 pt-28 sm:px-8">
				<div className="mb-12 flex items-center justify-between">
					<button
						type="button"
						onClick={onClose}
						className="inline-flex items-center gap-3 text-sm text-[var(--text-secondary)] transition hover:text-[var(--text-primary)]"
					>
						<ArrowLeft size={16} /> Back to Home
					</button>
				</div>
				<header className="mb-12">
					<h1 className="text-4xl font-light tracking-tight max-sm:text-3xl">
						{details.title}
					</h1>
					<p className="mt-3 max-w-3xl text-base leading-7 text-[var(--text-secondary)]">
						{details.description}
					</p>
				</header>
				{view === "projects" && <Projects compact />}
				{view === "experience" && <Experience detailed />}
				{view === "events" && (
					<div className="border-t border-[var(--border)] py-10 text-[var(--text-secondary)]">
						No events available yet.
					</div>
				)}
				<Footer />
			</div>
		</div>
	);
};

export default NavigationModal;
