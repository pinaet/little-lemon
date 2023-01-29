import { Link as ReachLink } from 'react-router-dom'
import { Flex, Spacer, Link } from '@chakra-ui/react'
// import { ExternalLinkIcon } from '@chakra-ui/icons'
import Logo from './Logo'
// import logo from '../Logo.svg';


function Nav() {
	return (
		<nav>
            <Flex
                w="1120px"
                    marginLeft="auto"
                    marginRight="auto">
                <Flex
                    h="20"
                    alignItems="center">
                    <Logo />
                </Flex>
                <Spacer />
                <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    gap="10"
                    fontWeight="extrabold"
                    fontFamily={"Karla"}
                    textTransform="uppercase"
                    // className="uppercase"
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
