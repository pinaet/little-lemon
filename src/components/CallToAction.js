import { Button, Flex, Image, Text } from '@chakra-ui/react'
import food from '../images/restauranfood.jpg';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
// 495E57
function CallToAction(props) {

	// function clickButton(){
	// 	props.setWord('test')
	// }
	const [flag, setFlag] = useState(false)
	const navigate = useNavigate()

	useEffect(()=>{
		if(flag){
			console.log('tst')
			navigate('/booking')
		}
	})

	return (
		<header>
			<Flex
				bg="#495E57"
			>
				<Flex
					direction={{sm:'column',lg:'row'}}
					minH={10}
					w={{sm:'470px',md:'768px',lg:'1120px'}}
					marginLeft="auto"
					marginRight="auto"
					bg="#495E57"
					padding={10}
					paddingTop={3}
					justifyContent="space-between"
				>
					<Flex w={450} direction={'column'} gap="50px">
						<Flex direction={'column'}>
							<Text fontFamily={"Markazi Text"} fontSize="64px" color={"#F4CE14"} marginBottom={{sm:-5,md:0}}>Little Lemon</Text>
							<Text fontFamily={"Markazi Text"} fontSize="40px" color={"white"}>Chicago</Text>
							<Text fontFamily={"Karla"} fontSize="18px" color={"white"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
						</Flex>
						<Button marginBottom={{sm:5,md:0}} colorScheme='yellow' size='lg' w={'fit-content'} rounded="18px" fontFamily={"Karla"} fontSize="18px" onClick={()=>setFlag(true)}>
							Reserve a Table
						</Button>
					</Flex>
					<Image src={food} alt='Dan Abramov' borderRadius="18px" size="sm"
						boxSize='450px'
						border="1px solid"
						marginTop="10px"
						marginBottom={"-80px"}
						zIndex={10}
						objectFit='cover'/>
					{/* <Button onClick={clickButton}>Click me!={props.word}</Button> */}
				</Flex>
			</Flex>
		</header>
	);
}

export default CallToAction;
