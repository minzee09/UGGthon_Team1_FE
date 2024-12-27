import { Flex, Image } from '@chakra-ui/react';

export const SomeImage = () => {
  return (
    <Flex marginY={4} justifyContent="center" alignItems="center" gridGap={2}>
      <Image src="/assets/images/home-image.png" title="TypeScript" />
    </Flex>
  );
};
