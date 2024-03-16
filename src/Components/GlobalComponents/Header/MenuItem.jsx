import { useState } from "react";
import { useLocation } from "react-router";
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'

const MenuItem = ({ href, title ,i,submenu,hasarrow}) => {
    const location = useLocation();
    const [isActive, setIsActive] = useState(location.pathname === href);
 

    return (
      <Link
        to={href}
        className={`link-block-menu w-inline-block ${isActive ? 'w--current' : ''}`}
        onClick={() => setIsActive(true)}
        key={open}
      >
        <motion.div 
        style={{color:submenu ? 'black' : 'white',fontSize:submenu ? '30px' : ''}} initial={{opacity:0,x:100}} whileInView={{opacity:1,x:0,transition:{duration:0.5,delay:i*0.2}}}
        className="link-menu static" whileHover={{y:-5,transition:{duration:0.2}}}>
          {title}
          {hasarrow && 
         <svg className="onhovershowsvg" xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24" style={{transform: 'rotate(90deg)',color:'white',fill:'white'}}>
            <g>
              <polygon points="12 6.414 19.293 13.707 20.707 12.293 12 3.586 3.293 12.293 4.707 13.707 12 6.414" />
              <polygon points="3.293 18.293 4.707 19.707 12 12.414 19.293 19.707 20.707 18.293 12 9.586 3.293 18.293" />
            </g>
          </svg>

          }
        </motion.div>
        <div className="link-menu absolute">{title}</div>
      </Link>
    );
  };

  export default MenuItem
