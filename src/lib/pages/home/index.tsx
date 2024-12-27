import { TextAnimation } from '@/components/animation/text-animation';
import { AbsoluteField } from '@/components/ui/absolute-field';
import { View } from '@/components/ui/view';
import { Button, Heading, Stack } from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import { LogoImage } from './components/logo-image';
import { SomeImage } from './components/some-image';

const Home = () => {
  const navigate = useNavigate();

  const handleMoveToGenerate = () => navigate('/generate?step=1');

  return (
    <View padding={4}>
      <LogoImage />
      <Stack height="100%">
        <TextAnimation>
          <Heading size="2xl" fontWeight="extrabold" whiteSpace="pre-line">
            환영합니다!{'\n'}내가 가진 옷으로 무드에 맞는{'\n'}코디를 제공 받아
            보세요.
          </Heading>
        </TextAnimation>
        <SomeImage />
      </Stack>
      <AbsoluteField>
        <Button
          bgColor="#DD6B20"
          width="full"
          fontWeight="semibold"
          onClick={handleMoveToGenerate}
        >
          시작하기
        </Button>
      </AbsoluteField>
    </View>
  );
};

export default Home;
