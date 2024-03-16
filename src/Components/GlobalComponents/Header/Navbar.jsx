import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import { useLocation } from 'react-router';
import Menu from './Menu';


export const Navbar = ({open,setOpen}) => {

  const location = useLocation();

  useEffect(() => {
      // Update isActive state based on the open prop
      setOpen(open);
  }, [open]);

  useEffect(() => {
      // Remove "active" class when location changes
      setOpen(false);
  }, [location]);

  return (
    <motion.div className={`full-menu ${open ? "active" : ""}`} >
    <div className="menu-content">
     <Menu />
     
      <div className="full-screen-menu-grid">
        <div id="w-node-_25c02ebb-31a5-de12-a4ba-afd4077bde94-077bde5f" className="full-screen-menu-grid-left">
          <div className="contact-page-content-item">
            <div className="subtitle-wrapper-2">
              <div className="subtitle margin-20 white">Contact details</div>
            </div>
            <p className="body-text white">Email address — <span className="body-text-span white"><a href='mailto:info@kingspeg.com'>info@kingspeg.com</a></span><br />Phone Number — <span className="body-text-span white">+44 (0) 7519614140<br /></span></p>
          </div>
        </div>
        <div id="w-node-_25c02ebb-31a5-de12-a4ba-afd4077bdea2-077bde5f" className="full-scren-menu-grid-right">
          <div className="footer-lower-body-three"><a href="https://www.instagram.com" target="_blank" className="social-icon margin-right w-inline-block">
            <img src="/img/insta.svg"  alt className="icon" /><div className="social-hover-wrapper"><div className="social-outline" /></div></a>
            <a href="#" target="_blank" className="social-icon margin-right w-inline-block">
              <div className="social-hover-wrapper">
                <div className="social-outline" />
              </div><img src="/img/linkedin.svg"  alt className="icon" /></a>
            <a href="#" target="_blank" className="social-icon margin-right w-inline-block">
              <div className="social-hover-wrapper">
                <div className="social-outline" />
              </div><img src="/img/facebook.svg"  alt className="icon" /></a>
                </div>
        </div>
      </div>
    </div>
  </motion.div>
  )
}
