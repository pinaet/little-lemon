// import { Text } from "@chakra-ui/react";
import { useState } from "react";
import CallToAction from "./CallToAction";
import Chicago from "./Chicago";
import CustomersSay from "./CustomersSay";
import Footer from "./Footer";
import Nav from "./Nav";
import Specials from "./Specials";

function HomePage() {
	const [ word, setWord ] = useState('Hello World!')
	return (
		<>
			<Nav />
			<main>
				<CallToAction setWord={setWord} word={word} />
				<Specials />
				<CustomersSay />
				<Chicago />
			</main>
			<Footer />
			{/* <Text color="secondary" bg="gray.400" fontFamily="heading" fontSize="9xl">{word}</Text> */}
		</>
	)
}

export default HomePage;
