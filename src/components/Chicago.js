import { Flex, Image, Text } from "@chakra-ui/react";
import pixa from '../images/Mario and Adrian A.jpg';
import pixb from '../images/restaurant chef B.jpg';

function Chicago() {
	return (
		<Flex
			bg="white"
			paddingY={10}
		>
			<Flex
				direction={{sm:'column',lg:'row'}}
				minH={10}
				w={{sm:'470px',md:'768px',lg:'1120px'}}
				marginLeft="auto"
				marginRight="auto"
				paddingY={10}
				paddingLeft={{sm:'5',lg:'10'}}
				justifyContent="space-between"
			>
				<Flex w={400} direction={'column'} gap="50px" paddingRight={{lg:'10'}}>
					<Flex direction={'column'}>
						<Text fontFamily={"Markazi Text"} fontSize="64px" padding={0} marginBottom={-5}>Little Lemon</Text>
						<Text fontFamily={"Markazi Text"} fontSize="40px" padding={0} marginBottom={10}>Chicago</Text>
						<Text fontFamily={"Karla"} fontSize="18px" >Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </Text>
					</Flex>
				</Flex>
				<Image src={pixb} alt='Dan Abramov' borderRadius="18px" size="sm"
					boxSize={{lg:'450px'}}
					border="1px solid white"
					marginTop={{sm:'50px',lg:'150px'}}
					marginRight={"-250px"}
					zIndex={10}
					objectFit='cover'/>
				<Image src={pixa} alt='Dan Abramov' borderRadius="18px" size="sm"
					boxSize={{lg:'450px'}}
					border="1px solid"
					marginTop="10px"
					marginBottom={{sm:'-50px',lg:'-80px'}}
					zIndex={0}
					objectFit='cover'/>
			</Flex>
		</Flex>
	)
}

export default Chicago;
