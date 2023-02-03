import { Flex, Text } from "@chakra-ui/react"
import { GiConfirmed } from 'react-icons/gi'
import Nav from "./Nav";

function ConfirmedBooking() {

	return (
		<main>
			<Nav/>
			<Flex w="full" h="2xl" alignItems={"center"} justifyContent="center" direction={"column"}>
				<GiConfirmed size={72} color="green" />
				<Text fontSize={48} fontFamily="heading">Booking Confirmation</Text>
			</Flex>
		</main>
	);
}

export default ConfirmedBooking;
