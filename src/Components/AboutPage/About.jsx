import React from 'react'
import Transition from '../Transition'
import HeadingAnimation from '../GlobalComponents/HeadingAnimation'
import { useInView } from 'react-intersection-observer';

 const About = () => {
  
  const { ref, inView } = useInView({ threshold: 0.5 });

    return (
      
    <Transition>
      <div className="page-wrapper">
  <div className="section-about-intro">
    <div className="about-intro-content margin-60">
      <div className="about-block-content">
        <div id="w-node-e37b234e-486d-ec98-b6f5-d76f8ce1dc9d-1abfd3d9" className="about-intro-heading-wrapper">
          <h1 data-w-id="4ea4e87a-37aa-ff36-34eb-b23a747bf662" style={{opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}} className="large-heading">Spaces that inspire and where every detail tells a story</h1>
        </div>
        <div className="about-grid">
          <div id="w-node-ba2a878a-0758-2709-5efc-5d2b28380080-1abfd3d9" className="double-grid-item limit-width">
            <p className="paragraph-medium">UBBS is a highly experienced architecture and interior design firm that operates across various sectors including Residential, Hospitality, Commercial, and Retail. One of our core strengths at UBBS is our ability to deliver bespoke design solutions that are tailored to our clients’ specific needs and preferences. <br /></p>
          </div>
          <div id="w-node-_69adda38-df0f-d2e0-abad-aedd806777fe-1abfd3d9" className="double-grid-item limit-width">
            <p className="paragraph-medium">At UBBS London, sustainability is at the forefront of our design philosophy. We believe that architecture and design should be environmentally responsible, and we work closely with our clients to create spaces that are energy-efficient and sustainable.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div data-w-id="b1a74e0a-caa8-3649-ca4d-3ac1575db148" style={{opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}} className="section-about-img" />
  <div id="w-node-e80b19de-621f-420d-7259-2058b6a01e79-1abfd3d9" className="about-intro-paragraph-wrapper" />
  <div className="about-intro-paragraph-wrapper" />
  <div className="section-team" ref={ref}>
    <div className="section-team-title-wrapper">
      <div className="heading-wrapper margin-40">
        <HeadingAnimation heading="Meet the team" inView={inView}/>
      </div>
    </div>
    <div className="team-collection-list-wrapper w-dyn-list">
      <div role="list" className="team-collection-list w-dyn-items">
        <div role="listitem" className="team-collection-item w-dyn-item">
          <div data-w-id="7e6c2046-d8c0-f867-7ebb-ade6adaaeb82" className="cms-item">
            <div data-w-id="7e6c2046-d8c0-f867-7ebb-ade6adaaeb83" className="cms-item-img-wrapper" style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
              <div data-w-id="7e6c2046-d8c0-f867-7ebb-ade6adaaeb84" style={{backgroundImage: 'url("https://assets-global.website-files.com/63c9df6b055c091e80c5d708/6441641d4bf4f753fa9a1565_vb.jpg")', transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}} className="background-image">
                <div className="image-overlay light-overlay" />
              </div>
            </div>
            <div id="w-node-_7e6c2046-d8c0-f867-7ebb-ade6adaaeb87-1abfd3d9" className="team-member-card">
              <div className="team-member-info-wrapper">
                <div className="team-member-position-wrapper">
                  <h3 className="subtitle-small null">Vytautas Bekshta</h3>
                </div>
                <a href="https://www.linkedin.com/in/vytautas-bėkšta-6a09496/" className="team-social-icon w-inline-block"><img src="https://assets-global.website-files.com/63c9df6b055c09c10ac5d6f0/63c9df6b055c09023fc5d737_linkedin.svg" loading="lazy" alt /></a>
              </div>
              <p className="paragraph-medium white">Partner</p>
            </div>
          </div>
          <div id="w-node-_6c2df6d3-41e3-8e29-0ef4-5810d406c7d4-1abfd3d9" className="team-member-bio-wrapper">
            <div className="paragraph-small">Vytautas is a highly accomplished professional with over two decades of experience in the construction industry. As the former owner of the Bekshta Construction Group, he leveraged his expertise in finance and planning to drive innovation and success. His keen eye for detail and excellent management skills ensured the successful execution of each project.</div>
          </div>
        </div>
        <div role="listitem" className="team-collection-item w-dyn-item">
          <div data-w-id="7e6c2046-d8c0-f867-7ebb-ade6adaaeb82" className="cms-item">
            <div data-w-id="7e6c2046-d8c0-f867-7ebb-ade6adaaeb83" className="cms-item-img-wrapper" style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
              <div data-w-id="7e6c2046-d8c0-f867-7ebb-ade6adaaeb84" style={{backgroundImage: 'url("https://assets-global.website-files.com/63c9df6b055c091e80c5d708/63e906d31eb4adba4bec3ac7_ZaglavnayaFoto-819x1024.jpg")', transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}} className="background-image">
                <div className="image-overlay light-overlay" />
              </div>
            </div>
            <div id="w-node-_7e6c2046-d8c0-f867-7ebb-ade6adaaeb87-1abfd3d9" className="team-member-card">
              <div className="team-member-info-wrapper">
                <div className="team-member-position-wrapper">
                  <h3 className="subtitle-small null">Anna Uborevich-Borovskaya</h3>
                </div>
                <a href="https://www.linkedin.com/in/annaub/" className="team-social-icon w-inline-block"><img src="https://assets-global.website-files.com/63c9df6b055c09c10ac5d6f0/63c9df6b055c09023fc5d737_linkedin.svg" loading="lazy" alt /></a>
              </div>
              <p className="paragraph-medium white">Partner</p>
            </div>
          </div>
          <div id="w-node-_6c2df6d3-41e3-8e29-0ef4-5810d406c7d4-1abfd3d9" className="team-member-bio-wrapper">
            <div className="paragraph-small">Anna is a London-based architect with over 10 years of experience designing and building unique spaces characterized by fluid and parametric shapes. Her portfolio includes contemporary private villas, residential apartments, and hospitality projects in London, Marbella, Forte dei Marmi, and California.</div>
          </div>
        </div>
        <div role="listitem" className="team-collection-item w-dyn-item">
          <div data-w-id="7e6c2046-d8c0-f867-7ebb-ade6adaaeb82" className="cms-item">
            <div data-w-id="7e6c2046-d8c0-f867-7ebb-ade6adaaeb83" className="cms-item-img-wrapper" style={{transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
              <div data-w-id="7e6c2046-d8c0-f867-7ebb-ade6adaaeb84" style={{backgroundImage: 'url("https://assets-global.website-files.com/63c9df6b055c091e80c5d708/6441640aa3a4bbd626809b6a_vs.jpg")', transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}} className="background-image">
                <div className="image-overlay light-overlay" />
              </div>
            </div>
            <div id="w-node-_7e6c2046-d8c0-f867-7ebb-ade6adaaeb87-1abfd3d9" className="team-member-card">
              <div className="team-member-info-wrapper">
                <div className="team-member-position-wrapper">
                  <h3 className="subtitle-small null">Valerijus Starkovskis</h3>
                </div>
                <a href="https://www.linkedin.com/in/valerijus-starkovskis-a11479255/" className="team-social-icon w-inline-block"><img src="https://assets-global.website-files.com/63c9df6b055c09c10ac5d6f0/63c9df6b055c09023fc5d737_linkedin.svg" loading="lazy" alt /></a>
              </div>
              <p className="paragraph-medium white">Partner</p>
            </div>
          </div>
          <div id="w-node-_6c2df6d3-41e3-8e29-0ef4-5810d406c7d4-1abfd3d9" className="team-member-bio-wrapper">
            <div className="paragraph-small">Valerijus is a Lithuania-based architect with 30 years of experience undertaking projects in Germany, Spain, France, Monaco, UAE, Kazakhstan, Vietnam, Maldives, Ukraine, and Latvia. His repertoire includes residential properties, commercial buildings, and public spaces, with a focus on reconstruction and preservation of cultural heritage.</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="section-awards" ref={ref}>
    <div className="html-awards w-embed">
      <style dangerouslySetInnerHTML={{__html: "\n            html { font-size: 1rem; }\n            @media screen and (max-width:1600px) { html { font-size: calc(0.34318555008210183rem + 0.6568144499178982vw); } }\n            @media screen and (max-width:991px) { html { font-size: 1rem; } }\n            .table-image-wrapper {\n            pointer-events: none;\n            }\n         " }} />
    </div>
    <div className="awards-table-wrapper">
      <div className="awards-intro-wrapper">
        <div className="heading-wrapper margin-40">
        <HeadingAnimation heading="Awards & Publications" inView={inView}/>
        </div>
      </div>
      <div className="container-w1 gutter-outside">
        <div className=" p-xl-end">
          <div className="table-wrapper">
            <div className="table-title-row">
              <div className="table-item table-year">
                <div className="subtitle-large null">Project</div>
              </div>
              <div className="table-item table-description">
                <div className="subtitle-large null">Context</div>
              </div>
              <div className="table-item table-type">
                <div className="subtitle-large null">Year</div>
              </div>
              <div className="table-item table-platform">
                <div className="subtitle-large null">Link</div>
              </div>
            </div>
            <a href="#" className="table-row first-row w-inline-block">
              <div className="table-item">
                <div className="paragraph-medium" style={{color: 'rgb(0, 0, 0)'}}><strong className="paragraph-medium" style={{color: 'rgb(0, 0, 0)'}}>A-Project &nbsp;| International Competition</strong></div>
              </div>
              <div id="w-node-_243e2bfe-10ee-c00f-9322-ed4d688a07a2-1abfd3d9" className="table-item">
                <div className="paragraph-medium" style={{color: 'rgb(0, 0, 0)'}}>Featured project | Anna Uborevic-Borovskaya at ZHA Team</div>
              </div>
              <div className="table-item">
                <div className="paragraph-medium" style={{color: 'rgb(0, 0, 0)'}}>2020</div>
              </div>
              <div className="table-item">
                <div className="subtitle-small null link" style={{color: 'rgb(15, 15, 15)'}}>Dezeen</div>
              </div>
              <div className="table-image-wrapper" style={{transform: 'translate3d(0px, 2em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', opacity: 0}}><img src="https://assets-global.website-files.com/63c9df6b055c09c10ac5d6f0/645fa1565e4b02b72cf56fbf_A-1.jpg" loading="lazy" sizes="(max-width: 991px) 100vw, (max-width: 1279px) 30vw, (max-width: 1439px) 27vw, (max-width: 1919px) 26vw, 400px" srcSet="https://assets-global.website-files.com/63c9df6b055c09c10ac5d6f0/645fa1565e4b02b72cf56fbf_A-1-p-500.jpg 500w, https://assets-global.website-files.com/63c9df6b055c09c10ac5d6f0/645fa1565e4b02b72cf56fbf_A-1-p-800.jpg 800w, https://assets-global.website-files.com/63c9df6b055c09c10ac5d6f0/645fa1565e4b02b72cf56fbf_A-1-p-1080.jpg 1080w, https://assets-global.website-files.com/63c9df6b055c09c10ac5d6f0/645fa1565e4b02b72cf56fbf_A-1-p-1600.jpg 1600w, https://assets-global.website-files.com/63c9df6b055c09c10ac5d6f0/645fa1565e4b02b72cf56fbf_A-1.jpg 2000w" alt className="table-row-image" /></div>
              <div className="table-background-wrapper">
                <div className="table-background-top" style={{width: '100%', height: '0%'}} />
                <div className="table-background-top bottom" style={{width: '100%', height: '0%'}} />
              </div>
            </a>
            <a href="#" className="table-row w-inline-block">
              <div className="table-item table-year">
                <div className="paragraph-medium" style={{color: 'rgb(0, 0, 0)'}}>Concert Hall | International Competition</div>
              </div>
              <div className="table-item table-description">
                <div className="paragraph-medium" style={{color: 'rgb(0, 0, 0)'}}>Featured project | Anna Uborevic-Borovskaya at ZHA Team</div>
              </div>
              <div className="table-item table-type">
                <div className="paragraph-medium" style={{color: 'rgb(0, 0, 0)'}}>2020</div>
              </div>
              <div id="w-node-ffdb0ad6-2c0c-eec1-9c69-213fa4b0c45e-1abfd3d9" className="table-item">
                <div className="subtitle-small null link" style={{color: 'rgb(15, 15, 15)'}}>GQ Russia</div>
              </div>
              <div className="table-image-wrapper" style={{transform: 'translate3d(0px, 2em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', opacity: 0}}><img src="https://assets-global.website-files.com/63c9df6b055c09c10ac5d6f0/645fa594f2ae787ad9334ea8_A-2.jpg" loading="lazy" sizes="(max-width: 991px) 100vw, (max-width: 1279px) 30vw, (max-width: 1439px) 27vw, (max-width: 1919px) 26vw, 400px" srcSet="https://assets-global.website-files.com/63c9df6b055c09c10ac5d6f0/645fa594f2ae787ad9334ea8_A-2-p-500.jpg 500w, https://assets-global.website-files.com/63c9df6b055c09c10ac5d6f0/645fa594f2ae787ad9334ea8_A-2-p-800.jpg 800w, https://assets-global.website-files.com/63c9df6b055c09c10ac5d6f0/645fa594f2ae787ad9334ea8_A-2-p-1080.jpg 1080w, https://assets-global.website-files.com/63c9df6b055c09c10ac5d6f0/645fa594f2ae787ad9334ea8_A-2-p-1600.jpg 1600w, https://assets-global.website-files.com/63c9df6b055c09c10ac5d6f0/645fa594f2ae787ad9334ea8_A-2.jpg 2000w" alt className="table-row-image" /></div>
              <div className="table-background-wrapper">
                <div className="table-background-top" style={{width: '100%', height: '0%'}} />
                <div className="table-background-top bottom" style={{width: '100%', height: '0%'}} />
              </div>
            </a>
            <a href="#" className="table-row w-inline-block">
              <div className="table-item table-year">
                <div className="paragraph-medium" style={{color: 'rgb(0, 0, 0)'}}>Dominion Office Building</div>
              </div>
              <div className="table-item table-description">
                <div className="paragraph-medium" style={{color: 'rgb(0, 0, 0)'}}>Featured project</div>
              </div>
              <div className="table-item table-type">
                <div className="paragraph-medium" style={{color: 'rgb(0, 0, 0)'}}>2015</div>
              </div>
              <div className="table-image-wrapper" style={{transform: 'translate3d(0px, 2em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', opacity: 0}}><img src="https://assets-global.website-files.com/63c9df6b055c09c10ac5d6f0/645fa5829938c3086acd5ec5_A-4.jpg" loading="lazy" sizes="(max-width: 991px) 100vw, (max-width: 1279px) 30vw, (max-width: 1439px) 27vw, (max-width: 1919px) 26vw, 400px" srcSet="https://assets-global.website-files.com/63c9df6b055c09c10ac5d6f0/645fa5829938c3086acd5ec5_A-4-p-500.jpg 500w, https://assets-global.website-files.com/63c9df6b055c09c10ac5d6f0/645fa5829938c3086acd5ec5_A-4-p-800.jpg 800w, https://assets-global.website-files.com/63c9df6b055c09c10ac5d6f0/645fa5829938c3086acd5ec5_A-4-p-1080.jpg 1080w, https://assets-global.website-files.com/63c9df6b055c09c10ac5d6f0/645fa5829938c3086acd5ec5_A-4-p-1600.jpg 1600w, https://assets-global.website-files.com/63c9df6b055c09c10ac5d6f0/645fa5829938c3086acd5ec5_A-4.jpg 2000w" alt className="table-row-image" /></div>
              <div className="table-background-wrapper">
                <div className="table-background-top" style={{width: '100%', height: '0%'}} />
                <div className="table-background-top bottom" style={{width: '100%', height: '0%'}} />
              </div>
              <div id="w-node-_46c6b34c-a9c4-45dc-03fc-231bfc75be30-1abfd3d9" className="table-item">
                <div className="subtitle-small null link" style={{color: 'rgb(15, 15, 15)'}}>Designboom</div>
              </div>
            </a>
            <a href="#" className="table-row w-inline-block">
              <div className="table-item table-year">
                <div className="paragraph-medium" style={{color: 'rgb(0, 0, 0)'}}>Rublyovo-Arkhangelskoye</div>
              </div>
              <div className="table-item table-description">
                <div className="paragraph-medium" style={{color: 'rgb(0, 0, 0)'}}>Publication</div>
              </div>
              <div className="table-item table-type">
                <div className="paragraph-medium" style={{color: 'rgb(0, 0, 0)'}}>2018</div>
              </div>
              <div className="table-image-wrapper" style={{transform: 'translate3d(0px, 2em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d', opacity: 0}}><img src="https://assets-global.website-files.com/63c9df6b055c09c10ac5d6f0/645fa5cbcd6a0badffca774a_F-5.jpg" loading="lazy" sizes="(max-width: 991px) 100vw, (max-width: 1279px) 30vw, (max-width: 1439px) 27vw, (max-width: 1919px) 26vw, 400px" srcSet="https://assets-global.website-files.com/63c9df6b055c09c10ac5d6f0/645fa5cbcd6a0badffca774a_F-5-p-500.jpg 500w, https://assets-global.website-files.com/63c9df6b055c09c10ac5d6f0/645fa5cbcd6a0badffca774a_F-5-p-800.jpg 800w, https://assets-global.website-files.com/63c9df6b055c09c10ac5d6f0/645fa5cbcd6a0badffca774a_F-5-p-1080.jpg 1080w, https://assets-global.website-files.com/63c9df6b055c09c10ac5d6f0/645fa5cbcd6a0badffca774a_F-5-p-1600.jpg 1600w, https://assets-global.website-files.com/63c9df6b055c09c10ac5d6f0/645fa5cbcd6a0badffca774a_F-5.jpg 2000w" alt className="table-row-image" /></div>
              <div className="table-background-wrapper">
                <div className="table-background-top" style={{width: '100%', height: '0%'}} />
                <div className="table-background-top bottom" style={{width: '100%', height: '0%'}} />
              </div>
              <div id="w-node-_1603c902-d9e1-93aa-24d9-622cd95c6317-1abfd3d9" className="table-item">
                <div className="subtitle-small null link" style={{color: 'rgb(15, 15, 15)'}}>The Architects’ Journal&nbsp;</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div data-w-id="f08b6684-3442-4e71-8e9f-60d81a7689e4" className="section-footer-hero clip">
    <div className="grid-wrapper-footer-hero">
      <div id="w-node-f08b6684-3442-4e71-8e9f-60d81a7689e6-1abfd3d9" className="verticle-hero-line middle">
        <div id="w-node-f08b6684-3442-4e71-8e9f-60d81a7689e7-1abfd3d9" className="verticle-line bottom" />
        <a id="w-node-f08b6684-3442-4e71-8e9f-60d81a7689e8-1abfd3d9" href="/contact" className="circle-button w-inline-block">
          <div id="w-node-f08b6684-3442-4e71-8e9f-60d81a7689e9-1abfd3d9" className="circle-outline-right">
            <div className="circle-outline right" />
            <div className="circle-hover-clip two" style={{height: '0%'}}>
              <div className="circle-outline right light" />
            </div>
          </div>
          <div id="w-node-f08b6684-3442-4e71-8e9f-60d81a7689ed-1abfd3d9" className="circle-outline-top">
            <div className="circle-outline" />
            <div className="circle-hover-clip one" style={{width: '0%'}}>
              <div className="circle-outline top light" />
            </div>
          </div>
          <div id="w-node-f08b6684-3442-4e71-8e9f-60d81a7689f1-1abfd3d9" className="circle-outline-bottom">
            <div className="circle-outline bottom" />
            <div className="circle-hover-clip one" style={{width: '0%'}}>
              <div className="circle-outline bottom light" />
            </div>
          </div>
          <div id="w-node-f08b6684-3442-4e71-8e9f-60d81a7689f5-1abfd3d9" className="circle-link-text">
            <div>Schedule a call</div>
            <img src="https://assets-global.website-files.com/63c9df6b055c09c10ac5d6f0/63dfaf0e70afa660efb885e4_chevron-right(24x24)%402x.svg" loading="lazy" id="w-node-f08b6684-3442-4e71-8e9f-60d81a7689f8-1abfd3d9" alt className="arrow" />
          </div>
        </a>
      </div>
      <div id="w-node-f08b6684-3442-4e71-8e9f-60d81a7689f9-1abfd3d9" className="content-wrapper">
        <div id="w-node-f08b6684-3442-4e71-8e9f-60d81a7689fa-1abfd3d9" className="action-content">
          <div className="hero-intro">
            <div className="stacked-title">
              <div id="w-node-f08b6684-3442-4e71-8e9f-60d81a7689fd-1abfd3d9" className="extra-large-heading">Delivering on a mission to create <span className="span-title">better spaces.</span></div>
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
        <div id="w-node-f08b6684-3442-4e71-8e9f-60d81a768a06-1abfd3d9" className="scroll-fill left" />
        <div id="w-node-f08b6684-3442-4e71-8e9f-60d81a768a07-1abfd3d9" className="content-wrapper">
          <div id="w-node-f08b6684-3442-4e71-8e9f-60d81a768a08-1abfd3d9" className="scroll-fill left" />
          <div id="w-node-f08b6684-3442-4e71-8e9f-60d81a768a09-1abfd3d9" className="scroll-fill right">
            <div className="verticle-line dark" />
          </div>
        </div>
        <div id="w-node-f08b6684-3442-4e71-8e9f-60d81a768a0b-1abfd3d9" className="scroll-fill right" />
      </div>
    </div>
  </div>
</div>
</Transition>
    )
}

export default About
