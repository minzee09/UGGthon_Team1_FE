import { FadeInUp } from '@/components/animation/fade-in-up';
import { AbsoluteField } from '@/components/ui/absolute-field';
import { useOutfitStore } from '@/lib/store/outfil-store';
import { Box, Button, Image, Stack, Text, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router';
import { Fragment } from 'react/jsx-runtime';

export const Step7 = () => {
  const navigate = useNavigate();
  const handleMoveToGenerate = () => navigate('/');
  const { outfitCombinations } = useOutfitStore();

  return (
    <Fragment>
      <Stack justifyContent="space-between" paddingBottom="80px">
        <FadeInUp>
          <VStack gap={8} align="stretch">
            {outfitCombinations.map((combination, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              <Box key={index} mt={6}>
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

                {/* 의상 이미지 */}
                <VStack align="flex-start" gap={4}>
                  <Image
                    src={combination.topImageUrl}
                    alt="상의 이미지"
                    borderRadius="md"
                    w="150px"
                    h="150px"
                    objectFit="cover"
                  />
                  <Image
                    src={combination.bottomImageUrl}
                    alt="하의 이미지"
                    borderRadius="md"
                    w="150px"
                    h="150px"
                    objectFit="cover"
                  />
                </VStack>

                {/* 설명 */}
                <Text mt={4} fontSize="sm" bg="#FFF7F2" p={4} borderRadius="md">
                  {combination.description}
                </Text>
              </Box>
            ))}
          </VStack>
        </FadeInUp>
        <div />
      </Stack>
      <AbsoluteField>
        <Button
          bgColor="#DD6B20"
          width="full"
          fontWeight="semibold"
          onClick={handleMoveToGenerate}
        >
          홈으로
        </Button>
      </AbsoluteField>
    </Fragment>
  );
};
