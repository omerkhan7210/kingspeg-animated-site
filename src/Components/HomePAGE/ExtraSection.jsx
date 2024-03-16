import React, { useState } from 'react'
import {motion} from 'framer-motion'


const LazyLoadedImage = ({ src,alt, className, hoverTitle, title,index }) => {
  console.log(hoverTitle , title )
  return (
    <motion.img
      src={src}
      initial={{ opacity: hoverTitle === title ? 1 : 0 }} // Set initial opacity based on index
      animate={hoverTitle === title ? { opacity: 1,transition:{duration:0.5}} : { opacity: 0}} 
      alt={alt}
      className={className}
    />
  );
};

  
// Array of data
const cardData = [
    {
      title: 'Thorough Due Diligence',
      description: 'We conduct meticulous due diligence to evaluate potential investments',
    },
    {
      title: 'Value Creation Strategies',
      description: 'We implement value creation strategies to optimize the performance of our portfolio companies',
    },
    {
      title: 'Risk Management',
      description: 'Our proactive approach to risk management safeguards our investments',
    },
    {
      title: 'Long-Term Partnerships',
      description: 'We prioritize building long-term partnerships with our investors and portfolio companies',
    },
  ];
  

  // Reusable component for card inner
const CardInner = ({ title, description ,handleHoverStart,hoverTitle}) => {
  
    return (
      <motion.div data-ix="display-none" className="card-inner"  onHoverStart={()=>handleHoverStart(title)}>
        <div className="block-quattro-asset">
          <motion.div className="quattro-content-wrapper"
          initial={{transform:'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)'}} 
          animate={{
            transform: hoverTitle === title
              ? 'translate3d(0px, -40px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)'
              : 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
             transition: { duration: 0.5 } // Transition duration
          }}
          exit={{transform:'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)'}} // Add exit animation if needed// Apply animation only when hoverTitle matches title
          
          >
            <div className="subtitle-wrapper margin-20">
              <motion.div className="subtitle-medium null white" whileHover={{opacity:'1'}}>
                {title}
              </motion.div>
            </div>
            <div className="block-quattro-asset-desc-wrapper">
              <p className="paragraph-medium quattro">{description}</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    );
  };
  

export const ExtraSection = () => {
  const [hoverTitle,setHoverTitle] = useState('Thorough Due Diligence')

  const handleHoverStart = (title) => {
    setHoverTitle(title); 
  };

    const imageData = [
        {
          src: "/img/1.webp",
          alt: "Thorough Due Diligence",
          className: "quattro-block-bg-img-one",
          title: 'Thorough Due Diligence',
        },
        {
          src: "/img/4.webp",
          alt: "Value Creation Strategies",
          className: "quattro-block-bg-img-two",
          title: 'Value Creation Strategies',
        },
        {
          src: "/img/2.jpg",
          alt: "Risk Management",
          className: "quattro-block-bg-img-three",
          title: 'Risk Management',
        },
        {
          src: "/img/3.jpg",
          alt: "Long-Term Partnerships",
          className: "quattro-block-bg-img-four",
          title: 'Long-Term Partnerships',
        },
       
    ];
      

    return (
        <div className="section-quattro">
            <div className="section-quattro-alt">
            {cardData.map((data, index) => (
        <CardInner key={index} title={data.title} description={data.description} handleHoverStart={handleHoverStart} hoverTitle={hoverTitle}/>
      ))}
            </div>
           
           {imageData.map((img,index)=>(
            <LazyLoadedImage src={img.src} alt={img.alt} className={img.className} title={img.title} hoverTitle={hoverTitle} index={index}/>
           ))}
                       </div>

    )
}
