import { FadeInUp } from '@/components/animation/fade-in-up';
import { AbsoluteField } from '@/components/ui/absolute-field';
import { useScenarioStore } from '@/lib/store/scenario-store';
import { Button, Stack } from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import { Fragment } from 'react/jsx-runtime';
import { Step1ChipGroup } from './chip';

export const Step1 = () => {
  const { scenario1 } = useScenarioStore();
  const navigate = useNavigate();
  const handleMoveToGenerate = () => navigate('/generate?step=2');

  return (
    <Fragment>
      <Stack>
        <FadeInUp>
          <Step1ChipGroup />
        </FadeInUp>
      </Stack>
      <AbsoluteField>
        <Button
          bgColor="orange.500"
          width="full"
          fontWeight="semibold"
          disabled={!scenario1}
          onClick={handleMoveToGenerate}
        >
          다음
        </Button>
      </AbsoluteField>
    </Fragment>
  );
};
