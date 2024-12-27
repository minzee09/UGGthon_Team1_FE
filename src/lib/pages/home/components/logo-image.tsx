import { Flex, Image } from '@chakra-ui/react';

export const LogoImage = () => {
  return (
    <Flex marginY={4} alignItems="center" gridGap={2}>
      <Image src="/assets/images/lookey-logo.png" title="TypeScript" />
    </Flex>
  );
};
