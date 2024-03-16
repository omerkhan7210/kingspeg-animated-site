import React, { useState } from 'react'
import { Navbar } from './Navbar'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'

export const Header = () => {
  const [open,setOpen] = useState(false)
  return (
   <div data-collapse="all" data-animation="default" data-duration={400} data-easing="ease" data-easing2="ease" role="banner" className="navbar_component w-nav">
  <div className="header">
    <div className="nav-block hide">
      <Link to="/projects" className="btn-underline nav-link w-inline-block">
        <div>Projects</div>
        <div className="underline-hover-wrapper">
          <div className="underline-hover-fill creme" />
        </div>
      </Link>
      <Link to="/contact" className="btn-underline nav-link w-inline-block">
        <div>Contact</div>
        <div className="underline-hover-wrapper">
          <div className="underline-hover-fill creme" />
        </div>
      </Link>
    </div>

    <div className="nav-block logo-div flex-center">
      <Link to="/" aria-current="page" className="ths08-brand w-inline-block w--current">
      <img src="/logo-white.png" 
      alt className="header-logo" />

<motion.svg initial={{opacity:0,y:50,rotate:0}}  animate={{opacity:1,y:0,rotate:[0,45,45,0],transition:{duration:1.6,delay:0.3,type:'spring',bounce:0.5}}} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
  <defs>
    <style dangerouslySetInnerHTML={{__html: "\n      .cls-1 {\n        fill: #dcb227;\n        stroke-width: 0px;\n      }\n    " }} />
  </defs>
  <motion.path  className="cls-1" d="M58.72,163.04v-51.87c0-1.09.93-1.97,2.08-1.97s2.08.88,2.08,1.97v51.87c0,1.09-.93,1.97-2.08,1.97s-2.08-.88-2.08-1.97Z" />
  <motion.path  className="cls-1" d="M68.58,128.32v-17.4c0-1.09.93-1.97,2.08-1.97s2.08.88,2.08,1.97v11.56l10.25-12.75c.7-.87,2-1.03,2.92-.37.91.66,1.09,1.9.39,2.77l-13.99,17.4c-.54.67-1.47.94-2.32.67-.85-.27-1.42-1.02-1.42-1.87Z" />
  <motion.path  className="cls-1" d="M68.58,163.04v-17.4c0-.85.57-1.6,1.42-1.87.85-.27,1.78,0,2.32.67l13.99,17.4c.7.87.52,2.1-.39,2.77-.91.66-2.22.49-2.92-.37l-10.25-12.75v11.56c0,1.09-.93,1.97-2.08,1.97s-2.08-.88-2.08-1.97Z" />
  <motion.path  className="cls-1" d="M74.58,137.1c0-.4.13-.81.39-1.15l19.81-26.19c.67-.89,1.97-1.09,2.9-.45.93.64,1.15,1.87.48,2.75l-18.94,25.04,18.94,25.04c.67.89.46,2.12-.48,2.75-.93.63-2.23.43-2.9-.45l-19.81-26.19c-.26-.34-.39-.75-.39-1.15Z" />
</motion.svg>

      </Link>
      </div>
      
    <div className="nav-block flex-right">
      <div onClick={()=>setOpen(!open)} data-w-id="25c02ebb-31a5-de12-a4ba-afd4077bde70" data-is-ix2-target={1} className="desktop-header-col-3-menu-icon invert" data-animation-type="lottie" data-src="/63bb6e23076d753d6574ddd6_menu-icon.json" data-loop={0} data-direction={1} data-autoplay={0} data-renderer="svg" data-default-duration="0.6666666666666666" data-duration={0}>
<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 800 800" width={800} height={800} preserveAspectRatio="xMidYMid meet" style={{width: '100%', height: '100%', transform: 'translate3d(0px, 0px, 0px)', contentVisibility: 'visible'}}><defs>
  <clipPath id="__lottie_element_2"><rect width={800} height={800} x={0} y={0} /></clipPath>
  </defs>

   <g clipPath="url(#__lottie_element_2)">
    <motion.g animate={{transform: open ?  "matrix(0.7071067690849304,0.7071067690849304,-0.7071067690849304,0.7071067690849304,409.1923828125,457.275634765625)" : "matrix(1, 0, 0, 1, 447, 534)"}} opacity={1} style={{display: 'block'}}>
      
      <g opacity={1} transform="matrix(1,0,0,1,0,0)">
        <path fill="rgb(17,17,17)" fillOpacity={1} d=" M-306,-34 C-306,-34 212,-34 212,-34" />
        <path strokeLinecap="butt" strokeLinejoin="miter" fillOpacity={0} strokeMiterlimit={4} stroke="rgb(17,17,17)" strokeOpacity={1} strokeWidth={20} d=" M-306,-34 C-306,-34 212,-34 212,-34" />
        </g>
    </motion.g>

        <motion.g animate={{transform: open ?  "matrix(0.70711, -0.70711, 0.70711, 0.70711, 435.276, 444.808)" : "matrix(1, 0, 0, 1, 447, 334)"}} opacity={1} style={{display: 'block'}}>
          <g transform="matrix(1,0,0,1,0,0)"><path fill="rgb(17,17,17)" fillOpacity={1} d=" M-306,-34 C-306,-34 212,-34 212,-34" />
        <path strokeLinecap="butt" strokeLinejoin="miter" fillOpacity={0} strokeMiterlimit={4} stroke="rgb(17,17,17)" strokeOpacity={1} strokeWidth={20} d=" M-306,-34 C-306,-34 212,-34 212,-34" />
        </g>
        </motion.g>

        </g> 
     
        </svg>
        </div>
    </div>
  </div>

 <Navbar open={open} setOpen={setOpen}/>
</div>

  )
}
  