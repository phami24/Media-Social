import { Avatar, Box, Flex, Image, Skeleton, Text } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { selectedConversationAtom } from "../atoms/messageAtom";
import { useState } from "react";
const Message = ({ ownMessage, message, isLastMessage }) => {
  const selectedconversation = useRecoilValue(selectedConversationAtom);
  const [imgLoaded, setImgLoaded] = useState(false);
  return (
    <>
      {ownMessage ? (
        <>
          <Flex gap={2} alignSelf={"flex-end"}>
            {message.text && (
              <Flex bg={"blue.200"} maxW={"350px"} p={1} borderRadius={"lg"}>
                <Text color={"white"}>{message.text}</Text>
              </Flex>
            )}
            {message.img && !imgLoaded && (
              <Flex mt={5} w={"200px"}>
                <Image
                  src={message.img}
                  hidden
                  onLoad={() => setImgLoaded(true)}
                  alt="Message image"
                  borderRadius={4}
                />
                <Skeleton w={"200px"} h={"200px"} />
              </Flex>
            )}

            {message.img && imgLoaded && (
              <Flex mt={5} w={"200px"}>
                <Image src={message.img} alt="Message image" borderRadius={4} />
              </Flex>
            )}
          </Flex>
          <Box p={1} alignSelf={"flex-end"} ml={1} fontWeight={"bold"}>
            {isLastMessage && message.seen && (
              <Avatar size="2xs" src={selectedconversation.userProfilePic} />
            )}
          </Box>
        </>
      ) : (
        <Flex gap={2}>
          <Avatar src={selectedconversation.userProfilePic} w={7} h={7} />
          {message.text && (
            <Text
              maxW={"350px"}
              bg={"gray.400"}
              p={1}
              borderRadius={"md"}
              color={"black"}
            >
              {message.text}
            </Text>
          )}
          {message.img && !imgLoaded && (
            <Flex mt={5} w={"200px"}>
              <Image
                src={message.img}
                hidden
                onLoad={() => setImgLoaded(true)}
                alt="Message image"
                borderRadius={4}
              />
              <Skeleton w={"200px"} h={"200px"} />
            </Flex>
          )}

          {message.img && imgLoaded && (
            <Flex mt={5} w={"200px"}>
              <Image src={message.img} alt="Message image" borderRadius={4} />
            </Flex>
          )}
        </Flex>
      )}
    </>
  );
};

export default Message;
