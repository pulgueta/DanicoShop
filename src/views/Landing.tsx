import { Heading, VStack } from "@chakra-ui/react";

export const Landing = () => {
  return (
    <VStack
      h="calc(100vh - 124px)"
      bgGradient='linear(to-t, blue.100, blue.200)'
    >
      <Heading
        py={4}
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontWeight="bold"
      >
        Welcome to DanicoShop
      </Heading>
    </VStack>
  );
};
