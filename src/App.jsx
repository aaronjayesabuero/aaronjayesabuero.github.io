import Header from "./component/Header";
import Hero from "./component/Hero";
import About from "./component/About";
import Skills from "./component/Skills";
import GithubActivity from "./component/GithubActivity";
import Footer from "./component/Footer";

const App = () => {
	return (
		<div className="min-h-screen w-full overflow-x-hidden">
			<Header />
			<Hero />
			<About />
			<Skills />
			<GithubActivity />
			<Footer />
		</div>
	);
};

export default App;
