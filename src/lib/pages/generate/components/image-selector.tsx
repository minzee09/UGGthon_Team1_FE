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
  /*
  
  wedding1: https://res.cloudinary.com/djhsmwvsb/image/upload/v1735336593/s42ucborgfvmgeutwvtj.jpg
wedding2:
https://res.cloudinary.com/djhsmwvsb/image/upload/v1735336594/kuoxgwbxxymshjtgnvbe.jpg
wedding3:
https://res.cloudinary.com/djhsmwvsb/image/upload/v1735336594/lvgzd8acch8fl0s27hs8.jpg
wedding4:
https://res.cloudinary.com/djhsmwvsb/image/upload/v1735336595/wrzrp0m3f8sj91l1i5pa.png
이미지
*/
  결혼식: [
    {
      id: 1,
      src: 'https://res.cloudinary.com/djhsmwvsb/image/upload/v1735336593/s42ucborgfvmgeutwvtj.jpg',
      alt: '결혼식 이미지 1',
    },
    {
      id: 2,
      src: 'https://res.cloudinary.com/djhsmwvsb/image/upload/v1735336594/kuoxgwbxxymshjtgnvbe.jpg',
      alt: '결혼식 이미지 2',
    },
    {
      id: 3,
      src: 'https://res.cloudinary.com/djhsmwvsb/image/upload/v1735336594/lvgzd8acch8fl0s27hs8.jpg',
      alt: '결혼식 이미지 3',
    },
    {
      id: 4,
      src: 'https://res.cloudinary.com/djhsmwvsb/image/upload/v1735336595/wrzrp0m3f8sj91l1i5pa.png',
      alt: '결혼식 이미지 4',
    },
  ],
  //   chrismas1:https://res.cloudinary.com/djhsmwvsb/image/upload/v1735336734/dsi2te87zm0hxnu7gcnx.png
  // chrismas2:https://res.cloudinary.com/djhsmwvsb/image/upload/v1735336734/wuy10v3g2tyd6gy0wjkh.png
  // chrismas3:https://res.cloudinary.com/djhsmwvsb/image/upload/v1735336735/rnkrgb7qrtmbwk5c2okn.png
  // chrismas4:https://res.cloudinary.com/djhsmwvsb/image/upload/v1735336736/s23hzarbuonbfxudrqd2.png
  크리스마스: [
    {
      id: 1,
      src: 'https://res.cloudinary.com/djhsmwvsb/image/upload/v1735336734/dsi2te87zm0hxnu7gcnx.png',
      alt: '크리스마스 이미지 1',
    },
    {
      id: 2,
      src: 'https://res.cloudinary.com/djhsmwvsb/image/upload/v1735336734/wuy10v3g2tyd6gy0wjkh.png',
      alt: '크리스마스 이미지 2',
    },
    {
      id: 3,
      src: 'https://res.cloudinary.com/djhsmwvsb/image/upload/v1735336735/rnkrgb7qrtmbwk5c2okn.png',
      alt: '크리스마스 이미지 3',
    },
    {
      id: 4,
      src: 'https://res.cloudinary.com/djhsmwvsb/image/upload/v1735336736/s23hzarbuonbfxudrqd2.png',
      alt: '크리스마스 이미지 4',
    },
  ],
  //   party1:https://res.cloudinary.com/djhsmwvsb/image/upload/v1735336819/fs0xvvsfsrathmjd9bnn.jpg
  // party2:https://res.cloudinary.com/djhsmwvsb/image/upload/v1735336820/vycgb7n7msvipxxptd7b.png
  // party3:https://res.cloudinary.com/djhsmwvsb/image/upload/v1735336821/pt2cbr8hks4ucngddsyy.jpg
  // party4:https://res.cloudinary.com/djhsmwvsb/image/upload/v1735336821/cpk94yaxvjgqhzbcbbxx.jpg
  생일: [
    {
      id: 1,
      src: 'https://res.cloudinary.com/djhsmwvsb/image/upload/v1735336819/fs0xvvsfsrathmjd9bnn.jpg',
      alt: '생일 이미지 1',
    },
    {
      id: 2,
      src: 'https://res.cloudinary.com/djhsmwvsb/image/upload/v1735336820/vycgb7n7msvipxxptd7b.png',
      alt: '생일 이미지 2',
    },
    {
      id: 3,
      src: 'https://res.cloudinary.com/djhsmwvsb/image/upload/v1735336821/pt2cbr8hks4ucngddsyy.jpg',
      alt: '생일 이미지 3',
    },
    {
      id: 4,
      src: 'https://res.cloudinary.com/djhsmwvsb/image/upload/v1735336821/cpk94yaxvjgqhzbcbbxx.jpg',
      alt: '생일 이미지 4',
    },
  ],
  // interview1:http://res.cloudinary.com/djhsmwvsb/image/upload/v1735336674/zulf3t59azqtgtmp3nq0.jpg
  // interview2:https://res.cloudinary.com/djhsmwvsb/image/upload/v1735336675/qw00aqgzanipmq11dgds.jpg
  // interview3:https://res.cloudinary.com/djhsmwvsb/image/upload/v1735336675/urp8ascyiuxz3tnjx7kn.jpg
  // interview4:https://res.cloudinary.com/djhsmwvsb/image/upload/v1735336676/delfvmbacqtbzanophvk.jpg
  면접: [
    {
      id: 1,
      src: 'http://res.cloudinary.com/djhsmwvsb/image/upload/v1735336674/zulf3t59azqtgtmp3nq0.jpg',
      alt: '면접 이미지 1',
    },
    {
      id: 2,
      src: 'https://res.cloudinary.com/djhsmwvsb/image/upload/v1735336675/qw00aqgzanipmq11dgds.jpg',
      alt: '면접 이미지 2',
    },
    {
      id: 3,
      src: 'https://res.cloudinary.com/djhsmwvsb/image/upload/v1735336675/urp8ascyiuxz3tnjx7kn.jpg',
      alt: '면접 이미지 3',
    },
    {
      id: 4,
      src: 'https://res.cloudinary.com/djhsmwvsb/image/upload/v1735336676/delfvmbacqtbzanophvk.jpg',
      alt: '면접 이미지 4',
    },
  ],
};

export const ImageSelector = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const { scenario1, setScenario4 } = useScenarioStore();

  // scenario1에 해당하는 이미지들을 가져옴
  const currentImages = scenario1 ? scenarioImages[scenario1] : [];

  const handleImageSelect = (id: number) => {
    setSelectedImage(id);
    setScenario4(currentImages.find((image) => image.id === id)?.src || '');
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
