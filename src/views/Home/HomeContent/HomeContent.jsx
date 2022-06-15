import { SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import SkeletonCard from 'components/SkeletonCard';

function HomeContent() {
  return (
    <SimpleGrid
      autoRows="max-content"
      columns={{ base: 1, sm: 2, lg: 4 }}
      padding={4}
      spacingX={4}
      spacingY={12}
      width="100%"
    >
      {Array(12)
        .fill()
        .map((_, index) => (
          <SkeletonCard key={index} />
        ))}
    </SimpleGrid>
  );
}

export default HomeContent;
