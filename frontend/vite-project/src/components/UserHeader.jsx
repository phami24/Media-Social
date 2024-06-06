import {
  VStack,
  Box,
  Flex,
  Text,
  Link,
  MenuButton,
  Menu,
  Portal,
  MenuList,
  MenuItem,
  useToast,
} from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/avatar";
import { BsInstagram } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";
const UserHeader = () => {
  const toast = useToast();
  const copyURL = () => {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl).then(() => {
      console.log("URL copied to clipboard : ", currentUrl);
      toast({
        title: "Profile link copied !",
        isClosable: true,
        status: "success",
        duration: 3000,
        position: "top right",
      });
    });
  };
  return (
    <VStack gap={4} alignItems={"start"}>
      {/* Avatar and Name */}
      <Flex justifyContent={"space-between"} w={"full"}>
        <Box>
          <Text fontSize={"2xl"} fontWeight={"bold"}>
            Mark Zuckerbeng
          </Text>
          <Flex gap={2} alignItems={"center"}>
            <Text fontSize={"sm"}>markzuckerbeng</Text>
            <Text
              fontSize={"xs"}
              bg={"gray.dark"}
              color={"gray.light"}
              p={2}
              borderRadius={"full"}
            >
              media.next
            </Text>
          </Flex>
        </Box>
        <Box>
          <Avatar name="Mark Zuckerbeng" src="/zuck-avatar.png" size={
            {
              base:"md",
              md:"xl"
            }
            } />
        </Box>
      </Flex>
      {/* Description and followers*/}
      <Text>Co-founder , executive chairman and CEO of Meta Platfroms.</Text>
      <Flex w={"full"} justifyContent={"space-between"}>
        <Flex gap={2} alignItems={"center"}>
          <Text color={"gray.light"}> 3.2K followers</Text>
          <Box w={1} h={1} bg={"gray.light"} borderRadius={"full"}></Box>
          <Link color={"gray.light"}>instagram.com</Link>
        </Flex>
        {/* Other media icons */}
        <Flex>
          <Box className="icon-container">
            <BsInstagram size={24} cursor={"pointer"} />
          </Box>
          <Box className="icon-container">
            <Menu>
              <MenuButton>
                <CgMoreO size={24} cursor={"pointer"} />
              </MenuButton>
              <Portal>
                <MenuList bg={"gray.dark"}>
                  <MenuItem
                    color={"gray.light"}
                    bg={"gray.dark"}
                    onClick={copyURL}
                  >
                    Copy link
                  </MenuItem>
                </MenuList>
              </Portal>
            </Menu>
          </Box>
        </Flex>
      </Flex>

      <Flex w={"full"}>
        <Flex flex={1} borderBottom={"1.5px solid white"} justifyContent={"center"} pb="3" cursor={"pointer"}>
          <Text fontWeight={"bold"} >Threads</Text>
        </Flex>
        <Flex flex={1} borderBottom={"1.5px solid gray"} color={"gray.light"} justifyContent={"center"} pb="3" cursor={"pointer"}>
          <Text fontWeight={"bold"} >Replies</Text>
        </Flex>
      </Flex>
    </VStack>
  );
};

export default UserHeader;
