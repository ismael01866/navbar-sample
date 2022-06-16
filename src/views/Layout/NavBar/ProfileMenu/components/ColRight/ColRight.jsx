import React from 'react';
import items from './data.items';

import { Box, Button, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react';

export function ColRight() {
  return (
    <VStack align="flex-start" bg="gray.50" p={8} w="40%">
      <Text fontSize="sm" fontWeight="semibold" ml={3} mb={2}>
        Browse apps
      </Text>

      <SimpleGrid columns={1} spacing={2} w="100%">
        {items.map((item, index) => {
          const { label, imgSrc } = item;
          return (
            <Button key={index} size="sm" variant="ghost">
              <Text color="gray.500">{label}</Text>

              <Box ml="auto" boxSize={4}>
                <Image src={imgSrc} alt={label} />
              </Box>
            </Button>
          );
        })}
      </SimpleGrid>
    </VStack>
  );
}
