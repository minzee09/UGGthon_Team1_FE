import { FadeInUp } from '@/components/animation/fade-in-up';
import { TextAnimation } from '@/components/animation/text-animation';
import { AbsoluteField } from '@/components/ui/absolute-field';
import { ProgressCircleRing } from '@/components/ui/progress-circle';
import { useScenarioStore } from '@/lib/store/scenario-store';
import { Button, Heading, ProgressCircleRoot, Stack } from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import { Fragment } from 'react/jsx-runtime';

export const Step6 = () => {
  const { scenario1 } = useScenarioStore();
  const navigate = useNavigate();
  const handleMoveToGenerate = () => navigate('/generate?step=7');

  return (
    <Fragment>
      <Stack height="100%" justifyContent="space-between">
        <TextAnimation>
          {/* preline */}
          <Heading size="2xl" fontWeight="extrabold" whiteSpace="pre-line">
            {`[${scenario1}]에 맞는 옷을 고르고 있어요! \n 잠시만 기다려주세요.`}
          </Heading>
        </TextAnimation>
        <FadeInUp
          containerStyle={{
            alignSelf: 'center',
          }}
        >
          <ProgressCircleRoot value={null}>
            <ProgressCircleRing cap="round" />
          </ProgressCircleRoot>
        </FadeInUp>
        <div />
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
