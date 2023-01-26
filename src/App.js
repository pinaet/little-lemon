import './App.css';
import Nav from'./components/Nav';
import Header from'./components/Header';
import Main from'./components/Main';
import Footer from'./components/Footer';
import { ChakraProvider } from "@chakra-ui/react";

function App() {
	return (
		<ChakraProvider>
			<div className='me-grid'>
				<Nav />
				<Header />
				<Main />
				<Footer />
			</div>
		</ChakraProvider>
	);
}

export default App;
