import { Link as ReachLink } from 'react-router-dom'
import { Flex, Spacer, Link } from '@chakra-ui/react'
// import { ExternalLinkIcon } from '@chakra-ui/icons'
import Logo from './Logo'
// import logo from '../Logo.svg';


function Nav() {
	return (
		<nav>
            <Flex
                direction={{sm:'column',lg:'row'}}
                w={{sm:'470px',md:'768px',lg:'1120px'}}
                marginLeft="auto"
                marginRight="auto">
                <Flex
                    h="20"
                    alignItems="center"
                    justifyContent={{sm:'center',md:''}}
                    marginBottom={{sm:'3',md:'0'}}
                    >
                    <Logo />
                </Flex>
                <Spacer />
                <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    gap={{sm:'3',md:'10'}}
                    fontWeight="extrabold"
                    fontFamily={"Karla"}
                    textTransform="uppercase"
                    // className="uppercase"
                    fontSize={{sm:'10px',lg:'1em'}}
                >
                    <Link as={ReachLink} to="/">Home</Link>
                    <Link>About</Link>
                    <Link>Menu</Link>
                    <Link as={ReachLink} to="/booking">Reservations</Link>
                    <Link>Order Online</Link>
                    <Link>Login</Link>
                </Flex>
            </Flex>
        </nav>
	);
}

export default Nav;
