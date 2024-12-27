import { Box, Flex } from '@chakra-ui/react';
import type { ReactNode } from 'react';

import { Meta } from './components/meta';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Flex
      id="layout"
      height="100vh"
      margin="0 auto"
      maxWidth={800}
      transition="0.5s ease-out"
    >
      <Meta />
      <Flex wrap="wrap" width="full">
        <Box width="full" as="main">
          {children}
        </Box>
      </Flex>
    </Flex>
  );
};
