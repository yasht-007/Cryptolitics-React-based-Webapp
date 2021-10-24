import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  SocialMedia,
  SocialIconLink,
  SocialIcons,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
} from "./FooterElement";

const Footer = () => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;

    window.location.reload();
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer id="footer">
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink
                to=" "
                onClick={() =>
                  openInNewTab(
                    "https://www.nasdaq.com/articles/news-and-insights/what-is-cryptocurrency-and-how-it-works"
                  )
                }
              >
                How it works
              </FooterLink>
              <FooterLink to=" ">Testimonials</FooterLink>
              <FooterLink
                to=" "
                onClick={() =>
                  openInNewTab(
                    "https://time.com/nextadvisor/investing/cryptocurrency/future-of-cryptocurrency/"
                  )
                }
              >
                Careers
              </FooterLink>
              <FooterLink
                to=" "
                onClick={() =>
                  openInNewTab("https://www.blockchain.com/legal/terms")
                }
              >
                Terms of Service
              </FooterLink>
            </FooterLinkItems>
            
          </FooterLinksWrapper>

          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink to="/">Submit Video</FooterLink>
              <FooterLink to="/">Ambassadors</FooterLink>
              <FooterLink to="/">Agency</FooterLink>
              <FooterLink to="/">Influencer</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to="" onClick={() =>
                  openInNewTab("https://www.instagram.com/yasht.007")}>
                Instagram</FooterLink>
              <FooterLink to="/" onClick={() =>
                  openInNewTab("https://www.facebook.com/yashtiwari40/")
                }>Facebook</FooterLink>
              <FooterLink to="/" onClick={() =>
                  openInNewTab("//www.youtube.com/c/TechieYash007")
                }>Youtube</FooterLink>
              <FooterLink to="/" onClick={() =>
                  openInNewTab("https://twitter.com/Yash06981451")
                }>Twitter</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>

        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              Cryptolitics
            </SocialLogo>
            <WebsiteRights>
              Aakeriya © {new Date().getFullYear()}
              &nbsp;All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="https://www.facebook.com/yashtiwari40/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="https://www.instagram.com/yasht.007/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="//www.youtube.com/c/TechieYash007"
                target="_blank"
                aria-label="Youtube"
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="https://twitter.com/Yash06981451" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="https://www.linkedin.com/in/yash-tiwari-7113b5215/" target="_blank" aria-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
