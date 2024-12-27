import { FadeInUp } from '@/components/animation/fade-in-up';
import { TextAnimation } from '@/components/animation/text-animation';
import { AbsoluteField } from '@/components/ui/absolute-field';
import { useScenarioStore } from '@/lib/store/scenario-store';
import { Button, Heading, Stack } from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import { Fragment } from 'react/jsx-runtime';
import { ImageSelector } from './image-selector';

export const Step4 = () => {
  const { scenario1 } = useScenarioStore();
  const navigate = useNavigate();
  const handleMoveToGenerate = () => navigate('/generate?step=5');

  return (
    <Fragment>
      <Stack>
        <TextAnimation>
          <Heading size="2xl" fontWeight="extrabold" whiteSpace="pre-line">
            {`${scenario1} \n 어떤 느낌이 가장 알맞나요?`}
          </Heading>
          <Heading size="xl" fontWeight="semibold" color="#898989">
            (중복 선택 가능)
          </Heading>
        </TextAnimation>
        <FadeInUp>
          <ImageSelector />
        </FadeInUp>
      </Stack>
      <AbsoluteField>
        <Button
          bgColor="orange.500"
          width="full"
          fontWeight="semibold"
          onClick={handleMoveToGenerate}
        >
          다음
        </Button>
      </AbsoluteField>
    </Fragment>
  );
};
