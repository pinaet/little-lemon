import { Flex, Text } from "@chakra-ui/react";
import Review from "./Review";

function CustomersSay() {
	return (
		<Flex
			bg="primary"
			paddingY={"20"}
			paddingBottom={36}
			>
			<Flex
				direction={"column"}
				minH={10}
				w="1120px"
				marginLeft="auto"
				marginRight="auto"
				bg="primary"
				alignItems={"center"}
			>
				<Text fontFamily={"Markazi Text"} fontSize="40px" color="secondary">Testimonials</Text>
				<Flex w="full" justifyContent="space-between" paddingTop={6}>
					<Review />
					<Review />
					<Review />
					<Review />
				</Flex>
			</Flex>
		</Flex>
	)
}

export default CustomersSay;
