import { Route, Routes, useLocation } from "react-router"
import Home  from "./Components/HomePAGE/Home"
import  About  from "./Components/AboutPage/About"
import  Service  from "./Components/Service"
import Contact  from "./Components/Contact"
import TermsCondition  from "./Components/TermsCondition"
import  PrivacyPolicy  from "./Components/PrivacyPolicy"
import {Footer} from './Components/GlobalComponents/Footer/Footer'
import { Header } from "./Components/GlobalComponents/Header/Header"
import { AnimatePresence } from "framer-motion"
import Transition from "./Components/Transition"
import Projects from "./Components/ProjectsPage/Projects"
const App = ()=> {
  const loc = useLocation();
 
  return (
   <>
   {/* <CustomCursor/> */}
   <Header/>
   <AnimatePresence mode="wait" >
   <Routes key={loc.pathname} location={loc}>
    <Route path="/" element={
    <Home/>
    }/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
    <Route path="/terms-&-conditions" element={<TermsCondition/>}/>
    <Route path="/services" element={<Service/>}/>
    <Route path="/projects" element={<Projects/>}/>
   </Routes>
   </AnimatePresence>
   <Footer/>
   </>
  )
}

export default App
