import { Box, Flex, Image, Text } from "@chakra-ui/react"
import { RiEBike2Fill } from 'react-icons/ri'

function Menu(props){
    return (
        <Box w='xs'>
            <Image
                roundedTop={20}
                h="214px"
                w="320px"
                objectFit='cover'
                src={props.menu.image()}
                alt={props.menu.title}/>
            <Flex padding={5} bg="#EDEFEE" direction={"column"} minH="273px" justifyContent="space-between">
                <Flex direction={"column"} >
                <Flex
                w="full"
				justifyContent="space-between">
                    <Text fontFamily="body" fontWeight={"bold"} fontSize={"18px"} color="black">{props.menu.title}</Text>
                    <Text fontFamily="body" fontWeight={"bold"} fontSize={"18px"} color="#EE9972">{props.menu.price}</Text>
                </Flex>
                <Text marginTop={6} fontFamily="body" fontSize={"18px"} color="primary">{props.menu.description}</Text>
                </Flex>
                <Flex
                w="full"
                gap={4}
				alignItems="center"
                marginTop={5}>
                    <Text fontFamily="body" fontWeight={"bold"} fontSize={"18px"} color="black">Order a delivery</Text>
                    <RiEBike2Fill color="primary"/>
                </Flex>
            </Flex>
        </Box>
    )
}

export default Menu