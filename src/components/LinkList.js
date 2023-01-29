import { Link as ReachLink } from 'react-router-dom'
import { Flex, Link, Text } from '@chakra-ui/react'

function LinkList({navigation}) {
	return (
		<Flex direction={'column'}>
			<Text fontWeight={'bold'} color="primary" marginBottom={1}>{navigation.title}</Text>
			{
				navigation.lists.map((list) => (
					<Link as={ReachLink} to={list.link} key={list.name}>{list.name}</Link>
				))
			}
		</Flex>
	)
}

export default LinkList;
