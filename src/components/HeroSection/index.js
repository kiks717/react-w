import React from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import { useState } from 'react'
// import irina from './video/irina_shayk_for_ellen_tracy.mp4'
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, Hspan, HeroButton } from './HeroElements'
const Hero  = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => (
    setIsOpen(!isOpen)
    
  )
  const [hover, setHover] = useState(false)
  const onHover = () => {
    setHover(!hover)
  }
  return (
        <HeroContainer id="home">
            <Navbar toggle={toggle} />
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <HeroContent>
            {/* <video src={irina} autoPlay loop  muted/> */}
              <HeroItems>
                <HeroH1>BEYOND FASHION</HeroH1>
                <HeroP>Don't miss creating it with <br/><Hspan> <a href="https://www.instagram.com/irinashayk/" rel='noreferrer' target="_blank">IRINA SHAYK</a></Hspan></HeroP>
                <HeroButton  
                      onMouseEnter={onHover}
                       onMouseLeave={onHover}
                       smooth={true}
                       duration={500}
                       spy={true} 
                       exact='true' 
                       offset={-80}>
                <a href="https://www.versace.com/international/en/women/highlights/new-arrivals/" target="_blank" rel='noreferrer'>SHOP NOW</a>
                       </HeroButton>
              </HeroItems>
            </HeroContent>
            
        </HeroContainer>

  )
}

export default Hero 
