import React from 'react'
import {motion} from 'framer-motion'

export const Tabs = ({tabData,activeTab,scaleValue}) => {
  return (
    <div data-w-tab={tabData.tabName} className={activeTab === tabData.tabName ? 'tab-pane w-tab-pane w--tab-active' : 'tab-pane w-tab-pane'}>
    <div className="slider-base">
      <div className="hero-title-wrapper">
        <div id={tabData.leftNodeId} className="slider-left">
        <h1 className="title">
  {tabData.title.split(" ").map((el, i) => (
    <motion.span
      key={`${activeTab}-${el}-${i}`} // Use a unique key for each span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.5,
        delay: i / 3,staggerChildren:0.4
      }}
      style={{marginRight:'1.3rem',textTransform:'uppercase'}}
    >
      {el}{" "}
    </motion.span>
  ))}
</h1>

          <a data-w-id={tabData.linkDataId} href={tabData.linkHref} className="btn-hero w-inline-block">
            <div className="hero-btn-text">{tabData.linkText}</div>
          </a>
        </div>
        <div id={tabData.rightNodeId} className="slider-right">
          {tabData.socialIcons.map((icon, index) => (
            <a key={index} href={icon.href} target="_blank" className="social-icon w-inline-block">
              <img src={icon.src} alt={icon.alt} className={icon.className} />
              <div className="social-hover-wrapper">
                <div className="social-outline" />
              </div>
            </a>
          ))}
        </div>
        <motion.div 
        className={`slider-background ${tabData.backgroundClass}`} 
        initial={{ scale: scaleValue }}
        animate={{ scale: scaleValue }}
        transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  </div>
  )
}
