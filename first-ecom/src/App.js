import './App.css';
import GlobalStyle from './styles/globalStyles';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Products from './components/Products';

function App() {
	return (
		<>
			<GlobalStyle />
			<NavBar />

			<Products />
			<Footer />
		</>
	);
}

export default App;
