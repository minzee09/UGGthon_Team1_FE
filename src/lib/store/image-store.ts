// image store for zustand
import { create } from 'zustand';

interface ImageState {
  topImages: Array<string>;
  bottomImages: Array<string>;
  setTopImages: (images: Array<string>) => void;
  setBottomImages: (images: Array<string>) => void;
}

export const useImageStore = create<ImageState>((set) => ({
  topImages: [],
  bottomImages: [],
  setTopImages: (images: Array<string>) =>
    set((state) => ({ topImages: [...state.topImages, ...images] })),
  setBottomImages: (images: Array<string>) =>
    set((state) => ({ bottomImages: [...state.bottomImages, ...images] })),
}));
