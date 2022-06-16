import React from 'react';

import {
  HStack,
  Menu,
  MenuButton,
  MenuList,
  useDisclosure
} from '@chakra-ui/react';

import { ColLeft, ColRight } from './components';

export function ExploreMenu() {
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
          <ColLeft />
          <ColRight />
        </HStack>
      </MenuList>
    </Menu>
  );
}
