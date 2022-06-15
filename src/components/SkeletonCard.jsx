import { Box, Flex, HStack, VStack } from '@chakra-ui/react';
import React from 'react';

function Skeleton() {
  return (
    <VStack spacing={4}>
      <Box bg="gray.100" borderRadius="base" height="200px" width="100%"></Box>
      <Flex width="100%">
        <HStack width="100%">
          <Box
            bg="gray.200"
            borderRadius="full"
            height="20px"
            width="20px"
          ></Box>
          <Box bg="gray.200" borderRadius="2xl" height="20px" width="50%"></Box>
        </HStack>
        <Box
          bg="gray.100"
          borderRadius="2xl"
          height="20px"
          marginLeft="auto"
          width="25%"
        ></Box>
      </Flex>
    </VStack>
  );
}

export default Skeleton;
