import { Avatar, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import Action from "./Action";

const Comment = ({ username, userAvatar, comment, createAt, likes }) => {
  const [liked, setLiked] = useState(false);

  return (
    <>
      <Flex gap={4} py={2} my={2} w={"full"}>
        <Avatar src={userAvatar} size={"sm"} />
        <Flex gap={1} w={"full"} flexDirection={"column"}>
          <Flex
            w={"full"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Text fontSize={"sm"} fontWeight={"bold"}>
              {username}
            </Text>
            <Flex gap={2} alignItems={"center"}>
              <Text fontSize="sm" color={"gray.light"}>
                {createAt}
              </Text>
              <BsThreeDots />
            </Flex>
          </Flex>
          <Text>{comment}</Text>
          <Action setLike={setLiked} liked={liked}></Action>
          <Text>{likes + (liked ? 1 : 0)} likes</Text>
        </Flex>
      </Flex>
    </>
  );
};

export default Comment;
