import { Flex, Text } from "@chakra-ui/react"
import { GiConfirmed } from 'react-icons/gi'
import Footer from "./Footer";
import Nav from "./Nav";

function ConfirmedBooking() {

	return (
		<main>
			<Nav/>
			<Flex w="full" h="350" alignItems={"center"} justifyContent="center" direction={"column"}>
				<GiConfirmed size={72} color="green" />
				<Text fontSize={48} fontFamily="heading">Booking Confirmed</Text>
			</Flex>
			<Footer/>
		</main>
	);
}

export default ConfirmedBooking;
