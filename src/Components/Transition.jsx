import {motion} from 'framer-motion'
const Transition = ({ children }) => {

    const variants = {
        initial:{
            scaleY:0
        },
        animate:{
            scaleY:[0,1,1,0],
        },
        
    }

    return (
        <>
        {children}
        <motion.div
        className='slide-in'
      variants={variants}
      initial="initial"
      animate="animate"
      transition={
        {
            duration:1.5,
            ease:[0.22,1,0.36,1]
        }
      }
      >
        <motion.img initial={{opacity:0}} animate={{opacity:[0,1,1,0],transition:{duration:1,delay:0.1}}}  src="/logo-white-transition.png" alt="KPEG" width="200px" />
        </motion.div>
        </>
     
    );
  };
  
  export default Transition;
  