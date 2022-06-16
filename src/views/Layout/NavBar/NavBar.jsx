import {
  Center,
  Flex,
  HStack,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link
} from '@chakra-ui/react';
import React from 'react';
import { FaBell, FaCommentAlt, FaGithub, FaSearch } from 'react-icons/fa';
import { ExploreMenu } from './ExploreMenu';
import { ProfileMenu } from './ProfileMenu';

export function NavBar() {
  return (
    <Flex
      alignItems="center"
      borderBottom="1px solid"
      borderColor="gray.200"
      height={24}
      padding={8}
      width="100%"
    >
      <Center
        backgroundColor="gray.700"
        borderRadius="base"
        boxSize={10}
        marginRight={8}
      >
        <Icon as={FaGithub} boxSize={5} color="white" />
      </Center>

      <HStack mr="auto">
        <ExploreMenu />

        {/* static */}

        <Link
          color="gray.500"
          fontWeight="semibold"
          px={2}
          py={4}
          _hover={{ color: 'gray.900' }}
        >
          Now Live
        </Link>
      </HStack>

      <HStack>
        <InputGroup mr={4}>
          <InputLeftElement color="gray.400">
            <FaSearch />
          </InputLeftElement>
          <Input placeholder="Search" type="text" variant="filled" />
        </InputGroup>

        <HStack>
          <IconButton
            color="gray.500"
            icon={<FaCommentAlt />}
            variant="ghost"
          />
          <IconButton color="gray.500" icon={<FaBell />} variant="ghost" />
        </HStack>

        <ProfileMenu />
      </HStack>
    </Flex>
  );
}
