import React from 'react'
import {FaFacebook, FaInstagram} from 'react-icons/fa'
import { FiTwitter} from 'react-icons/fi'
import { animateScroll as scroll } from 'react-scroll'

import { FooterContainer, FooterWrap,Span, SocialMedia,SocialMediaWrap,SocialLogo, SocialIcons, SocialIconLink } from './FooterElements'
const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
      }
  return (
    <FooterContainer>
        <FooterWrap>
            <SocialMedia>
                <SocialMediaWrap>
                <SocialLogo  to="/" onClick={toggleHome}>
                    LUXURY &nbsp;
                    {new Date().getFullYear()}
                    <Span>All rights reserved &copy; </Span>
                     </SocialLogo>
                     
                    <SocialIcons>
                        <SocialIconLink 
                        a href="https://www.facebook.com/" 
                        target="_blank" aria-label="Facebook"
                        rel="noopener noreferrer"     
                        >
                            <FaFacebook/>
                            </SocialIconLink>
                        <SocialIconLink 
                        a href="https://www.instagram.com/versacejeanscouture/?hl=hr" 
                        target="_blank" aria-label="Instagram"
                        rel="noopener noreferrer"     
                        >
                            <FaInstagram/>
                            </SocialIconLink>
                        <SocialIconLink 
                        a href="https://twitter.com/versace?lang=hr" 
                        target="_blank" aria-label="Twitter"
                        rel="noopener noreferrer"     
                        >
                            <FiTwitter/>
                            </SocialIconLink>
                      
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
