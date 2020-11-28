import React from 'react'
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialIconLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights} from './FooterElements'
import {FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaMusic, FaPalette, FaStethoscope} from 'react-icons/fa'
const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Professional Links</FooterLinkTitle>
                <SocialIconLink href="https://www.linkedin.com/in/andres-a-long/" target="_blank" aria-label="LinkedIn">LinkedIn <FaLinkedin /></SocialIconLink>
                <SocialIconLink href="https://github.com/AndresLong01" target="_blank" aria-label="Github">Github <FaGithub /></SocialIconLink>
                <FooterLink to="/contact">Hire Me.</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Additional Projects</FooterLinkTitle>
              <SocialIconLink href="https://shrouded-tundra-40561.herokuapp.com/" target="_blank" aria-label="MediSource">MediSource <FaStethoscope /></SocialIconLink>
              <SocialIconLink href="https://sheltered-fortress-22123.herokuapp.com/" target="_blank" aria-label="Mood Swing">Mood Swing <FaMusic /></SocialIconLink>
              {/* <SocialIconLink href="https://gravyhtx.github.io/Project01/" target="_blank" aria-label="ArtBud">ArtBud <FaPalette/></SocialIconLink> */}
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Links</FooterLinkTitle>
              <SocialIconLink href="https://www.facebook.com/Andres.A.Long" target="_blank" aria-label="Facebook">Facebook <FaFacebook /></SocialIconLink>
              <SocialIconLink href="https://www.instagram.com/andres_long/" target="_blank" aria-label="Instagram">Instagram <FaInstagram /></SocialIconLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/'>
              Andres Long
            </SocialLogo>
            <WebsiteRights>Made by Andres Long © 2020</WebsiteRights>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
