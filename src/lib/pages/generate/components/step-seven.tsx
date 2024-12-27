import { FadeInUp } from '@/components/animation/fade-in-up';
import { AbsoluteField } from '@/components/ui/absolute-field';
import {
  Box,
  Button,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import { Fragment } from 'react/jsx-runtime';

export const Step7 = () => {
  const navigate = useNavigate();
  const handleMoveToGenerate = () => navigate('/generate?step=4');
  const outfitCombinations: Array<OutfitCombination> = [
    {
      id: 1,
      items: [
        {
          type: '상의',
          imageUrl: '/assets/images/clothes-1.png',
        },
        {
          type: '하의',
          imageUrl: '/assets/images/clothes-2.png',
        },
      ],
      description:
        '포근한 분위기에 어울리는 조합이에요. 빨간색 니트와 하얀색 하의를 매치하면 크리스마스와 포근한 느낌을 동시에 줄 수 있어요.',
    },
    {
      id: 2,
      items: [
        {
          type: '상의',
          imageUrl: '/assets/images/clothes-1.png',
        },
        {
          type: '하의',
          imageUrl: '/assets/images/clothes-2.png',
        },
      ],
      description:
        '레드&그린 조합으로 다시 추천할게요. 초록색 맨투맨과 빨간색 바지를 조합하면 포근하면서 완벽한 크리스마스 분위기를 낼 수 있어요.',
    },
  ];

  return (
    <Fragment>
      <Stack justifyContent="space-between" paddingBottom="80px">
        <FadeInUp>
          <VStack gap={8} align="stretch">
            {outfitCombinations.map((combination, index) => (
              <OutfitSet
                key={combination.id}
                combination={combination}
                index={index}
              />
            ))}
          </VStack>
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
          좋아요
        </Button>
      </AbsoluteField>
    </Fragment>
  );
};

interface OutfitItem {
  type: '상의' | '하의';
  imageUrl: string;
}

interface OutfitCombination {
  id: number;
  items: Array<OutfitItem>;
  description: string;
}

interface OutfitSetProps {
  combination: OutfitCombination;
  index: number;
}

// 개별 조합 컴포넌트
const OutfitSet: React.FC<OutfitSetProps> = ({ combination, index }) => {
  return (
    <Box mt={6}>
      {/* 조합 번호 */}
      <Box
        bg="orange.500"
        color="white"
        px={3}
        py={1}
        borderRadius="full"
        display="inline-block"
        fontSize="sm"
        mb={4}
      >
        조합 {index + 1}
      </Box>

      {/* 의상 이미지들 */}
      <VStack align="flex-start" gap={4}>
        {combination.items.map((item, idx) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          <Box key={idx}>
            <Heading size="2xl" mb={2}>
              {item.type}
            </Heading>
            <Image
              src={item.imageUrl}
              alt={`${item.type} 이미지`}
              borderRadius="md"
              w="150px"
              h="150px"
              objectFit="cover"
            />
          </Box>
        ))}
      </VStack>

      {/* 설명 */}
      <Text mt={4} fontSize="sm" bg="#FFF7F2" p={4} borderRadius="md">
        {combination.description}
      </Text>
    </Box>
  );
};
