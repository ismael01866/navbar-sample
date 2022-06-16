import React from 'react';

import {
  Avatar,
  Box,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  useDisclosure
} from '@chakra-ui/react';
import { FaFolder, FaHeart } from 'react-icons/fa';

export function ProfileMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Menu isOpen={isOpen} offset={[0, 0]}>
      <MenuButton
        color="gray.500"
        fontWeight="semibold"
        variant="ghost"
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        _hover={{ color: 'gray.900' }}
      >
        <Box p={4}>
          <Avatar
            name="Doe"
            src="https://github.com/ismael01866/assets/blob/master/avatar.1.jpg?raw=true"
          />
        </Box>
      </MenuButton>
      <MenuList
        color="gray.500"
        p={4}
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
      >
        <MenuItem fontSize="sm" fontWeight="semibold">
          Profile
        </MenuItem>

        <MenuDivider />

        <MenuItem fontSize="sm" fontWeight="semibold">
          Edit Profile
        </MenuItem>

        <MenuDivider />

        <MenuItem
          color="red.500"
          fontSize="sm"
          fontWeight="semibold"
          icon={<FaHeart />}
        >
          <Text color="gray.500">My Likes</Text>
        </MenuItem>

        <MenuItem
          color="orange.300"
          fontSize="sm"
          fontWeight="semibold"
          icon={<FaFolder />}
        >
          <Text color="gray.500">My Collections</Text>
        </MenuItem>

        <MenuDivider />

        <MenuItem fontSize="sm" fontWeight="semibold">
          Sign Out
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
