import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import Action from "../components/Action";
import { useState } from "react";
import Comment from "../components/Comment";

const PostPage = () => {
  const [liked, setLiked] = useState(false);
  return (
    <>
      <Flex>
        <Flex w={"full"} alignItems={"center"} gap={3}>
          <Avatar src="/zuck-avatar.png" size={"md"} name="Mark Zuckerberg" />
          <Flex>
            <Text fontSize={"sm"} fontWeight={"bold"}>
              markzuckerberg
            </Text>
            <Image src="/verified.png" w="4" h={4} ml={4} />
          </Flex>
          <Flex gap={4} alignItems={"center"}>
            <Text fontSize={"sm"} color={"gray.light"}>
              1d
            </Text>
            <BsThreeDots />
          </Flex>
        </Flex>
      </Flex>
      <Text my={3}>Let&apos;s talk about Threads</Text>
      <Box
        borderRadius={6}
        overflow={"hidden"}
        border={"1px solid"}
        borderColor={"gray.light"}
      >
        <Image src="/post1.png" w={"full"} />
      </Box>
      <Flex gap={3} my={3}>
        <Action liked={liked} setLike={setLiked}></Action>
      </Flex>
      <Flex gap={2} alignItems={"center"}>
        <Text color={"gray.light"} fontSize={"sm"}>
          238 replices
        </Text>
        <Box w={0.5} h={0.5} borderRadius={"full"} bg={"gray.light"}></Box>
        <Text color={"gray.light"} fontSize={"sm"}>
          {200 + (liked ? 1 : 0)} likes
        </Text>
      </Flex>
      <Divider my={4} />
      <Flex justifyContent={"space-between"}>
        <Flex gap={2} alignItems={"center"}>
          <Text fontSize={"2xl"}>👋</Text>
          <Text color={"gray.light"}>Get the app to like,reply and post.</Text>
          <Button>Get</Button>
        </Flex>
      </Flex>
      <Divider my={4} />
      <Comment
        comment="Looks readlly good"
        createAt="2d"
        likes={100}
        username="jonedoe"
        userAvatar="https://scontent.fhan20-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=fvfu5h5O5w8Q7kNvgGfznVf&_nc_ht=scontent.fhan20-1.fna&oh=00_AYB65ID8ymFrW9T4cUsu3RE-CSV0Nw99mO6M3cnsM8YEHQ&oe=66848578"
      />
      <Comment
        comment="Hallo "
        createAt="1d"
        likes={200}
        username="minhpham"
        userAvatar="https://scontent.fhan20-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=fvfu5h5O5w8Q7kNvgGfznVf&_nc_ht=scontent.fhan20-1.fna&oh=00_AYB65ID8ymFrW9T4cUsu3RE-CSV0Nw99mO6M3cnsM8YEHQ&oe=66848578"
      />
    </>
  );
};

export default PostPage;
