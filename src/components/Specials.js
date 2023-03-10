import { Flex, Text } from "@chakra-ui/react";
import LLButton from "./inputs/LLButton";
import Menu from "./Menu";

const menus = [
	{
		title: "Greek salad",
		price: "$ 12.99",
		description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
		image: () => require("../images/greek salad.jpg")//
	},
	{
		title: "Bruchetta",
		price: "$ 5.99",
		description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
		image: () => require("../images/bruchetta.jpg")//bruchetta.svg.default
	},
	{
		title: "Lemon Dessert",
		price: "$ 5.00",
		description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
		image: () => require("../images/lemon dessert.jpg")//
	},
  ];

function Specials() {
	return (
		<Flex
			w={{sm:'470px',md:'768px',lg:'1120px'}}
			direction={"column"}
			marginLeft="auto"
			marginRight="auto"
			paddingBottom={10}
			>
			<Flex
				direction={{sm:'column',lg:'row'}}
				h={{sm:'300px',lg:'20'}}
				w="100%"
				alignItems="center"
				justifyContent="space-between"
				padding={10}
				paddingTop="100px"
				>
				<Text fontFamily="heading" fontSize="6xl">Specials</Text>
				<LLButton msg="Online Menu" />
			</Flex>
			<Flex
				direction={{sm:'column',lg:'row'}}
				h="fit-content"
				w="100%"
				alignItems="center"
				justifyContent="space-between"
				marginTop={{sm:'3',lg:'10'}}
				gap={{sm:'10',lg:'0'}}
				padding={1}>
				{
					menus.map((menu) => (
						<Menu
							key={menu.title}
							menu={menu}
						/>
					))
				}
			</Flex>

		</Flex>
	)
}

export default Specials;
