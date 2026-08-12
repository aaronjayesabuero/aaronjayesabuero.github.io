import { useState } from "react";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Projects from "./component/Projects";
import Experience from "./component/Experience";
import Skills from "./component/Skills";
import Education from "./component/Education";
import Certifications from "./component/Certifications";
import GithubActivity from "./component/GithubActivity";
import Footer from "./component/Footer";
import BackToTop from "./component/BackToTop";
import NavigationModal from "./component/NavigationModal";

const App = () => {
	const [activeView, setActiveView] = useState(null);

	return (
		<div className="min-h-screen w-full overflow-x-hidden">
			<Header onNavigate={setActiveView} onHome={() => setActiveView(null)} />
			<Hero />
			<Projects onViewAll={() => setActiveView("projects")} />
			<Experience />
			<Skills />
			<Education />
			<Certifications />
			<GithubActivity />
			<Footer />
			<BackToTop />
			{activeView && (
				<NavigationModal view={activeView} onClose={() => setActiveView(null)} />
			)}
		</div>
	);
};

export default App;
