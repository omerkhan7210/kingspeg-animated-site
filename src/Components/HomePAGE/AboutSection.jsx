import React from 'react'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import HeadingAnimation from '../GlobalComponents/HeadingAnimation';


export const AboutSection = () => {
  const { ref, inView } = useInView({ threshold: 0.5 });

  return (
   
  <div className="section-double-grid">
  <div className="double-grid-wrapper">
    <div className="double-grid">
      <div id="w-node-_46d30f7a-22eb-5986-ef94-452fd925bf35-2ec5d6f5" className="double-grid-item limit-width margin-bottom">
        <div id="w-node-_46d30f7a-22eb-5986-ef94-452fd925bf31-2ec5d6f5" className="clip about-title" ref={ref}>
        <HeadingAnimation heading="About Kingspeg" inView={inView}/>
          
        </div>
        <div className="about-desc-grid-item-wrapper">
          <div className="paragraph-wrapper margin-40">
            <p className="paragraph-medium">At Kingspeg, we are committed to driving excellence in private equity investments. With a rich history of success and a forward-thinking approach, we leverage our expertise and insights to unlock value for our clients and partners worldwide.
            Founded on principles of integrity, innovation, and strategic vision, Kingspeg operates at the forefront of the private equity landscape, identifying lucrative opportunities and delivering sustainable returns. Our dedicated team of professionals is driven by a passion for excellence and a relentless pursuit of success.
            <br /></p>
          </div>
        </div>
        <a href="/about" className="btn-underline white-bg w-inline-block">
          <div>Explore Our Listings</div>
          <div className="underline-hover-wrapper">
            <div className="underline-hover-fill white-bg" />
          </div>
        </a>
      </div>
      <motion.div  id="w-node-_2485eb3d-f44a-aa0b-030e-90ac1fbe6156-2ec5d6f5" className="double-grid-item" ref={ref}  initial={{ opacity: 0, x: 100 }} // Start off-screen above
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }} 
          transition={{ duration: 1 }}
          whileHover={{scale:0.9,transition:{duration:1}}}
          >
        <img className="about-description-grid-right-img" src="/img/about.jpg" alt="Architecture and Interior Design Services" style={{WebkitTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', MozTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', msTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)', transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)'}} 
        data-w-id="767a5bbe-0811-56b1-af71-10dc7c4d13ee"  />
        </motion.div>
    </div>
  </div>
</div>
  )
}
