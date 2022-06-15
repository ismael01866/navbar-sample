import { ChakraProvider, VStack } from '@chakra-ui/react';
import React from 'react';
import LayoutNavBar from './components/layout/navigation/NavBar';
import HomeContent from './views/Home/HomeContent/HomeContent';

import theme from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <VStack>
        <LayoutNavBar />
        <HomeContent />
      </VStack>
    </ChakraProvider>
  );
}

export default App;
