import React from 'react'
import {AboutSection} from './AboutSection'
import {Portfolio} from '../ProjectsPage/Portfolio'
import { HeroSection} from './HomeHero/HeroSection'
import { HighlightSection } from './HighlightSection'
import { Prefooter } from './Prefooter'
import { ExtraSection } from './ExtraSection'
import { InfiniteScrollingText } from './InfiniteScrollingText'
import Transition from '../Transition'

const Home = () => {
  return (
    <Transition>
  <div className="page-wrapper">
 
 <HeroSection/>
 
 <InfiniteScrollingText/>
 <AboutSection/>
 <Portfolio max={6}/>
  <HighlightSection/>
<ExtraSection/>
 <Prefooter/>
</div>
</Transition>
  )
}

export default Home;