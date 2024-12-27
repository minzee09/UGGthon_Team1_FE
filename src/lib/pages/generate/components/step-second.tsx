import { TextAnimation } from '@/components/animation/text-animation';
import { AbsoluteField } from '@/components/ui/absolute-field';
import { Button, Heading, Stack } from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import { Fragment } from 'react/jsx-runtime';
import { Step2ChipGroup } from './chip';

export const Step2 = () => {
  const navigate = useNavigate();
  const handleMoveToGenerate = () => navigate('/generate?step=3');

  return (
    <Fragment>
      <Stack>
        <TextAnimation>
          <Heading size="2xl" fontWeight="extrabold">
            평소에는 어떤 스타일의 옷을 입으시나요?
          </Heading>
          {/* Subheading */}
          <Heading size="xl" fontWeight="semibold" color="#898989">
            (중복 선택 가능)
          </Heading>
        </TextAnimation>
        <Step2ChipGroup />
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
