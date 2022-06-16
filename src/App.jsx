import { ChakraProvider, VStack } from '@chakra-ui/react';
import React from 'react';
import { NavBar } from './views/Layout';
import { HomeContent } from './views/Home';

import theme from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <VStack>
        <NavBar />
        <HomeContent />
      </VStack>
    </ChakraProvider>
  );
}

export default App;
