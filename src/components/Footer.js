import Logo from '../images/LogoV.png'
import { Flex, Image } from "@chakra-ui/react";
import LinkList from './LinkList'

const navigations = [
	{
		title: "Navigation",
		lists: [
			{
				name: "Home",
				link: "/"
			},
			{
				name: "About",
				link: ""
			},
			{
				name: "Menu",
				link: ""
			},
			{
				name: "Reservations",
				link: "/booking"
			},
			{
				name: "Order Online",
				link: ""
			},
			{
				name: "Login",
				link: ""
			},
		]
	},
	{
		title: "Contact",
		lists: [
			{
				name: "Address",
				link: ""
			},
			{
				name: "Phone Number",
				link: ""
			},
			{
				name: "Email",
				link: ""
			},
		]
	},
	{
		title: "Social Media Links",
		lists: [
			{
				name: "Address",
				link: ""
			},
			{
				name: "Phone Number",
				link: ""
			},
			{
				name: "Email",
				link: ""
			},
		]
	},
  ];

function Footer() {
	return (
		<footer>
			<Flex
				bg="blackAlpha.100"
				paddingY={20}
			>
				<Flex
					direction={{sm:'column',md:'row'}}
					minH={10}
					w="1120px"
					marginLeft="auto"
					marginRight="auto"
					gap={{sm:10,md:20}}
					paddingLeft={10}
					justifyContent='space-between'
				>
					<Image src={Logo} w='10%' />
					<Flex gap={{sm:10,md:32}}>
						{
							navigations.map((navigation) => (
								<LinkList
									key={navigation.title}
									navigation={navigation}
								/>
							))
						}
					</Flex>
				</Flex>
			</Flex>

		</footer>
	);
}

export default Footer;
