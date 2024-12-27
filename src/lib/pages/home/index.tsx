import { TextAnimation } from '@/components/animation/text-animation';
import { AbsoluteField } from '@/components/ui/absolute-field';
import { View } from '@/components/ui/view';
import { Button, Heading, Stack } from '@chakra-ui/react';
import { SomeImage } from './components/some-image';

const Home = () => {
  return (
    <View padding={4}>
      <Stack height="100%" justifyContent="space-between">
        <TextAnimation>
          <Heading size="2xl" fontWeight="extrabold">
            서비스에 오신 걸 환영해요.
          </Heading>
        </TextAnimation>
        <SomeImage />
        <div />
      </Stack>
      <AbsoluteField>
        <Button bgColor="orange.500" width="full" fontWeight="semibold">
          시작하기
        </Button>
      </AbsoluteField>
    </View>
  );
};

export default Home;
