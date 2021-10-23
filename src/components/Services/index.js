import React from "react";
import Icon1 from '../../images/svg-4.svg';
import Icon2 from '../../images/svg-5.svg';
import Icon3 from '../../images/svg-6.svg';

import {
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesWrapper,
  ServicesIcon,
  ServicesCard,
  ServicesP,
} from "./ServicesElement";

const Services = () => {
  return (
    <ServicesContainer id="aboutus">
      <ServicesH1>About Cryptolitics</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Reduce Confusion</ServicesH2>
          <ServicesP>
            We help reduce your confusion and increase your overall revenue.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Live Crypto-Stats</ServicesH2>
          <ServicesP>
            You can access our platform and get live crypto currency stats.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Future Events</ServicesH2>
          <ServicesP>
            Get free future events of coins that will boost your strategy.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
