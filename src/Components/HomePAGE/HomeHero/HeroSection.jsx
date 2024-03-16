import React, { useEffect, useRef, useState } from 'react'
import { Tabs } from './Tabs';
import { useScroll, useTransform } from 'framer-motion';
import {motion} from 'framer-motion'

export const HeroSection = () => {
  const tabs = ['Investment Opportunities', 'Global Presence', 'Strategic Partnerships', 'Financial Expertise'];
  const [activeTab, setActiveTab] = useState(tabs[0]); // Initial active tab
  const [index, setIndex] = useState(0); // Initial index

  const [width, setWidth] = useState(0);
  const [scaleValue, setScaleValue] = useState(1);

  useEffect(() => {
    setActiveTab(tabs[index]); // Update active tab when index changes
  }, [index, tabs]);


  useEffect(() => {
    const interval = setInterval(() => {
      // Increase the width by 1% every 40 milliseconds (4 seconds for 100%)
      if (width < 100) {
        setScaleValue(prevScale => prevScale+0.002)
        setWidth(prevWidth => prevWidth + 1);
      } else {
        setScaleValue(1);
        // Increment the index circularly
      setIndex((prevIndex) => (prevIndex + 1) % tabs.length);
        setWidth(0)

        clearInterval(interval); // Stop the interval once width reaches 100%
      }
    }, 40);

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [width]);

  const tabsData = [
    {
      tabName: 'Investment Opportunities',
      leftNodeId: 'w-node-b552d3e1-4a70-e0fc-be9e-b673dd49a559-2ec5d6f5',
      title: "Discover Lucrative Investment Opportunities",
      linkDataId: 'b552d3e1-4a70-e0fc-be9e-b673dd49a55e',
      linkHref: '/projects',
      linkText: 'Explore Now',
      rightNodeId: 'w-node-b552d3e1-4a70-e0fc-be9e-b673dd49a561-2ec5d6f5',
      socialIcons: [
        { href: 'https://www.instagram.com', src: '/img/insta.svg', alt: 'Instagram', className: 'icon' },
        { href: 'https://www.linkedin.com', src: '/img/linkedin.svg', alt: 'linkedin', className: 'icon' },
        { href: 'https://www.facebook.com', src: '/img/facebook.svg', alt: 'facebook', className: 'icon' },
      ],
      backgroundClass: 'one',
    },
    {
      tabName: 'Global Presence',
      leftNodeId: 'w-node-b552d3e1-4a70-e0fc-be9e-b673dd49a5b2-2ec5d6f5',
      title: "Expand Your Reach Globally",
      linkDataId: 'b552d3e1-4a70-e0fc-be9e-b673dd49a5b8',
      linkHref: '/projects',
      linkText: 'Find Out How',
      rightNodeId: 'w-node-b552d3e1-4a70-e0fc-be9e-b673dd49a5bb-2ec5d6f5',
      socialIcons: [
        { href: 'https://www.instagram.com', src: '/img/insta.svg', alt: 'Instagram', className: 'icon' },
        { href: 'https://www.linkedin.com', src: '/img/linkedin.svg', alt: 'linkedin', className: 'icon' },
        { href: 'https://www.facebook.com', src: '/img/facebook.svg', alt: 'facebook', className: 'icon' },
      ],
      backgroundClass: 'four',
    },
    {
      tabName: 'Strategic Partnerships',
      leftNodeId: 'w-node-b552d3e1-4a70-e0fc-be9e-b673dd49a576-2ec5d6f5',
      title: "Forge Strong Strategic Partnerships",
      linkDataId: 'b552d3e1-4a70-e0fc-be9e-b673dd49a57d',
      linkHref: '/projects',
      linkText: 'Learn More',
      rightNodeId: 'w-node-b552d3e1-4a70-e0fc-be9e-b673dd49a580-2ec5d6f5',
      socialIcons: [
        { href: 'https://www.instagram.com', src: '/img/insta.svg', alt: 'Instagram', className: 'icon' },
        { href: 'https://www.linkedin.com', src: '/img/linkedin.svg', alt: 'linkedin', className: 'icon' },
        { href: 'https://www.facebook.com', src: '/img/facebook.svg', alt: 'facebook', className: 'icon' },
      ],
      backgroundClass: 'three',
    },
    {
      tabName: 'Financial Expertise',
      leftNodeId: 'w-node-b552d3e1-4a70-e0fc-be9e-b673dd49a595-2ec5d6f5',
      title: "Unlock Financial Expertise",
      linkDataId: 'b552d3e1-4a70-e0fc-be9e-b673dd49a59a',
      linkHref: '/projects',
      linkText: 'Get Started',
      rightNodeId: 'w-node-b552d3e1-4a70-e0fc-be9e-b673dd49a59d-2ec5d6f5',
      socialIcons: [
        { href: 'https://www.instagram.com', src: '/img/insta.svg', alt: 'Instagram', className: 'icon' },
        { href: 'https://www.linkedin.com', src: '/img/linkedin.svg', alt: 'linkedin', className: 'icon' },
        { href: 'https://www.facebook.com', src: '/img/facebook.svg', alt: 'facebook', className: 'icon' },
      ],
      backgroundClass: 'two',
    },
    
  ];

  const tabsDataButtons = [
    {
      tabName : "Investment Opportunities",
      name: "Investment Opportunities"
    },
    {
      tabName : "Global Presence",
      name: "Global Presence"
    },
    {
      tabName : "Strategic Partnerships",
      name: "Strategic Partnerships"
    },
    {
      tabName : "Financial Expertise",
      name: "Financial Expertise"
    }
  ]

  const clickMethod = async (tabName)=>{
    setWidth(0);
    setActiveTab(tabName);
  }

  const TabLink = ({ tabName,name,isActive }) => (
    <a
      data-w-tab={tabName}
      onClick={()=>clickMethod(tabName)}
      className={`standard-tab w-inline-block w-tab-link ${isActive ? "w--current" : ""}`}
    >
      <div className="subtitle-small null">{name}</div>
      <div className="load-bar-base">
        <div className="load-bar" style={isActive  ? { width: `${width}%` } : {}}/>
      </div>
    </a>
  );

  
  const targetRef = useRef() 
  const {scrollYProgress} = useScroll({
    target:targetRef,
    offset:['end end','end start']
  })
  const opacity = useTransform(scrollYProgress,[0,0.5],[1,0.2])


  return (
    <motion.div className="section-hero" style={{opacity}} ref={targetRef}>
    <div data-duration-in={500}  data-current={activeTab}  className="tabs w-tabs">
      <div className="tabs-content w-tab-content">
    
      {tabsData.map(tabData => (
        <Tabs tabData={tabData} activeTab={activeTab} scaleValue={scaleValue}/>
      ))}

      </div>
      <div className="tabs-menu w-tab-menu">
      {tabsDataButtons.map(tab => (
        <TabLink
          key={tab.tabName}
          tabName={tab.tabName}
          name={tab.name}
          isActive={activeTab === tab.tabName}
        />
      ))}
      </div>
    </div>
  </motion.div>
  )
}
