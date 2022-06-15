import { Center, Flex, HStack, Icon, Link } from '@chakra-ui/react';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import Explore from './Explore/Explore';

function NavBar() {
  return (
    <Flex
      alignItems="center"
      borderBottom="1px solid"
      borderColor="gray.200"
      height={20}
      padding={4}
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

      <HStack>
        <Explore />

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
      <HStack></HStack>
    </Flex>
  );
}

export default NavBar;
