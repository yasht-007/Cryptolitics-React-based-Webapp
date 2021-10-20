import React from "react";
import { SidebarContainer, Icon, CloseIcon,SidebarWrapper,SidebarMenu,SidebarLink,SidebtnWrap } from "./SidebarElements";
import { CryptoState } from "../../CryptoContext";

import { Select,MenuItem } from "@material-ui/core";

const Sidebar = ({isOpen,toggle}) => {
  const { currency, setCurrency } = CryptoState();

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>About</SidebarLink>

          <SidebarLink to="events" onClick={toggle}>Events</SidebarLink>

          <SidebarLink to="team" onClick={toggle}>Team</SidebarLink>

          <SidebarLink to="contact" onClick={toggle}>Contact</SidebarLink>

          {/* <SidebarLink to="signup" onClick={toggle}>Sign Up</SidebarLink> */}
        </SidebarMenu>

        <SidebtnWrap>
            {/* <SidebarRoute to="/signin">Sign In</SidebarRoute> */}
            <Select
              variant="outlined"
              style={{
                display: "flex",
                outline: "none",
                whiteSpace: "nowrap",
                cursor: "pointer",
                fontSize: "16px",
                background: "#01bf71",
                alignItems: "center",
                width: 82,
                fontWeight: "bold",
                height: 37,
                margin: 22,
                borderRadius:"20px",
                textDecoration: "none",
              }}
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
        </SidebtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
