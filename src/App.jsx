import Header from "./component/Header";
import Hero from "./component/Hero";
import Projects from "./component/Projects";
import Experience from "./component/Experience";
import Skills from "./component/Skills";
import Education from "./component/Education";
import Certifications from "./component/Certifications";
import GithubActivity from "./component/GithubActivity";
import Footer from "./component/Footer";

const App = () => {
	return (
		<div className="min-h-screen w-full overflow-x-hidden">
			<Header />
			<Hero />
			<Projects />
			<Experience />
			<Skills />
			<Education />
			<Certifications />
			<GithubActivity />
			<Footer />
		</div>
	);
};

export default App;
