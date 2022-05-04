import './App.css';
import GlobalStyle from './styles/globalStyles';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
	return (
		<>
			<GlobalStyle />
			<NavBar />
			<h1>items here</h1>
			<Footer />
		</>
	);
}

export default App;
