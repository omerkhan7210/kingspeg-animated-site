import { motion } from 'framer-motion';

const PortfolioItem = ({ href, imgSrc, title, location ,index}) => {
  return (
    <div className="cms-collection-item w-dyn-item">
      <a href={href} className="cms-item-link w-inline-block">
        <motion.div
          initial={{
            transform: 'translate3d(0, 15vh, 0) scale3d(0.9, 0.9, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
            opacity: 0
          }}
          whileInView={{
            transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
            opacity: 1,
            
            transition: { duration: 1, delay:index*0.2} // Adjust the duration as needed
          }}
          whileHover={{scale:0.8,transition:{duration:1,type:'spring'}}}
          viewport={{once:true}}
          className="cms-item"
        >
          <motion.div className="cms-item-img-wrapper">
            <div style={{ backgroundImage: `url("${imgSrc}")` }} className="portfolio-item-img">
              <div className="portfolio-item-img-overlay" />
            </div>
          </motion.div>
          <div className="portfolio-item-info-wrapper">
            <div className="portfolio-item-title-wrapper">
              <div className="subtitle-small null">{title}</div>
            </div>
           
          </div>
        </motion.div>
      </a>
    </div>
  );
};

export default PortfolioItem;
