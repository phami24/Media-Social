import { Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return(
    <Link to={"/mp"}>
        <Flex w={"full"} justifyContent={"center"}>
            <Button mx={"auto"}>Vistit Profile Page</Button>
        </Flex>
    </Link>
  );
};

export default HomePage;
