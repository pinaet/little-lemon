import { Avatar, Box, Card, CardBody, CardHeader, Flex, Heading, Stack, Text } from "@chakra-ui/react"

function Review(props){
    return (
        <Card w='250px'>
            <CardHeader marginBottom={0} paddingBottom={2}>
                <Text fontWeight={'bold'} fontSize="lg" marginBottom={4}>Rating</Text>
                <Flex spacing='4'>
                    <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                        <Stack direction='row'>
                            <Avatar src='https://bit.ly/broken-link' />
                        </Stack>
                        <Box>
                            <Heading size='md'>Name</Heading>
                        </Box>
                    </Flex>
                </Flex>
            </CardHeader>
            <CardBody>
                <Text>
                    Review Text
                </Text>
            </CardBody>
        </Card>
    )
}

export default Review