import { Flex, Button, Image, Text } from '@chakra-ui/react'
import food from '../images/restauranfood.jpg';
// 495E57
function Header() {
	return (
		<header>
			<Flex
				bg="#495E57"
			>
				<Flex
					minH={10}
					w="1120px"
					marginLeft="auto"
					marginRight="auto"
					bg="#495E57"
					padding={10}
					paddingTop={3}
					justifyContent="space-between"
				>
					<Flex w={450} direction={'column'} gap="50px">
						<Flex direction={'column'}>
							<Text fontFamily={"Markazi Text"} fontSize="64px" color={"#F4CE14"}>Little Lemon</Text>
							<Text fontFamily={"Markazi Text"} fontSize="40px" color={"white"}>Chicago</Text>
							<Text fontFamily={"Karla"} fontSize="18px" color={"white"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
						</Flex>
						<Button colorScheme='yellow' size='lg' w={'fit-content'} rounded="18px" fontFamily={"Karla"} fontSize="18px" >
							Reserve a Table
						</Button>
					</Flex>
					{/* <Box boxSize='sm'>
					</Box> */}
						<Image src={food} alt='Dan Abramov' borderRadius="18px" size="sm" 
							boxSize='450px'
							border="1px solid"
							marginTop="10px"
							marginBottom={"-60px"}
							zIndex={10}
							objectFit='cover'/>
				</Flex>
			</Flex>
		</header>
	);
}

export default Header;
