import React from 'react'
import {motion} from 'framer-motion'

import { useInView } from 'react-intersection-observer';
import PortfolioItem from './PortfolioItem';

export const Portfolio = ({max}) => {
  const { ref, inView } = useInView({ threshold: 0.5 });

  const categories = [
    { name: 'Residential', link: '' },
    { name: 'Multifamily', link: '' },
    { name: 'Land', link: '' },
    { name: 'Construction', link: '' },
    { name: 'Gas Station/Retail', link: '' }
  ];

  const portfolioData = [
    {
      href: "/services/private-equity-investments",
      imgSrc: "/img/portfolio1.jpg",
      title: "Private Equity Investments",
      category:'Residential'
    },
    {
      href: "/services/strategic-advisory",
      imgSrc: "/img/portfolio2.jpg",
      title: "Strategic Advisory",
      category:'Land'
    },
    {
      href: "/services/capital-raising",
      imgSrc: "/img/portfolio3.jpg",
      title: "Capital Raising",
      category:'Multifamily'
    },
    {
      href: "/services/mergers-acquisitions",
      imgSrc: "/img/portfolio4.jpg",
      title: "Mergers & Acquisitions",
      category:'Construction'
    },
    {
      href: "/services/portfolio-management",
      imgSrc: "/img/portfolio5.jpg",
      title: "Portfolio Management",
      category:'Residential'
    },
    {
      href: "/services/global-expansion",
      imgSrc: "/img/portfolio6.jpg",
      title: "Global Expansion",
      category:'Gas Station/Retail'
    },
    {
      href: "/services/global-expansion",
      imgSrc: "/img/portfolio6.jpg",
      title: "Global Expansion",
      category:'Gas Station/Retail'
    },
    {
      href: "/services/global-expansion",
      imgSrc: "/img/portfolio6.jpg",
      title: "Global Expansion",
      category:'Gas Station/Retail'
    },
    {
      href: "/services/global-expansion",
      imgSrc: "/img/portfolio6.jpg",
      title: "Global Expansion",
      category:'Gas Station/Retail'
    },
    {
      href: "/services/global-expansion",
      imgSrc: "/img/portfolio6.jpg",
      title: "Global Expansion",
      category:'Gas Station/Retail'
    },
    {
      href: "/services/global-expansion",
      imgSrc: "/img/portfolio6.jpg",
      title: "Global Expansion",
      category:'Gas Station/Retail'
    }
  ];
  
  return (
    <div className="section-portfolio">
    <div className="cms-filter-header home">
      <div className="clip" ref={ref}>
        <motion.h2   initial={{ opacity: 0, y: -100 }} // Start off-screen above
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -100 }} 
          transition={{ duration: 1 }} data-w-id="13e7ed5f-3892-b7d1-6e5e-856f5e2d37a3"  className="large-heading">Our Core Services</motion.h2>
      </div>
      <div className="portfolio-navigation-wrapper">
        <div id="w-node-d8ed1d0f-9f49-2688-8aed-80656c3081df-2ec5d6f5" className="portfolio-filter-wrapper">
          <div className="portfolio-category-list-wrapper w-dyn-list">
             <div role="list" className="portfolio-category-list w-dyn-items" ref={ref}>
      {categories.map((category, index) => (
        <motion.div key={index} role="listitem" className="cms-category-wrapper w-dyn-item" initial={{ opacity: 0, x: 100 }} // Start off-screen above
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }} 
        transition={{ duration: 1,type:"spring",bounce:0.2,delay:index*0.2 }}>
          <a href={category.link} className="cms-category">{category.name}</a>
        </motion.div>
      ))}
    </div>
          </div>
        </div>
        <div id="w-node-bf4abc29-2adb-5935-00fb-f046b6165e91-2ec5d6f5" className="portfolio-email-wrapper">
          <div className="subtitle-small null">Request more information</div>
          <div className="subtitle-small null"><a href='mailto:info@kingspeg.com'>info@kingspeg.com</a></div>
        </div>
      </div>
      <div className="divider" />
    </div>
    <div className="portfolio-grid-wrapper">
      <div className="portfolio-grid-wrapper-alt">
        <div className="portfolio-collection-list-wrapper w-dyn-list">
          <div role="list" className="portfolio-collection-list w-dyn-items">
            {portfolioData.map((data,index)=>(
              max ? index < max && <PortfolioItem href={data.href} imgSrc={data.imgSrc} title={data.title} location={data.location}/>
              :
              <PortfolioItem href={data.href} imgSrc={data.imgSrc} title={data.title} location={data.location}/>
            ))}
          </div>
        </div>
      </div>
      <div className="underline-link-wrapper-center">
        <a href="/services" className="btn-underline white-bg w-inline-block">
          <div>View portfolio</div>
          <div className="underline-hover-wrapper">
            <div className="underline-hover-fill white-bg" />
          </div>
        </a>
      </div>
    </div>
  </div>
  )
}
