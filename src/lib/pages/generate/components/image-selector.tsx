import { useScenarioStore } from '@/lib/store/scenario-store';
import { Box, Grid, Image } from '@chakra-ui/react';
import { Check } from 'lucide-react';
import { useState } from 'react';

interface ImageData {
  id: number;
  src: string;
  alt: string;
}

// 시나리오별 이미지 데이터
const scenarioImages: Record<string, Array<ImageData>> = {
  결혼식: [
    { id: 1, src: '/assets/images/theme-1.png', alt: '결혼식 이미지 1' },
    { id: 2, src: '/assets/images/theme-1.png', alt: '결혼식 이미지 2' },
    { id: 3, src: '/assets/images/theme-1.png', alt: '결혼식 이미지 3' },
    { id: 4, src: '/assets/images/theme-1.png', alt: '결혼식 이미지 4' },
  ],
  크리스마스: [
    { id: 1, src: '/assets/images/theme-1.png', alt: '크리스마스 이미지 1' },
    { id: 2, src: '/assets/images/theme-1.png', alt: '크리스마스 이미지 2' },
    { id: 3, src: '/assets/images/theme-1.png', alt: '크리스마스 이미지 3' },
    { id: 4, src: '/assets/images/theme-1.png', alt: '크리스마스 이미지 4' },
  ],
  생일: [
    { id: 1, src: '/assets/images/theme-1.png', alt: '생일 이미지 1' },
    { id: 2, src: '/assets/images/theme-1.png', alt: '생일 이미지 2' },
    { id: 3, src: '/assets/images/theme-1.png', alt: '생일 이미지 3' },
    { id: 4, src: '/assets/images/theme-1.png', alt: '생일 이미지 4' },
  ],
  면접: [
    { id: 1, src: '/assets/images/theme-1.png', alt: '면접 이미지 1' },
    { id: 2, src: '/assets/images/theme-1.png', alt: '면접 이미지 2' },
    { id: 3, src: '/assets/images/theme-1.png', alt: '면접 이미지 3' },
    { id: 4, src: '/assets/images/theme-1.png', alt: '면접 이미지 4' },
  ],
};

export const ImageSelector = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const { scenario1, setScenario4 } = useScenarioStore();

  // scenario1에 해당하는 이미지들을 가져옴
  const currentImages = scenario1 ? scenarioImages[scenario1] : [];

  const handleImageSelect = (id: number) => {
    setSelectedImage(id);
    setScenario4(id.toString());
  };

  return (
    <Box py={4}>
      <Grid templateColumns="repeat(2, 1fr)" gap={4} maxW="4xl" mx="auto">
        {currentImages.map((image) => (
          <Box
            key={image.id}
            position="relative"
            borderRadius="lg"
            overflow="hidden"
            cursor="pointer"
            transition="transform 0.2s"
            _hover={{ transform: 'scale(1.05)' }}
            onClick={() => handleImageSelect(image.id)}
            ringColor="blue.500"
            ring={selectedImage === image.id ? 4 : 0}
          >
            <Image
              src={image.src}
              alt={image.alt}
              w="full"
              h="160px"
              objectFit="cover"
            />
            <Box
              position="absolute"
              inset="0"
              bg="blackAlpha.600"
              display="flex"
              alignItems="center"
              justifyContent="center"
              opacity={selectedImage === image.id ? 1 : 0}
              transition="opacity 0.2s"
            >
              <Check color="white" size={40} />
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};
