import React, { useRef } from 'react';
import { motion, Variants } from 'framer-motion';

type TranslationAnimationProps = {
  content: string;
};

const TranslationAnimation: React.FC<TranslationAnimationProps> = ({
  content,
}) => {
  const elements = content.length * 10;
  const repeatCount = Math.ceil(window.innerWidth / elements + 2);
  const elementRef = useRef<HTMLSpanElement>(null);
  const elementWidth = elementRef.current?.offsetWidth ?? 0;

  const titleAnimation: Variants = {
    initial: { x: '0%' },
    animate: {
      // 32px is the value of margin right + margin left of the element
      x: `-${elementWidth + 32}px`,
      transition: { duration: 10, ease: 'linear', repeat: Infinity },
    },
  };

  return (
    <div className="box-content overflow-hidden whitespace-nowrap">
      <motion.div
        className="absolute left-0"
        variants={titleAnimation}
        initial="initial"
        animate="animate"
      >
        {Array.from({ length: repeatCount }).map((_, index) => (
          <span key={index} className="m-0 mx-4" ref={elementRef}>
            {content}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default TranslationAnimation;
