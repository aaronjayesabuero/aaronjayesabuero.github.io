const Footer = () => (
	<footer className="border-t border-[var(--border)] py-8 px-80">
		<div className="mx-auto flex w-full max-w-[1200px] items-center justify-between px-5 sm:px-6 lg:px-8 max-md:flex-col max-md:gap-4 max-md:text-center">
			<p className="text-sm text-[var(--text-tertiary)]">
				© {new Date().getFullYear()}{" "}
				<span className="font-medium text-[var(--accent)]">AJ Sabuero</span>.
				All rights reserved.
			</p>
			<div className="flex gap-6 text-sm text-[var(--text-tertiary)]">
				<a
					href="https://github.com/aaronjayesabuero"
					target="_blank"
					rel="noreferrer"
					className="transition hover:text-[var(--text-primary)]"
				>
					GitHub
				</a>
				<a
					href="https://www.facebook.com/jamae.rhea"
					target="_blank"
					rel="noreferrer"
					className="transition hover:text-[var(--text-primary)]"
				>
					Facebook
				</a>
				<a
					href="https://www.instagram.com/ajsabu6/"
					target="_blank"
					rel="noreferrer"
					className="transition hover:text-[var(--text-primary)]"
				>
					Instagram
				</a>
			</div>
		</div>
	</footer>
);

export default Footer;
