import { Box, type BoxProps } from '@chakra-ui/react';
import type { PropsWithChildren } from 'react';

export const View = ({ children, ...props }: PropsWithChildren<BoxProps>) => {
  return (
    <Box position="relative" height="100vh" {...props}>
      {children}
    </Box>
  );
};
