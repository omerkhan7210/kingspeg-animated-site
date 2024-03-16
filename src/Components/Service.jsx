import React from 'react'
import {motion} from 'framer-motion'
import Transition from './Transition'

 const Service = () => {

const variants = {
    initial:{
      opacity:0,
      x:-100,
    },
    first:{
      opacity:1,
      x:0,
      transition:{
        duration:1
      }
    },
    second:{
      opacity:1,
      x:0,
      transition:{
        duration:1,
        delay:0.3
      }
    }
}

const bgVars = {
  initial: {
    opacity: 0,
    scale: 1.5,
  },
  animate:  {
      opacity: 1,
      scale:1,
      transition: {
        opacity: { duration: 1.5 },
        scale: {  duration: 1.5},
        repeat: Infinity, 
        repeatDelay: 5,
      },
  }
}

  return (
    <Transition>
    <div className="page-wrapper">
  <div className="section-services-hero">
    <div className="cms-hero post">
      <div className="background-cover">
        <motion.div 
        className="hero-background-image services" 
        variants={bgVars}
        initial="initial"
        animate="animate"
        >
          <div className="image-overlay dark-overlay services" />
        </motion.div>
      </div>
      <div className="cms-wrapper">
        <div id="w-node-_85e9e80b-4361-5f13-15fa-cd3ba38391d3-e6c5d704" className="hero-content dark">
          <div id="w-node-_85e9e80b-4361-5f13-15fa-cd3ba38391d4-e6c5d704" className="cms-hero-wrapper">
            <div className="subtitle-wrapper margin-10">
              <div id="w-node-_85e9e80b-4361-5f13-15fa-cd3ba38391d6-e6c5d704" className="horizontal-line" />
              <motion.div
              className="m-subtitle white" 
              variants={variants}
              initial="initial"
              animate="first"
              >expertise
              </motion.div>
            </div>
            <div className="title-wrapper no-margin">
              <motion.h1 
              className="title"
              variants={variants}
              initial="initial"
              animate="second"
              >Services</motion.h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="section-service-grid">
    <div className="contact-grid-heading-wrapper">
      <div data-w-id="9cb1e8b9-1ea1-1fbb-4c45-97af88ea2853" style={{opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}} className="large-heading">Core services</div>
    </div>
    <div data-w-id="b9e3532e-89b3-9303-12ff-9edcbd2e1f5c" className="services-page-main-grid">
      <div id="w-node-b9e3532e-89b3-9303-12ff-9edcbd2e1f5d-e6c5d704" className="service-grid-item-core">
        <div className="subtitle-medium null dark">01</div>
      </div>
      <div id="w-node-b9e3532e-89b3-9303-12ff-9edcbd2e1f60-e6c5d704" className="service-grid-item vertical">
        <div className="subtitle-wrapper margin-40">
          <h2 className="subtitle-medium null dark">Interior Design</h2>
        </div>
        <div className="paragraph-wrapper margin-40 limit-width">
          <p className="paragraph-medium">Our interior design service helps you transform your space into a beautiful and functional environment that reflects your style and personality. We offer personalised design solutions, from concept to completion, to create your dream home or office.</p>
        </div>
        <a href="/contact" className="btn-underline white-bg service-cta w-inline-block">
          <div>request details</div>
          <div className="underline-hover-wrapper">
            <div className="underline-hover-fill white-bg" style={{transform: 'translate3d(-100%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', display: 'none'}} />
          </div>
        </a>
      </div>
      <div id="w-node-_1d6b6e93-32e0-ffe1-bd65-2fe6abeda0f8-e6c5d704" className="service-image-wrapper"><img src="https://assets-global.website-files.com/63c9df6b055c09c10ac5d6f0/6451c1937aaf7ad400a0255c_2.jpg" loading="lazy" style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}} sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 96vw, (max-width: 1439px) 29vw, (max-width: 1919px) 30vw, 31vw" alt srcSet="https://assets-global.website-files.com/63c9df6b055c09c10ac5d6f0/6451c1937aaf7ad400a0255c_2-p-500.jpg 500w, https://assets-global.website-files.com/63c9df6b055c09c10ac5d6f0/6451c1937aaf7ad400a0255c_2-p-800.jpg 800w, https://assets-global.website-files.com/63c9df6b055c09c10ac5d6f0/6451c1937aaf7ad400a0255c_2-p-1080.jpg 1080w, https://assets-global.website-files.com/63c9df6b055c09c10ac5d6f0/6451c1937aaf7ad400a0255c_2-p-1600.jpg 1600w, https://assets-global.website-files.com/63c9df6b055c09c10ac5d6f0/6451c1937aaf7ad400a0255c_2-p-2000.jpg 2000w, https://assets-global.website-files.com/63c9df6b055c09c10ac5d6f0/6451c1937aaf7ad400a0255c_2-p-2600.jpg 2600w, https://assets-global.website-files.com/63c9df6b055c09c10ac5d6f0/6451c1937aaf7ad400a0255c_2.jpg 2880w" className="service-image" /></div>
    </div>
    <div data-w-id="b9e3532e-89b3-9303-12ff-9edcbd2e1f6b" className="services-page-main-grid">
      <div id="w-node-b9e3532e-89b3-9303-12ff-9edcbd2e1f6c-e6c5d704" className="service-grid-item-core">
        <div className="subtitle-medium null dark">02</div>
      </div>
      <div id="w-node-b9e3532e-89b3-9303-12ff-9edcbd2e1f6f-e6c5d704" className="service-grid-item vertical top-aligned">
        <div className="subtitle-wrapper margin-40">
          <h2 className="subtitle-medium null dark">Architecture</h2>
        </div>
        <div className="paragraph-wrapper margin-40 limit-width">
          <p className="paragraph-medium">Our architecture service provides comprehensive design solutions for residential, commercial, and institutional projects. We collaborate closely with clients to create inspiring, sustainable, and functional spaces that meet their unique needs and vision.</p>
        </div>
        <a href="/contact" className="btn-underline white-bg service-cta w-inline-block">
          <div>request details</div>
          <div className="underline-hover-wrapper">
            <div className="underline-hover-fill white-bg" style={{transform: 'translate3d(-100%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', display: 'none'}} />
          </div>
        </a>
      </div>
      <div id="w-node-_2b3a25ee-2df5-3d87-63f1-dd0637f5d817-e6c5d704" className="service-image-wrapper"><img src="https://assets-global.website-files.com/63c9df6b055c09c10ac5d6f0/6451c441e505d95952e53d3f_79.jpg" loading="lazy" style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}} sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 96vw, (max-width: 1439px) 29vw, (max-width: 1919px) 30vw, 31vw" alt srcSet="https://assets-global.website-files.com/63c9df6b055c09c10ac5d6f0/6451c441e505d95952e53d3f_79-p-500.jpg 500w, https://assets-global.website-files.com/63c9df6b055c09c10ac5d6f0/6451c441e505d95952e53d3f_79-p-800.jpg 800w, https://assets-global.website-files.com/63c9df6b055c09c10ac5d6f0/6451c441e505d95952e53d3f_79-p-1080.jpg 1080w, https://assets-global.website-files.com/63c9df6b055c09c10ac5d6f0/6451c441e505d95952e53d3f_79-p-1600.jpg 1600w, https://assets-global.website-files.com/63c9df6b055c09c10ac5d6f0/6451c441e505d95952e53d3f_79-p-2000.jpg 2000w, https://assets-global.website-files.com/63c9df6b055c09c10ac5d6f0/6451c441e505d95952e53d3f_79-p-2600.jpg 2600w, https://assets-global.website-files.com/63c9df6b055c09c10ac5d6f0/6451c441e505d95952e53d3f_79.jpg 2880w" className="service-image" /></div>
    </div>
    <div data-w-id="b9e3532e-89b3-9303-12ff-9edcbd2e1f84" className="services-page-main-grid">
      <div id="w-node-b9e3532e-89b3-9303-12ff-9edcbd2e1f85-e6c5d704" className="service-grid-item-core">
        <div className="subtitle-medium null dark">03</div>
      </div>
      <div id="w-node-b9e3532e-89b3-9303-12ff-9edcbd2e1f88-e6c5d704" className="service-grid-item vertical top-aligned">
        <div id="w-node-b9e3532e-89b3-9303-12ff-9edcbd2e1f89-e6c5d704" className="contact-grid-item-grid">
          <div className="subtitle-wrapper margin-40">
            <h2 className="subtitle-medium null dark">Construction and Administration</h2>
          </div>
          <div className="paragraph-wrapper margin-40 limit-width">
            <p className="paragraph-medium">Our construction and administration service delivers efficient and high-quality construction projects, from planning to execution. We handle all aspects of construction administration, including project management, scheduling, budgeting, and quality control.</p>
          </div>
          <a href="/contact" className="btn-underline white-bg service-cta w-inline-block">
            <div>request details</div>
            <div className="underline-hover-wrapper">
              <div className="underline-hover-fill white-bg" style={{transform: 'translate3d(-100%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', display: 'none'}} />
            </div>
          </a>
        </div>
      </div>
      <div id="w-node-_582bc260-5339-bcc1-ff8c-16d39af9eb7d-e6c5d704" className="service-image-wrapper"><img src="https://assets-global.website-files.com/63c9df6b055c09c10ac5d6f0/6451c3cbeebf5857ec41b3e0_4.jpg" loading="lazy" style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}} sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 96vw, (max-width: 1439px) 29vw, (max-width: 1919px) 30vw, 31vw" alt srcSet="https://assets-global.website-files.com/63c9df6b055c09c10ac5d6f0/6451c3cbeebf5857ec41b3e0_4-p-500.jpg 500w, https://assets-global.website-files.com/63c9df6b055c09c10ac5d6f0/6451c3cbeebf5857ec41b3e0_4-p-800.jpg 800w, https://assets-global.website-files.com/63c9df6b055c09c10ac5d6f0/6451c3cbeebf5857ec41b3e0_4-p-1080.jpg 1080w, https://assets-global.website-files.com/63c9df6b055c09c10ac5d6f0/6451c3cbeebf5857ec41b3e0_4-p-1600.jpg 1600w, https://assets-global.website-files.com/63c9df6b055c09c10ac5d6f0/6451c3cbeebf5857ec41b3e0_4-p-2000.jpg 2000w, https://assets-global.website-files.com/63c9df6b055c09c10ac5d6f0/6451c3cbeebf5857ec41b3e0_4-p-2600.jpg 2600w, https://assets-global.website-files.com/63c9df6b055c09c10ac5d6f0/6451c3cbeebf5857ec41b3e0_4.jpg 2880w" className="service-image" /></div>
    </div>
    <div data-w-id="b9e3532e-89b3-9303-12ff-9edcbd2e1f97" className="services-page-main-grid">
      <div id="w-node-b9e3532e-89b3-9303-12ff-9edcbd2e1f98-e6c5d704" className="service-grid-item-core">
        <div className="subtitle-medium null dark">04</div>
      </div>
      <div id="w-node-b9e3532e-89b3-9303-12ff-9edcbd2e1f9b-e6c5d704" className="service-grid-item vertical top-aligned">
        <div className="subtitle-wrapper margin-40">
          <h2 className="subtitle-medium null dark">Specification</h2>
        </div>
        <div className="paragraph-wrapper margin-40 limit-width">
          <p className="paragraph-medium">Our architecture specification service provides comprehensive technical documentation for construction projects. We develop detailed specifications that ensure compliance with design intent, quality standards, and industry best practices.</p>
        </div>
        <a href="/contact" className="btn-underline white-bg service-cta w-inline-block">
          <div>request details</div>
          <div className="underline-hover-wrapper">
            <div className="underline-hover-fill white-bg" style={{transform: 'translate3d(-100%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', display: 'none'}} />
          </div>
        </a>
      </div>
      <div id="w-node-_72f0515d-58db-bc94-d5b7-fc2ee388527f-e6c5d704" className="service-image-wrapper"><img src="https://assets-global.website-files.com/63c9df6b055c09c10ac5d6f0/6451c3e8fd81daf624d85ff7_7.jpg" loading="lazy" style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}} sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 96vw, (max-width: 1439px) 29vw, (max-width: 1919px) 30vw, 31vw" alt srcSet="https://assets-global.website-files.com/63c9df6b055c09c10ac5d6f0/6451c3e8fd81daf624d85ff7_7-p-500.jpg 500w, https://assets-global.website-files.com/63c9df6b055c09c10ac5d6f0/6451c3e8fd81daf624d85ff7_7-p-800.jpg 800w, https://assets-global.website-files.com/63c9df6b055c09c10ac5d6f0/6451c3e8fd81daf624d85ff7_7-p-1080.jpg 1080w, https://assets-global.website-files.com/63c9df6b055c09c10ac5d6f0/6451c3e8fd81daf624d85ff7_7-p-1600.jpg 1600w, https://assets-global.website-files.com/63c9df6b055c09c10ac5d6f0/6451c3e8fd81daf624d85ff7_7-p-2000.jpg 2000w, https://assets-global.website-files.com/63c9df6b055c09c10ac5d6f0/6451c3e8fd81daf624d85ff7_7-p-2600.jpg 2600w, https://assets-global.website-files.com/63c9df6b055c09c10ac5d6f0/6451c3e8fd81daf624d85ff7_7.jpg 2880w" className="service-image" /></div>
    </div>
  </div>
  <div className="section-portfolio">
    <div className="cms-filter-header home">
      <div className="clip">
        <h3 data-w-id="b5812c3b-d718-4d16-705c-67910aa3377f" style={{opacity: 0}} className="large-heading">Featured projects</h3>
      </div>
      <div className="portfolio-navigation-wrapper">
        <div id="w-node-b5812c3b-d718-4d16-705c-67910aa33782-e6c5d704" className="portfolio-filter-wrapper">
          <div className="portfolio-category-list-wrapper w-dyn-list">
            <div role="list" className="portfolio-category-list w-dyn-items">
              <div role="listitem" className="cms-category-wrapper w-dyn-item"><a href="/project-categories/residential" target="_blank" className="cms-category">Residential</a></div>
              <div role="listitem" className="cms-category-wrapper w-dyn-item"><a href="/project-categories/hospitality" target="_blank" className="cms-category">Hospitality</a></div>
              <div role="listitem" className="cms-category-wrapper w-dyn-item"><a href="/project-categories/commercial" target="_blank" className="cms-category">Commercial</a></div>
              <div role="listitem" className="cms-category-wrapper w-dyn-item"><a href="/project-categories/retail" target="_blank" className="cms-category">Retail</a></div>
            </div>
          </div>
        </div>
        <div id="w-node-b5812c3b-d718-4d16-705c-67910aa3378a-e6c5d704" className="portfolio-email-wrapper">
          <div className="subtitle-small null">Request more information</div>
          <div className="subtitle-small null">info@ubbs.uk</div>
        </div>
      </div>
      <div className="divider" />
    </div>
    <div className="portfolio-grid-wrapper">
      <div className="portfolio-grid-wrapper-alt">
        <div className="portfolio-collection-list-wrapper w-dyn-list">
          <div role="list" className="portfolio-collection-list w-dyn-items">
            <div id="w-node-b5812c3b-d718-4d16-705c-67910aa33794-e6c5d704" role="listitem" className="cms-collection-item w-dyn-item">
              <a href="/projects/sunset-villa" className="cms-item-link w-inline-block">
                <div data-w-id="b5812c3b-d718-4d16-705c-67910aa33796" style={{transform: 'translate3d(0px, 15vh, 0px) scale3d(0.9, 0.9, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', opacity: 0, transformStyle: 'preserve-3d'}} className="cms-item">
                  <div style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}} className="cms-item-img-wrapper">
                    <div style={{backgroundImage: 'url("https://assets-global.website-files.com/63c9df6b055c091e80c5d708/64b6092ef3f15150cfdc9cbd_1_0003_Vector%20Smart%20Object.jpg")'}} className="portfolio-item-img">
                      <div className="portfolio-item-img-overlay" />
                    </div>
                  </div>
                  <div id="w-node-b5812c3b-d718-4d16-705c-67910aa3379a-e6c5d704" className="portfolio-item-info-wrapper">
                    <div id="w-node-b5812c3b-d718-4d16-705c-67910aa3379b-e6c5d704" className="portfolio-item-title-wrapper">
                      <div id="w-node-b5812c3b-d718-4d16-705c-67910aa3379c-e6c5d704" className="subtitle-small null">Sunset Villa</div>
                    </div>
                    <div id="w-node-b5812c3b-d718-4d16-705c-67910aa3379d-e6c5d704" className="portfolio-item-tag-wrapper">
                      <div className="portfolio-item-tag">Los Angeles, US</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div id="w-node-b5812c3b-d718-4d16-705c-67910aa33794-e6c5d704" role="listitem" className="cms-collection-item w-dyn-item">
              <a href="/projects/golden-mile-penthouse" className="cms-item-link w-inline-block">
                <div data-w-id="b5812c3b-d718-4d16-705c-67910aa33796" style={{transform: 'translate3d(0px, 15vh, 0px) scale3d(0.9, 0.9, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', opacity: 0, transformStyle: 'preserve-3d'}} className="cms-item">
                  <div style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}} className="cms-item-img-wrapper">
                    <div style={{backgroundImage: 'url("https://assets-global.website-files.com/63c9df6b055c091e80c5d708/643b34e653620ad664c946fb_madison-park-12.webp")'}} className="portfolio-item-img">
                      <div className="portfolio-item-img-overlay" />
                    </div>
                  </div>
                  <div id="w-node-b5812c3b-d718-4d16-705c-67910aa3379a-e6c5d704" className="portfolio-item-info-wrapper">
                    <div id="w-node-b5812c3b-d718-4d16-705c-67910aa3379b-e6c5d704" className="portfolio-item-title-wrapper">
                      <div id="w-node-b5812c3b-d718-4d16-705c-67910aa3379c-e6c5d704" className="subtitle-small null">Golden Mile Penthouse</div>
                    </div>
                    <div id="w-node-b5812c3b-d718-4d16-705c-67910aa3379d-e6c5d704" className="portfolio-item-tag-wrapper">
                      <div className="portfolio-item-tag">London, United Kingdom</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div id="w-node-b5812c3b-d718-4d16-705c-67910aa33794-e6c5d704" role="listitem" className="cms-collection-item w-dyn-item">
              <a href="/projects/premier-golf-country-club" className="cms-item-link w-inline-block">
                <div data-w-id="b5812c3b-d718-4d16-705c-67910aa33796" style={{transform: 'translate3d(0px, 15vh, 0px) scale3d(0.9, 0.9, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', opacity: 0, transformStyle: 'preserve-3d'}} className="cms-item">
                  <div style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}} className="cms-item-img-wrapper">
                    <div style={{backgroundImage: 'url("https://assets-global.website-files.com/63c9df6b055c091e80c5d708/64b5ebd5f54b87b6b7294fb9_1_0013__F3A3686.jpg")'}} className="portfolio-item-img">
                      <div className="portfolio-item-img-overlay" />
                    </div>
                  </div>
                  <div id="w-node-b5812c3b-d718-4d16-705c-67910aa3379a-e6c5d704" className="portfolio-item-info-wrapper">
                    <div id="w-node-b5812c3b-d718-4d16-705c-67910aa3379b-e6c5d704" className="portfolio-item-title-wrapper">
                      <div id="w-node-b5812c3b-d718-4d16-705c-67910aa3379c-e6c5d704" className="subtitle-small null">Premier Golf &amp; Country Club</div>
                    </div>
                    <div id="w-node-b5812c3b-d718-4d16-705c-67910aa3379d-e6c5d704" className="portfolio-item-tag-wrapper">
                      <div className="portfolio-item-tag">Europe</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div id="w-node-b5812c3b-d718-4d16-705c-67910aa33794-e6c5d704" role="listitem" className="cms-collection-item w-dyn-item">
              <a href="/projects/world-class-fitness-center" className="cms-item-link w-inline-block">
                <div data-w-id="b5812c3b-d718-4d16-705c-67910aa33796" style={{transform: 'translate3d(0px, 15vh, 0px) scale3d(0.9, 0.9, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', opacity: 0, transformStyle: 'preserve-3d'}} className="cms-item">
                  <div style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}} className="cms-item-img-wrapper">
                    <div style={{backgroundImage: 'url("https://assets-global.website-files.com/63c9df6b055c091e80c5d708/643b4cc9777c736cbe218380_world-class-05.webp")'}} className="portfolio-item-img">
                      <div className="portfolio-item-img-overlay" />
                    </div>
                  </div>
                  <div id="w-node-b5812c3b-d718-4d16-705c-67910aa3379a-e6c5d704" className="portfolio-item-info-wrapper">
                    <div id="w-node-b5812c3b-d718-4d16-705c-67910aa3379b-e6c5d704" className="portfolio-item-title-wrapper">
                      <div id="w-node-b5812c3b-d718-4d16-705c-67910aa3379c-e6c5d704" className="subtitle-small null">World Class Fitness Center</div>
                    </div>
                    <div id="w-node-b5812c3b-d718-4d16-705c-67910aa3379d-e6c5d704" className="portfolio-item-tag-wrapper">
                      <div className="portfolio-item-tag">Moscow, Russia</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div id="w-node-b5812c3b-d718-4d16-705c-67910aa33794-e6c5d704" role="listitem" className="cms-collection-item w-dyn-item">
              <a href="/projects/kauko-apartments" className="cms-item-link w-inline-block">
                <div data-w-id="b5812c3b-d718-4d16-705c-67910aa33796" style={{transform: 'translate3d(0px, 15vh, 0px) scale3d(0.9, 0.9, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', opacity: 0, transformStyle: 'preserve-3d'}} className="cms-item">
                  <div style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}} className="cms-item-img-wrapper">
                    <div style={{backgroundImage: 'url("https://assets-global.website-files.com/63c9df6b055c091e80c5d708/654ab2a8de380a0a464c31ef_1_0000s_0007_Vector%20Smart%20Object.jpg")'}} className="portfolio-item-img">
                      <div className="portfolio-item-img-overlay" />
                    </div>
                  </div>
                  <div id="w-node-b5812c3b-d718-4d16-705c-67910aa3379a-e6c5d704" className="portfolio-item-info-wrapper">
                    <div id="w-node-b5812c3b-d718-4d16-705c-67910aa3379b-e6c5d704" className="portfolio-item-title-wrapper">
                      <div id="w-node-b5812c3b-d718-4d16-705c-67910aa3379c-e6c5d704" className="subtitle-small null">Kauko Apartments</div>
                    </div>
                    <div id="w-node-b5812c3b-d718-4d16-705c-67910aa3379d-e6c5d704" className="portfolio-item-tag-wrapper">
                      <div className="portfolio-item-tag">Moscow</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div id="w-node-b5812c3b-d718-4d16-705c-67910aa33794-e6c5d704" role="listitem" className="cms-collection-item w-dyn-item">
              <a href="/projects/dufry-regstaer" className="cms-item-link w-inline-block">
                <div data-w-id="b5812c3b-d718-4d16-705c-67910aa33796" style={{transform: 'translate3d(0px, 15vh, 0px) scale3d(0.9, 0.9, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', opacity: 0, transformStyle: 'preserve-3d'}} className="cms-item">
                  <div style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}} className="cms-item-img-wrapper">
                    <div style={{backgroundImage: 'url("https://assets-global.website-files.com/63c9df6b055c091e80c5d708/643b4b5aa8f56c3b73732416_oko-tower-07.webp")'}} className="portfolio-item-img">
                      <div className="portfolio-item-img-overlay" />
                    </div>
                  </div>
                  <div id="w-node-b5812c3b-d718-4d16-705c-67910aa3379a-e6c5d704" className="portfolio-item-info-wrapper">
                    <div id="w-node-b5812c3b-d718-4d16-705c-67910aa3379b-e6c5d704" className="portfolio-item-title-wrapper">
                      <div id="w-node-b5812c3b-d718-4d16-705c-67910aa3379c-e6c5d704" className="subtitle-small null">Dufry / Regstaer Office</div>
                    </div>
                    <div id="w-node-b5812c3b-d718-4d16-705c-67910aa3379d-e6c5d704" className="portfolio-item-tag-wrapper">
                      <div className="portfolio-item-tag">Moscow, Russia</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="underline-link-wrapper-center">
        <a href="/projects" className="btn-underline white-bg w-inline-block">
          <div>View portfolio</div>
          <div className="underline-hover-wrapper">
            <div className="underline-hover-fill white-bg" style={{transform: 'translate3d(-100%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', display: 'none'}} />
          </div>
        </a>
      </div>
    </div>
  </div>
  <div data-w-id="8d424593-93c7-4b34-fc28-84fc991f41fb" className="section-footer-hero clip">
    <div className="grid-wrapper-footer-hero">
      <div id="w-node-_8d424593-93c7-4b34-fc28-84fc991f41fd-e6c5d704" className="verticle-hero-line middle">
        <div id="w-node-_8d424593-93c7-4b34-fc28-84fc991f41fe-e6c5d704" className="verticle-line bottom" />
        <a id="w-node-_8d424593-93c7-4b34-fc28-84fc991f41ff-e6c5d704" href="/contact" className="circle-button w-inline-block">
          <div id="w-node-_8d424593-93c7-4b34-fc28-84fc991f4200-e6c5d704" className="circle-outline-right">
            <div className="circle-outline right" />
            <div className="circle-hover-clip two" style={{height: '0%'}}>
              <div className="circle-outline right light" />
            </div>
          </div>
          <div id="w-node-_8d424593-93c7-4b34-fc28-84fc991f4204-e6c5d704" className="circle-outline-top">
            <div className="circle-outline" />
            <div className="circle-hover-clip one" style={{width: '0%'}}>
              <div className="circle-outline top light" />
            </div>
          </div>
          <div id="w-node-_8d424593-93c7-4b34-fc28-84fc991f4208-e6c5d704" className="circle-outline-bottom">
            <div className="circle-outline bottom" />
            <div className="circle-hover-clip one" style={{width: '0%'}}>
              <div className="circle-outline bottom light" />
            </div>
          </div>
          <div id="w-node-_8d424593-93c7-4b34-fc28-84fc991f420c-e6c5d704" className="circle-link-text">
            <div>Schedule a call</div>
            <img src="https://assets-global.website-files.com/63c9df6b055c09c10ac5d6f0/63dfaf0e70afa660efb885e4_chevron-right(24x24)%402x.svg" loading="lazy" id="w-node-_8d424593-93c7-4b34-fc28-84fc991f420f-e6c5d704" alt className="arrow" />
          </div>
        </a>
      </div>
      <div id="w-node-_8d424593-93c7-4b34-fc28-84fc991f4210-e6c5d704" className="content-wrapper">
        <div id="w-node-_8d424593-93c7-4b34-fc28-84fc991f4211-e6c5d704" className="action-content">
          <div className="hero-intro">
            <div className="stacked-title">
              <div id="w-node-_8d424593-93c7-4b34-fc28-84fc991f4214-e6c5d704" className="extra-large-heading">Delivering on a mission to create <span className="span-title">better spaces.</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-hero-background" style={{willChange: 'transform', transform: 'translate3d(0px, -12%, 0px) scale3d(1.15, 1.15, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
      <div className="background action-background">
        <div className="overlay hero" />
      </div>
    </div>
    <div className="section-scroll-cover">
      <div className="grid-wrapper-footer-hero">
        <div id="w-node-_8d424593-93c7-4b34-fc28-84fc991f421d-e6c5d704" className="scroll-fill left" />
        <div id="w-node-_8d424593-93c7-4b34-fc28-84fc991f421e-e6c5d704" className="content-wrapper">
          <div id="w-node-_8d424593-93c7-4b34-fc28-84fc991f421f-e6c5d704" className="scroll-fill left" />
          <div id="w-node-_8d424593-93c7-4b34-fc28-84fc991f4220-e6c5d704" className="scroll-fill right">
            <div className="verticle-line dark" />
          </div>
        </div>
        <div id="w-node-_8d424593-93c7-4b34-fc28-84fc991f4222-e6c5d704" className="scroll-fill right" />
      </div>
    </div>
  </div>
</div>
</Transition>
  )
}


export default Service