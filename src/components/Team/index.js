import React from "react";
import {
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesWrapper,
  ServicesIcon,
  ServicesCard,
  ServicesP,
} from "./TeamElements";

import Icon1 from "../../images/team1.svg";
import Icon2 from "../../images/keval.svg";
import Icon3 from "../../images/rishi.svg";
import Icon4 from "../../images/team4.svg";

const Team = () => {
  return (
    <ServicesContainer id="team">
      <ServicesH1>Our Perfect Team</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Yash Tiwari</ServicesH2>
          <ServicesP>Developer + Designer.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Rishi Shukla</ServicesH2>
          <ServicesP>Developer.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Keval Patel</ServicesH2>
          <ServicesP>Designer.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon4} />
          <ServicesH2> Aayush Vyas</ServicesH2>
          <ServicesP>Developer.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Team;
