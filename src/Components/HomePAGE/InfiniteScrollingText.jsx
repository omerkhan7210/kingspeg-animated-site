import { animate, useMotionValue, motion, useScroll, useTransform } from 'framer-motion';
import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import useMeasure from 'react-use-measure';

export const InfiniteScrollingText = () => {
  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPos = -width *3;
    controls = animate(xTranslation, [0, finalPos], {
      ease: 'linear',
      duration: 180,
      repeat: Infinity,
      repeatType: 'loop',
      repeatDelay: 0
    });

    return () => controls.stop(); // Stop animation when component unmounts or dependency changes
  }, [xTranslation, width]);

  const text = `Your Trusted Partner in Finding Your Dream Home! Your Trusted Partner in Finding Your Dream Home! Your Trusted Partner in Finding Your Dream Home!`.split(" ");


  
  const targetRef = useRef() 
  const {scrollYProgress} = useScroll({
    target:targetRef,
    offset:['end end','end start']
  })
  const opacity = useTransform(scrollYProgress,[0,0.5],[1,0])
  const scale = useTransform(scrollYProgress,[0,0.5],[1,0.4])

  return (
    <motion.section 
    ref={targetRef}
    style={{height:'100vh',width:'100%',display:'flex',alignItems:'center',opacity,scale,background: 'yellow'}}
    >
    <motion.div
      ref={ref}
      style={{ x: xTranslation, display:'flex' ,margin:'2rem 2rem 2rem 4rem'}}
    >
      {text.map((word, index) => (
        
        <motion.span key={index} style={{ fontSize: '8em',fontWeight:'bolder',marginRight:'1.5rem' , color: word === 'Kpeg' && '#deb507' }}>
          {word}
        </motion.span>
      ))}
    </motion.div>
    </motion.section>
  );
};
