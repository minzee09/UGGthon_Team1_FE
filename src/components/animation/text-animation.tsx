import { motion } from 'framer-motion';
import type React from 'react';
import type { PropsWithChildren } from 'react';

type TextAnimationProps = {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  containerVariants?: Record<string, any>;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  childVariants?: Record<string, any>;
  containerStyle?: React.CSSProperties;
  wordStyle?: React.CSSProperties;
};

export const TextAnimation: React.FC<PropsWithChildren<TextAnimationProps>> = ({
  children,
  containerVariants,
  childVariants,
  containerStyle,
  wordStyle,
}) => {
  const defaultContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        opacity: { duration: 0.8 },
        delayChildren: 0.3,
      },
    },
  };

  const defaultChild = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        ...containerStyle,
      }}
      variants={containerVariants || defaultContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.span
        variants={childVariants || defaultChild}
        style={{
          width: '100%',
          marginRight: '0.5rem',
          display: 'inline-block',
          ...wordStyle,
        }}
      >
        {children}
      </motion.span>
    </motion.div>
  );
};
