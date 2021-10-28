import React, { useEffect } from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroH1,
  HeroContent,
  HeroP,
  HeroBtnWrapper,
  // ArrowForward,
  ArrowRight,
} from "./HeroElements";
import Video from "../../videos/video.mp4";
import { Button } from "../ButtonElement";

const HeroSection = () => {
  // const [hover, setHover] = useState(false);
  // const onHover = () => {
  //   setHover(!hover);
  // };

  useEffect(() => {
    window.WriteItJS.startAnimationOfNode("#first");
  });

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="/video/mp4" />
      </HeroBg>

      <HeroContent>
        <HeroH1>
          <p
            id="first"
            writeit-animate="1"
            writeit-replace-next="Crypto$`currency` Made Easy"
          >
            Cryptolitics
          </p>
        </HeroH1>
        <HeroP>
          Let's get started today to get free cryptocurrency statistics, events
          and latest news.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="crypto"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            // onMouseEnter={onHover}
            // onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Get started {  <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
