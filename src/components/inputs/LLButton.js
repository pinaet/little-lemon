import { Button } from '@chakra-ui/react'

function LLButton(props) {
	return (
        <Button colorScheme='yellow' size='lg' w={'fit-content'} rounded="18px" fontFamily={"Karla"} fontSize="18px" >
            {props.msg}
        </Button>
	);
}

export default LLButton;
