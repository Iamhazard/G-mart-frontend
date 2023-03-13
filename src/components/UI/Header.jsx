import React from "react";

import { Box, Flex, HStack,Show,Button,useColorMode,IconButton, useColorModeValue, useDisclosure, Stack } from "@chakra-ui/react";
import Logo from "./Logo";

import {
  MoonIcon,
  SunIcon,
  HamburgerIcon,
  CloseIcon,
  //AddIcon,
} from "@chakra-ui/icons";


const Header =()=>{
 

    const {colorMode ,toggleColorMode}=useColorMode();
    const { isOpen,onOpen,onClose}=useDisclosure();

  const onButtonClick = () => {

  };
   return(
    <Box 
    bg={useColorModeValue("gray.100","gray.900")}
    px={9}
    width={["100%"]}
>
    <Flex h={16} alignItems={"center"} justifyContent={"space-between" }>
<HStack w={"42%"} ml="50px" >
<Logo/>
   <Show breakpoint="(min-width: 1000px)">
    {" "}
    </Show>
</HStack>
<Flex h={16} alignItems={"center"} justifyContent={"space-between"} >
<HStack spacing={12} alignItems={"center"}>
<HStack 
as={"nav"}
spacing={30}
display={{base: "none", md: "flex"}}
id="myDiv">
<Button className="btnRes">
                  <a href="#Home">
                    {" "}
                    <b>Home</b>
                  </a>
                </Button>

                <Button className="btnRes">
                  <a href="#About">
                    <b>About</b>
                  </a>
                </Button>

                <Button className="btnRes">
                  <a href="#Skills">
                    {" "}
                    <b>Services</b>
                  </a>
                </Button>
                <Button className="btnRes">
                  <a href="#Contact">
                    <b>Contact</b>
                  </a>
                </Button>
</HStack>
</HStack>
</Flex>
<Flex alignItems={"center"}>
<Stack direction={"row"} spacing={7}>
    <Button onClick={toggleColorMode} >
 {colorMode  ==="light" ? <MoonIcon/> : <SunIcon/>}
    </Button>
    <Button
                backgroundColor="#a891b7"
                _hover={{ bg: "#a891b7", color: "black" }}
                color="white"
                variant="solid"
                onClick={onButtonClick}
                size={["sm", "md"]}
                id="loginbtn" >
<a href=""target={"_blank"}>
    SignUp
</a>
      </Button>
              
</Stack>

</Flex>
<IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          {isOpen ? (
            <Box pb={4} display={{ md: "none" }}>
              <Stack as={"nav"} spacing={4}>
                <Button  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}>
                  <a href="#Home">
                    {" "}
                    <b>Home</b>
                  </a>
                </Button>
                <Button  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}>
                  <a href="#Home">
                    {" "}
                    <b>Home</b>
                  </a>
                </Button>

                <Button  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}>
                  <a href="#Home">
                    {" "}
                    <b>Home</b>
                  </a>
                </Button>
                <Button  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}>
                  <a href="#Home">
                    {" "}
                    <b>Home</b>
                  </a>
                </Button>
                <Button
                  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}
                >
                  <a href="#Home">
                    {" "}
                    <b>Home</b>
                  </a>
                </Button>

                <Button
                  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}
                >
                  <a href="#About">
                    <b>About</b>
                  </a>
                </Button>
                <Button
                  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}
                >
                  <a href="#Projects">
                    <b></b>
                  </a>
                </Button>

                <Button
                  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}
                >
                  <a href="#Contact">
                    <b>Contact</b>
                  </a>
                </Button>
              </Stack>
            </Box>
          ) : null}

    </Flex>


</Box>
   );
}

export default Header;