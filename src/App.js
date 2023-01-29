import './App.css';
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import {Routes, Route} from 'react-router-dom'
import HomePage from './components/HomePage';
import BookingPage from './components/BookingPage';

// custom theme
const theme = extendTheme({
	colors: {
	  primary: "#495E57",
	  secondary: "#F4CE14",
	},
	fonts: {
		body: "Karla",
		heading: "Markazi Text",
		mono: "Menlo, monospace",
	},
  })

function App() {
	return (
		<ChakraProvider theme={theme}>
			<Routes>
				<Route path="/" element={<HomePage />}/>
				<Route path="/booking" element={<BookingPage />}/>
			</Routes>
		</ChakraProvider>
	);
}

export default App;
