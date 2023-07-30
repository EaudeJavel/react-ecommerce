/**
 * A component that creates a translation animation effect for a given string content.
 * @param content The string content to be animated.
 */
import React, { useRef, useLayoutEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';

type TranslationAnimationProps = {
  content: string;
};

const TranslationAnimation: React.FC<TranslationAnimationProps> = ({
  content,
}) => {
  const elements = content.length;
  const repeatCount = Math.ceil(window.innerWidth / elements);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [elementWidth, setElementWidth] = useState(0);

  useLayoutEffect(() => {
    setElementWidth(elementRef.current?.offsetWidth ?? 0);
  }, [content]);

  const titleAnimation: Variants = {
    initial: { x: '0px' },
    animate: {
      // 32px is the value of margin right + margin left of the element
      x: `-${elementWidth}px`,
      transition: { duration: 3, ease: 'linear', repeat: Infinity },
    },
  };

  return (
    <div className="box-content h-8 overflow-hidden whitespace-nowrap bg-neutral-700 text-white">
      <motion.div
        className="left-0"
        variants={titleAnimation}
        // initial="initial"
        // animate="animate"
      >
        {Array.from({ length: repeatCount }).map((_, index) => (
          <span key={index} className="m-0" ref={elementRef}>
            {content}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default TranslationAnimation;
