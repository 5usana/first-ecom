import './App.css';
import GlobalStyle from './styles/globalStyles';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Products from './components/Products';
import LandingPage from './components/LandingPage';

function App() {
	return (
		<>
			<GlobalStyle />
			<NavBar />
			<LandingPage />
			<Products />
			<Footer />
		</>
	);
}

export default App;
