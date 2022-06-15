import React from 'react';

import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Menu,
  MenuButton,
  MenuList,
  SimpleGrid,
  Text,
  useDisclosure,
  VStack
} from '@chakra-ui/react';

import items from './data.items';

function Explore() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Menu isOpen={isOpen} offset={[0, 0]}>
      <MenuButton
        color="gray.500"
        fontWeight="semibold"
        px={2}
        py={4}
        variant="ghost"
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        _hover={{ color: 'gray.900' }}
      >
        Explore
      </MenuButton>
      <MenuList p={0} onMouseEnter={onOpen} onMouseLeave={onClose}>
        <HStack alignItems="stretch" spacing={0} w="32rem">
          {/* Col */}

          <VStack p={8} w="60%">
            <SimpleGrid columns={1} spacing={2} w="100%">
              {items.features.map((item, index) => {
                const { label, description, imgSrc } = item;

                return (
                  <Button
                    key={index}
                    alignItems="flex-start"
                    height="auto"
                    size="sm"
                    textAlign="left"
                    variant="ghost"
                  >
                    <HStack py={2} spacing={4} w="100%">
                      <Box
                        backgroundColor="gray.100"
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

          {/* Col */}

          <VStack align="flex-start" bg="gray.50" p={8} w="40%">
            <Text fontSize="sm" fontWeight="semibold" ml={3} mb={2}>
              Browse apps
            </Text>

            {/* Content */}

            <SimpleGrid columns={1} spacing={2} w="100%">
              {items.apps.map((item, index) => {
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
        </HStack>
      </MenuList>
    </Menu>
  );
}

export default Explore;
