import {
  VStack,
  Box,
  Flex,
  Text,
  MenuButton,
  Menu,
  Portal,
  MenuList,
  MenuItem,
  useToast,
  Button,
} from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/avatar";
import { BsInstagram } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";
import { useRecoilValue } from "recoil";
import userAtom from "../atoms/userAtom";
import { Link } from "react-router-dom";
import { useState } from "react";
import useShowToast from "../hooks/useShowToast";
const UserHeader = ({ user }) => {
  const toast = useToast();
  const showToast = useShowToast();
  const currentUser = useRecoilValue(userAtom);
  const [following, setFollowing] = useState(
    user.followers.includes(currentUser._id)
  );
  const [updating, setUpdating] = useState(false);

  const handleFollowUnFollow = async () => {
    if (!currentUser) {
      showToast("Error", "You must be logged to follow", "error");
      return;
    }
    if (updating) return;
    setUpdating(true);
    try {
      const res = await fetch(`/api/users/follow/${user._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (data.error) {
        showToast("Error", data.error, "error");
        return;
      }
      if (following) {
        showToast("Success", `Unfollow ${user.name}`, "success");
        user.followers.pop();
      } else {
        showToast("Success", `Follow ${user.name}`, "success");
        user.followers.push(currentUser._id);
      }
      console.log(data);
      setFollowing(!following);
    } catch (error) {
      showToast("Error", error, "error");
    } finally {
      setUpdating(false);
    }
  };

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
            {user.name}
          </Text>
          <Flex gap={2} alignItems={"center"}>
            <Text fontSize={"sm"}>{user.username}</Text>
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
          {user.profilePic && (
            <Avatar
              name="Mark Zuckerbeng"
              src={user.profilePic}
              size={{
                base: "md",
                md: "xl",
              }}
            />
          )}
          {!user.profilePic && (
            <Avatar
              name="Mark Zuckerbeng"
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIALQAvwMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUCAwYBB//EADYQAQACAQIFAgIHBgcAAAAAAAABAgMEEQUSMUFRISJSYRNxgZGhscEyNEJi8PEVIyQzcpLR/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIRAxEAPwD6WA0yAAAAAAAABETM7RG8+Ib6aLU36YpiPn6A0CX/AIbqdulf+zTm0+bB/uUmI89YFagBAAAAAAAAAAAAAAAABYaThs3iL596x2rHU4XpYvb6a8e2s+2PMrZLVYYsOPDG2OkV+pmCKPLVi9ZraImJ6xL0BR6vRZMWa0Y6XtTrExG+yL0naXTI+r0lNTXpEXjpZdTFCPb1tS81tG1onaYeKgAAAAAAAAAAAAREzO0dRu0VebV4o/m3+4F5gxxhw0xx/DDYDLQAAAAACp4xjiuWmSP4o2n7Fet+MR/p6T4v+kqhqIACAAAAAAAAAACTw399x/b+UozfoJ5dZin57Cr8BlQAAAAAEHjH7rX/AJx+UqdbcZn/ACccebb/AIKlqJQAQAAAAAAAAAAT+F6amWZy339kxy+vdAWnBbe3LXxMSVVkAyoAAAAACPrNNXU49rb81YnlmPKhdJeeWlrT2jdzaxKAKgAAAAAAAAAAlcOzRh1Mc07VtHLM+EUB0wg8JyTfTzSZ3mk/gnMtAAAAAPJmIjeekAicTzxi09qb++8bRHy7qVllvOTJa9pmZtO/qxaQAEAAAAAAAAAAAATOFZox6jltPpeNvt7LpzK64dq51FJpf9uses+UqxMARQABG4jmjFpbevut7YSJnaN1Dq9TbU5eafSsfsx4WDQArIAAAAAAAAAAAAAAseCx78s+Ij9VctuDV2w5Lebbfd/cqrABlQABzMxtMx4dM53U15NRlr4tKxK1gKgAAAAAAAAAAAAPaVte0VpWbTPaIWGn4Xafdnty/wAteoqFgw3z3imON57z2hfYMVcGKuOvSO/l7jx0xV5cdYrHyZpaoAgAAK7iektefpsUbzt7ojv81iA5kXmp0OLPvbbkv8Ufqq9To82DeZjmp8VWtRHAEAAAAAAAStJosmo2tPtx/FPf6hUWsTaYrWJmZ6RCw0/DL292eeSPhjqsNPpsWnjbHX172nrLcmmNeHDjw12x0iv6tgIoAAAAAAAAACJqOH4c281j6O3mOn3KvUaTLp/W9d6/FHRfnVdHMi31XDaZN7YdqW8dp/8AFVkx3xXmmSs1tHaVRiAIAyx0nJkrSOtp2BM4bo4zT9Llj2RPpHxLjoxx0jHStKxtFY2hky0AAAAAAAAAAAAAAAANOp09NRj5bx69rd4bgHN5cdsOS2O8esMVrxjDvSuaI9Y9J+r+vzVTSCVwyInWU37bz+DwBegMqAAAAAAAAAAAAAAAAAAj6+InR5d/h3UILEr/2Q=="
              size={{
                base: "md",
                md: "xl",
              }}
            />
          )}
        </Box>
      </Flex>
      {/* Description and followers*/}
      <Text>{user.bio}</Text>
      {currentUser._id === user._id && (
        <Link to="/update">
          <Button size={"sm"}>Update Profile</Button>
        </Link>
      )}
      {currentUser._id !== user._id && (
        <Button size={"sm"} onClick={handleFollowUnFollow} isLoading={updating}>
          {following ? "Unfollow" : "Follow"}
        </Button>
      )}
      <Flex w={"full"} justifyContent={"space-between"}>
        <Flex gap={2} alignItems={"center"}>
          <Text color={"gray.light"}> {user.followers.length} followers</Text>
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
        <Flex
          flex={1}
          borderBottom={"1.5px solid white"}
          justifyContent={"center"}
          pb="3"
          cursor={"pointer"}
        >
          <Text fontWeight={"bold"}>Threads</Text>
        </Flex>
        <Flex
          flex={1}
          borderBottom={"1.5px solid gray"}
          color={"gray.light"}
          justifyContent={"center"}
          pb="3"
          cursor={"pointer"}
        >
          <Text fontWeight={"bold"}>Replies</Text>
        </Flex>
      </Flex>
    </VStack>
  );
};

export default UserHeader;
