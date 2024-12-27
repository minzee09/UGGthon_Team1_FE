import { motion } from 'framer-motion';
import type React from 'react';
import type { PropsWithChildren } from 'react';

interface FadeInUpProps {
  delay?: number;
  duration?: number;
  y?: number; // 시작 y 위치
  containerStyle?: React.CSSProperties;
}

export const FadeInUp: React.FC<PropsWithChildren<FadeInUpProps>> = ({
  children,
  delay = 0,
  duration = 0.6,
  y = 20,
  containerStyle,
}) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: y,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: duration,
        ease: 'easeOut',
        delay: delay,
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      style={containerStyle}
    >
      {children}
    </motion.div>
  );
};
