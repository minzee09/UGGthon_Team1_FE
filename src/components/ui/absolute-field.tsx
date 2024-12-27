import { Box, type BoxProps } from '@chakra-ui/react';
import type { PropsWithChildren } from 'react';

export const AbsoluteField = ({
  children,
  ...props
}: PropsWithChildren<BoxProps>) => {
  return (
    <Box
      position="absolute"
      bottom="0"
      left="0"
      width="100%"
      bg="white"
      p={4}
      zIndex="100"
      {...props}
    >
      {children}
    </Box>
  );
};
