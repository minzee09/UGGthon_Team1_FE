import { FadeInUp } from '@/components/animation/fade-in-up';
import { AbsoluteField } from '@/components/ui/absolute-field';
import { ProgressCircleRing } from '@/components/ui/progress-circle';
import { Button, ProgressCircleRoot, Stack } from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import { Fragment } from 'react/jsx-runtime';

export const Step6 = () => {
  const navigate = useNavigate();
  const handleMoveToGenerate = () => navigate('/generate?step=7');

  return (
    <Fragment>
      <Stack height="100%" justifyContent="space-between">
        <FadeInUp
          containerStyle={{
            alignSelf: 'center',
            justifyContent: 'center',
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
