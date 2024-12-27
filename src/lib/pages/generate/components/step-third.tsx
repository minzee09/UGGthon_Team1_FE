import { FadeInUp } from '@/components/animation/fade-in-up';
import { AbsoluteField } from '@/components/ui/absolute-field';
import { Button, Stack } from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import { Fragment } from 'react/jsx-runtime';
import { Step3ChipGroup } from './mini-chip';

export const Step3 = () => {
  const navigate = useNavigate();
  const handleMoveToGenerate = () => navigate('/generate?step=4');

  return (
    <Fragment>
      <Stack>
        <FadeInUp>
          <Step3ChipGroup />
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
