import Logo from './components/logo/Logo';
import Menu from './components/menu/Menu';
import Section from './components/section/Section';

const App = () => {
	return (
		<>
			<header>
				<div>
					<Logo />
					<Menu />
				</div>
			</header>
			<main>
				<Section />
			</main>
		</>
	);
};

export default App;
