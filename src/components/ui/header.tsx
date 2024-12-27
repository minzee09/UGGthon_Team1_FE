import { TextAnimation } from '@/components/animation/text-animation';
import { Box, Heading } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';

export const Header = () => {
  const [searchParams] = useSearchParams();
  const [step, setStep] = useState(searchParams.get('step') || '1');

  useEffect(() => {
    setStep(searchParams.get('step') || '1');
  }, [searchParams]);

  const titles: Record<string, string> = {
    '1': '어떤 상황의 옷을 고르실건가요?',
    '2': '평소에는 어떤 스타일의 옷을\n입으시나요?',
    '3': '원하는 분위기를 선택해주세요',
    '4': '어떤 느낌이 가장 알맞나요?',
    '5': '알맞은 옷 사진을 업로드해주세요.',
    '6': '에 맞는 옷을 고르고 있어요!\n\n잠시만 기다려주세요.',
    '7': '어울리는 조합을 추천할게요!',
  };

  const subtitles: Record<string, string | undefined> = {
    '2': '(중복 선택 가능)',
    '3': '(중복 선택 가능)',
  };

  const title = titles[step] || '단계를 선택하세요';
  const subtitle = subtitles[step];

  return (
    <Box px={4}>
      <TextAnimation key={step}>
        <Heading size="xl" fontWeight="extrabold" whiteSpace="pre-wrap">
          {title}
        </Heading>
        {subtitle && (
          <Heading color="#898989" fontSize="lg" fontWeight="bold">
            {subtitle}
          </Heading>
        )}
      </TextAnimation>
    </Box>
  );
};
