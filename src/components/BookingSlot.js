import { Button, Flex, Text } from "@chakra-ui/react";

function handleStatusChange(status,dispatch) {
    console.log('clicked',status)
    // console.log('dispatch',dispatch)
    dispatch({time:status})
}

export default function BookingSlot(props){

    // props.dispatch({time:props.time.time})

    return (
        <Button border={"1px solid #aaa"} w="80px" h="35px" borderRadius={10}
        bg={ !props.time.status ? "" : "primary" }
        color={ !props.time.status ? "black" : "white" }
        alignItems="center" justifyContent="center" margin={3}
        onClick={()=>handleStatusChange(props.time.time,props.dispatch)}//props.dispatch({time:props.time.time})//console.log(props.dispatch)
        // onClick={()=>props.dispatch({time:props.time.time})}
        // onClick={()=>props.dispatch({time:props.time.time})}
        >
            <Text fontSize={18}>{props.time.time}</Text>
        </Button>
    )
}