import { FadeInUp } from '@/components/animation/fade-in-up';
import { AbsoluteField } from '@/components/ui/absolute-field';
import { useScenarioStore } from '@/lib/store/scenario-store';
import { Button, Stack } from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import { Fragment } from 'react/jsx-runtime';
import { ImageSelector } from './image-selector';

export const Step4 = () => {
  const { scenario4 } = useScenarioStore();
  const navigate = useNavigate();
  const handleMoveToGenerate = () => navigate('/generate?step=5');

  return (
    <Fragment>
      <Stack>
        <FadeInUp>
          <ImageSelector />
        </FadeInUp>
      </Stack>
      <AbsoluteField>
        <Button
          bgColor="orange.500"
          width="full"
          fontWeight="semibold"
          disabled={!scenario4}
          onClick={handleMoveToGenerate}
        >
          다음
        </Button>
      </AbsoluteField>
    </Fragment>
  );
};
