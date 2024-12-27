import { TextAnimation } from '@/components/animation/text-animation';
import { Grid, Heading, Text } from '@chakra-ui/react';

export const SomeText = () => {
  return (
    <Grid textAlign="center" gap={2}>
      <TextAnimation>
        <Heading size="2xl" fontWeight="extrabold">
          vite-react-chakra-starter
        </Heading>
      </TextAnimation>
      <Text textStyle="sm">
        This is a vite react template with Chakra-UI and TypeScript setup.
      </Text>
    </Grid>
  );
};
