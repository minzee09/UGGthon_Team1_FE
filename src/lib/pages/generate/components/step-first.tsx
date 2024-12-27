import { TextAnimation } from '@/components/animation/text-animation';
import { AbsoluteField } from '@/components/ui/absolute-field';
import { Button, Heading, Stack } from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import { Fragment } from 'react/jsx-runtime';
import { Step1ChipGroup } from './chip';

export const Step1 = () => {
  const navigate = useNavigate();
  const handleMoveToGenerate = () => navigate('/generate?step=2');

  return (
    <Fragment>
      <Stack>
        <TextAnimation>
          <Heading size="2xl" fontWeight="extrabold">
            어떤 상황의 옷을 고르실건가요?
          </Heading>
        </TextAnimation>
        <Step1ChipGroup />
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
