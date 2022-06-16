import React from 'react';
import items from './data.items';

import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack
} from '@chakra-ui/react';

export function ColLeft() {
  return (
    <VStack p={8} w="60%">
      <SimpleGrid columns={1} spacing={2} w="100%">
        {items.map((item, index) => {
          const { label, description, imgSrc } = item;

          return (
            <Button
              key={index}
              alignItems="flex-start"
              h="auto"
              size="sm"
              textAlign="left"
              variant="ghost"
            >
              <HStack py={2} spacing={4} w="100%">
                <Box
                  bgColor="gray.100"
                  borderRadius="base"
                  boxSize={10}
                  minW={10}
                  p={2}
                >
                  <Image src={imgSrc} alt={label} />
                </Box>

                <div>
                  <Heading fontWeight="semibold" mb={1} size="xs">
                    {label}
                  </Heading>
                  <Text color="gray.500" fontSize="xs">
                    {description}
                  </Text>
                </div>
              </HStack>
            </Button>
          );
        })}
      </SimpleGrid>
    </VStack>
  );
}
