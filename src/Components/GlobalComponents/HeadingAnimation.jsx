import React from 'react'
import { motion} from 'framer-motion'

 const HeadingAnimation = ({heading,inView}) => {

  return (
    <motion.h2 
          data-w-id="46d30f7a-22eb-5986-ef94-452fd925bf32"
          initial={{ opacity: 0, y: -100 }} // Start off-screen above
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -100 }} // Move in and fade in when in view
          transition={{ duration: 1 }} // Smooth transition duration
          className="large-heading">
          {heading}
          </motion.h2>
  )
}

export default HeadingAnimation
