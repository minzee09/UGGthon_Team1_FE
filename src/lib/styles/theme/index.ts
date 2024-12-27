import { createSystem, defaultConfig } from '@chakra-ui/react';

export const theme = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: 'Pretendard, sans-serif' },
        body: { value: 'Pretendard, sans-serif' },
      },
      fontWeights: {
        light: { value: 300 },
        normal: { value: 400 },
        bold: { value: 700 },
        black: { value: 900 },
      },
    },
  },
});
