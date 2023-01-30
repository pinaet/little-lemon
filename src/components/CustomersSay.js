import { Flex, Text } from "@chakra-ui/react";
import Review from "./Review";

const reviews = [
	{
		name: 'Dan Abrahmov',
		review: 'Lorem ipsum dolor sit amet.',
		avatar: 'https://bit.ly/dan-abramov'
	},
	{
		name: 'Kent Dodds',
		review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada iaculis arcu.',
		avatar: 'https://bit.ly/kent-c-dodds'
	},
	{
		name: 'Ryan Florence',
		review: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
		avatar: 'https://bit.ly/ryan-florence'
	},
	{
		name: 'Christian Nwamba',
		review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi.',
		avatar: 'https://xsgames.co/randomusers/assets/avatars/male/1.jpg' //xsgames.co/randomusers/avatar.php?g=male
	},
]

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
					{
						reviews.map((review)=>{
							return <Review review={review} />
						})
					}
				</Flex>
			</Flex>
		</Flex>
	)
}

export default CustomersSay;
