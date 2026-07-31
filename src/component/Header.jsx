import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";

const navList = [
	{ href: "#home", label: "Home" },
	{ href: "#projects", label: "Projects" },
	{ href: "#experience", label: "Experience" },
	{ href: "#skills", label: "Skills" },
	{ href: "#education", label: "Education" },
	{ href: "#certifications", label: "Certifications" },
];

const iconButton =
	"flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-transparent text-[var(--text-secondary)] transition hover:border-[var(--border-hover)] hover:bg-[var(--hover-bg)] hover:text-[var(--text-primary)]";

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [theme, setTheme] = useState(
		() => localStorage.getItem("theme") || "dark",
	);

	useEffect(() => {
		document.documentElement.setAttribute("data-theme", theme);
		localStorage.setItem("theme", theme);
	}, [theme]);
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	useEffect(() => {
		const onResize = () => window.innerWidth > 768 && setIsMenuOpen(false);
		window.addEventListener("resize", onResize);
		return () => window.removeEventListener("resize", onResize);
	}, []);

	const toggleTheme = () =>
		setTheme((current) => (current === "dark" ? "light" : "dark"));
	const themeButton = (id) => (
		<button
			className={iconButton}
			onClick={toggleTheme}
			aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
			id={id}
		>
			{theme === "light" ? <Sun size={16} /> : <Moon size={16} />}
		</button>
	);

	return (
		<header
			className={`fixed inset-x-0 top-0 z-50 border-b bg-[var(--nav-bg)] backdrop-blur-xl transition ${scrolled ? "border-[var(--border)]" : "border-transparent"}`}
		>
			<div className="mx-auto flex h-16 w-full max-w-[1000px] items-center px-5 sm:px-6 lg:px-8">
				<a
					href="#home"
					className="min-w-0 truncate pr-80 text-lg font-bold tracking-tight transition-opacity hover:opacity-80 max-md:pl-0 max-md:pr-0"
				>
					<span className="text-[var(--accent)]">AJ</span> Sabuero
				</a>
				<nav className="hidden items-center gap-1 md:flex">
					{navList.map((link) => (
						<a
							href={link.href}
							key={link.href}
							className="rounded-lg px-4 py-2 text-sm font-medium text-[var(--text-secondary)] transition hover:bg-[var(--hover-bg)] hover:text-[var(--text-primary)]"
						>
							{link.label}
						</a>
					))}
				</nav>
				<p className="hidden text-[var(--text-tertiary)] md:block">|</p>
				<div className="hidden items-center gap-3 md:flex">
					{themeButton("theme-toggle")}
				</div>
				<div className="ml-auto flex shrink-0 items-center gap-2 md:hidden">
					{themeButton("theme-toggle-mobile")}
					<button
						className={iconButton}
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						aria-label="Toggle menu"
						id="nav-menu-toggle"
					>
						{isMenuOpen ? <X size={18} /> : <Menu size={18} />}
					</button>
				</div>
			</div>
			{isMenuOpen && (
				<div className="absolute inset-x-0 top-16 flex animate-[menu-slide-in_.2s_ease-out] flex-col gap-1 border-b border-[var(--border)] bg-[var(--nav-mobile-bg)] p-4 backdrop-blur-xl md:hidden">
					{navList.map((link) => (
						<a
							href={link.href}
							key={link.href}
							onClick={() => setIsMenuOpen(false)}
							className="rounded-lg px-4 py-3 font-medium text-[var(--text-secondary)] hover:bg-[var(--hover-bg)] hover:text-[var(--text-primary)]"
						>
							{link.label}
						</a>
					))}
					<a
						href="mailto:aaronjayesabuero@gmail.com"
						onClick={() => setIsMenuOpen(false)}
						className="rounded-lg px-4 py-3 font-medium text-[var(--accent)]"
					>
						Contact →
					</a>
				</div>
			)}
		</header>
	);
};

export default Header;
