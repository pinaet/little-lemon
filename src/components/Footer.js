import LogoV from './Logo'
import LinkList from './LinkList'

const navigations = [
	{
		title: "Navigation",
		lists: [
			{
				name: "Home",
				link: ""
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
				link: ""
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
			{/* Logo-vertical */}
			<LogoV></LogoV>

			{
				navigations.map((navigation) => (
					<LinkList
						key={navigation.title}
						navigation={navigation}
					/>
				))
			}
		</footer>
	);
}

export default Footer;
