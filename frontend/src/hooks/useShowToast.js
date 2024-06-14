import { useToast } from "@chakra-ui/toast";
import { useCallback } from "react";

const useShowToast = () => {
  const toast = useToast();

  const showToast = useCallback(
    (title, description, status) => {
      toast({
        title,
        description,
        status,
        duration: 3000,
        isClosable: true,
        position: 'top-right'
      });
    },
    [toast]
  );

  return showToast;
};

export default useShowToast;
