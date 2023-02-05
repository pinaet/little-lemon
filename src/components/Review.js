import { Avatar, Box, Card, CardBody, CardHeader, Flex, Heading, Stack, Text } from "@chakra-ui/react"
import { HiStar } from 'react-icons/hi'

function Review(props){
    return (
        <Card w='250px'>
            <CardHeader marginBottom={0} paddingBottom={2}>
                <Text fontWeight={'bold'} fontSize="lg" marginBottom={4}>Rating 
                <Flex>
                    <HiStar color="#f4ce14"/><HiStar color="#f4ce14"/><HiStar color="#f4ce14"/><HiStar color="#f4ce14"/><HiStar color="#f4ce14"/>
                </Flex>
                </Text>
                <Flex spacing='4'>
                    <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                        <Stack direction='row'>
                            <Avatar src={props.review.avatar} />
                        </Stack>
                        <Box>
                            <Heading size='md'>{props.review.name}</Heading>
                        </Box>
                    </Flex>
                </Flex>
            </CardHeader>
            <CardBody>
                <Text>
                    {props.review.review}
                </Text>
            </CardBody>
        </Card>
    )
}

export default Review