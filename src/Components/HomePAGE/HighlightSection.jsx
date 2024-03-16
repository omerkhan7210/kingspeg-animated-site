import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer';
import {motion} from 'framer-motion'

const NumberComponent = ({ startNumber, endNumber, text }) => {
  const [currentNumber, setCurrentNumber] = useState(startNumber);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if(inView){
      let start = startNumber;
      const step = (endNumber - startNumber)/100; // Adjust the step as needed
      const interval = setInterval(() => {
        start += step;
        setCurrentNumber(Math.ceil(start));
        if (start >= endNumber) {
          clearInterval(interval);
        }
      }, 16);
      return () => clearInterval(interval); // Cleanup interval on unmount
    }
    
    
  }, [startNumber, endNumber,inView]);

  return (
    <div ref={ref} className="div-number">
      <motion.div
        className="number-wrapper"
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div className="highlight-number">{currentNumber}</motion.div>
        <motion.div className="highlight-number plus">+</motion.div>
      </motion.div>
      <motion.div
        className="subtitle-medium serif dark"
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {text}
      </motion.div>
    </div>
  );
};


export const HighlightSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  
  
  const data = [
    { startNumber: 0, endNumber: 10, text: "Years of experience" },
    { startNumber: 0, endNumber: 5, text: "Countries covered" },
    { startNumber: 0, endNumber: 20, text: "Projects delivered" },
    { startNumber: 0, endNumber: 50, text: "Projects per year" }
  ];
  const p1 = `At Kingspeg, we pride ourselves on our track record of success and our commitment to excellence. 
  With a focus on delivering exceptional results and creating lasting value for our clients and partners, 
  we have established ourselves as a trusted leader in the private equity industry. 
  Our relentless pursuit of innovation, integrity, and strategic vision sets us apart and drives our continued growth and success.`.split(" ")
 
  const p2 = `Our dedication to excellence is reflected in our unwavering commitment to delivering superior service and exceeding the expectations of our clients. From identifying lucrative investment opportunities to providing strategic advisory services and managing investment portfolios, we are dedicated to helping our clients achieve their financial 
  goals and realize their fullest potential. 
  At Kingspeg, success is not just a goal; it's a commitment we uphold every day.
  `.split(" ")
 
 
  return (
 
    <div className="section-highlights" ref={ref}>
    <div className="highlights-description-wrapper">
      <div id="w-node-_7a80c349-88ec-a22d-375d-bacc89e8b3df-2ec5d6f5">
        <div id="w-node-_47664c10-0879-3185-8ed6-0f123491e249-2ec5d6f5" className="clip highlights-title" >
          <motion.h2 
           initial={{ opacity: 0, y: -100 }} // Start off-screen above
           animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -100 }} 
           transition={{ duration: 1 }}
          id="w-node-bcd08f40-b7f0-24a0-9fdc-b7738eba030c-2ec5d6f5" data-w-id="bcd08f40-b7f0-24a0-9fdc-b7738eba030c"
          
           className="large-heading">KPEG Highlights</motion.h2>
        </div>
      </div>
      <div className="double-grid-item limit-width-480">
        <div className="paragraph-wrapper margin-20 limit-width">
          <motion.p id="w-node-b6494e79-7978-d57f-1b92-a3b859e0a8b2-2ec5d6f5" className="paragraph-medium">
              {p1.map((word)=>(
                <span style={{marginRight:'5px'}}>
                {word.split("").map((letter,index)=>(
                  <motion.span  initial={{opacity:0}} animate={{opacity: inView ? 1 : 0,transition:{duration:0.3,delay:index*0.1}}}>
                    {letter}
                  </motion.span>
                ))}
                
                </span>
              ))}
            
            <br /></motion.p>
        </div>
      </div>
      <div className="double-grid-item limit-width-480">
        <div className="paragraph-wrapper margin-20 limit-width">
        <motion.p id="w-node-b6494e79-7978-d57f-1b92-a3b859e0a8b2-2ec5d6f5" className="paragraph-medium">
              {p2.map((word)=>(
                <span style={{marginRight:'5px'}}>
                {word.split("").map((letter,index)=>(
                  <motion.span  initial={{opacity:0}} animate={{opacity: inView ? 1 : 0,transition:{duration:0.3,delay:index*0.1}}}>
                    {letter}
                  </motion.span>
                ))}
                
                </span>
              ))}
            
            <br /></motion.p>
        </div>
      </div>
    </div>
    <div className="highlights-numbers-wrapper" ref={ref}>
    
      
  {data.map((item, index) => (
    <>
        <NumberComponent
          key={index}
          startNumber={item.startNumber}
          endNumber={item.endNumber}
          text={item.text}
        />
     
    {index < data.length - 1 && <div className="div-vertical-divider" />}
    </>

  ))}
    </div>
  </div>
  )
}
