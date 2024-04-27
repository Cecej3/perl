import {
  Avatar,
  Box,
  Text,
  Heading,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./nav.scss";
import { useUser } from "api/hooks";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { useRef } from "react";
import { navLinks } from "api/constants";
import { FaCircleArrowRight } from "react-icons/fa6";

const Navbar = () => {
	const { isAuth } = useUser();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = useRef();
	return (
    <>
      <Box className="nav-container">
        <Box className="nav-logo-wrapper">
          <FiMenu onClick={onOpen} />
          <Link to="/">
            <Heading as="h2" size="lg" noOfLines={0} margin={0}>
              ZNF
            </Heading>
          </Link>
        </Box>
        {!isAuth && (
          <Box className="nav-links">
            <Link to={"/register"} className="link-btn-filled">
              <Text>Sign up</Text>
            </Link>
            <Link to={"/login"} className="link-btn-outlined">
              Login
            </Link>
          </Box>
        )}

        {isAuth && window.location.pathname === "/" && (
          <Box className="nav-links">
            <Link to={"/dashboard"} className="link-btn-filled">
              Dashboard
            </Link>
          </Box>
        )}

        {isAuth && window.location.pathname !== "/" && (
          <Avatar
            bg={"purple.700"}
            size={"sm"}
            icon={<MdOutlineWifiCalling3 />}
          />
        )}
      </Box>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            {navLinks.map((link) => (
              <Link to={link.url} key={link.name}>{link.name}</Link>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;
