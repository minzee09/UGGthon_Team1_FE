import { FadeInUp } from '@/components/animation/fade-in-up';
import { ProgressCircleRing } from '@/components/ui/progress-circle';
import { useImageStore } from '@/lib/store/image-store';
import { useOutfitStore } from '@/lib/store/outfil-store';
import { useScenarioStore } from '@/lib/store/scenario-store';
import { ProgressCircleRoot, Stack } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Fragment } from 'react/jsx-runtime';

export const Step6 = () => {
  const navigate = useNavigate();
  const handleMoveToGenerate = () => navigate('/generate?step=7');
  const { scenario1, scenario2, scenario3 } = useScenarioStore();
  const { topImages, bottomImages } = useImageStore();
  const { setOutfitCombinations } = useOutfitStore();

  // 마운트시 https://9bfa-1-224-68-15.ngrok-free.app/generate-look/에 fetch 보내기
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    /*
    body example
    {
    "mood_image_url": "https://decorexpro.com/images/article/thumb/718-0/2018/09/kak-sdelat-igrushki-na-elku-svoimi-rukami-1.jpg",
    "tops_urls": [
    "https://cf.product-image.s.zigzag.kr/original/c/14/990/399/149903996-6029946632172917000.jpeg?width=720&height=720&quality=80&format=jpg",
    "https://cf.product-image.s.zigzag.kr/original/d/2024/12/18/88_202412180948520707_24681.jpeg?width=720&height=720&quality=80&format=jpg",
    "https://cf.product-image.s.zigzag.kr/original/d/2024/11/18/34002_202411181156490323_98197.jpeg?width=720&height=720&quality=80&format=jpg"
],
    "bottoms_urls": [
    "https://cf.product-image.s.zigzag.kr/original/c/15/248/569/152485693-5593220618698554734.jpeg?width=720&height=720&quality=80&format=jpg",
    "https://cf.product-image.s.zigzag.kr/original/c/11/460/776/114607763-6203671370549684001.gif?width=720&height=720&quality=80&format=jpg",
    "https://cf.product-image.s.zigzag.kr/original/c/10/839/388/108393881-7534165799874793771.jpeg?width=720&height=720&quality=80&format=jpg"
],
    "keywords": "레드앤그린, 화이트앤실버, 포근함, 따뜻한, 어그부츠, 니트"
}
    */
    fetch('https://9bfa-1-224-68-15.ngrok-free.app/generate-look/', {
      method: 'POST',
      body: JSON.stringify({
        mood_image_url:
          'https://decorexpro.com/images/article/thumb/718-0/2018/09/kak-sdelat-igrushki-na-elku-svoimi-rukami-1.jpg',
        tops_urls: topImages,
        bottoms_urls: bottomImages,
        keywords: [scenario1, ...scenario2, ...scenario3].join(', '),
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setOutfitCombinations(data.result); // 서버에서 제공하는 형식에 맞게 저장
      })
      .then(() => {
        handleMoveToGenerate();
      });
  }, []);

  return (
    <Fragment>
      <Stack height="100%" justifyContent="space-between">
        <div />
        <FadeInUp
          containerStyle={{
            alignSelf: 'center',
            justifyContent: 'center',
          }}
        >
          <ProgressCircleRoot value={null}>
            <ProgressCircleRing cap="round" />
          </ProgressCircleRoot>
        </FadeInUp>
        <div />
        <div />
      </Stack>
    </Fragment>
  );
};
