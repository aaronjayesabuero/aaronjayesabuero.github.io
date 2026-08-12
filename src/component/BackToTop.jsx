import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const onScroll = () => setIsVisible(window.scrollY > 300);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

	return (
		<button
			type="button"
			onClick={scrollToTop}
			aria-label="Back to top"
			title="Back to top"
			className={`fixed right-5 bottom-5 z-40 flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--accent-border)] bg-[var(--bg-secondary)] text-[var(--accent)] shadow-lg transition-all duration-200 hover:border-[var(--accent)] hover:bg-[var(--accent-subtle)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] sm:right-8 sm:bottom-8 ${isVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"}`}
		>
			<ArrowUp size={18} strokeWidth={2.25} />
		</button>
	);
};

export default BackToTop;
