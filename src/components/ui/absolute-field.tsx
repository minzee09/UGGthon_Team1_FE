import { Box, type BoxProps } from '@chakra-ui/react';
import type { PropsWithChildren } from 'react';
import { FadeInUp } from '../animation/fade-in-up';

export const AbsoluteField = ({
  children,
  ...props
}: PropsWithChildren<BoxProps>) => {
  return (
    <Box
      position="fixed"
      bottom="0"
      left="0"
      width="100%"
      p={4}
      zIndex="100"
      {...props}
    >
      <FadeInUp>{children}</FadeInUp>
    </Box>
  );
};
