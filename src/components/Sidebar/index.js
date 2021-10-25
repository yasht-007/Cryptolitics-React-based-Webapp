import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements";

import AuthModal from "../Authentication/AuthModal";

const Sidebar = ({ isOpen, toggle }) => {

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            About
          </SidebarLink>

          <SidebarLink to="events" onClick={toggle}>
            Events
          </SidebarLink>

          <SidebarLink to="team" onClick={toggle}>
            Team
          </SidebarLink>

          <SidebarLink to="contact" onClick={toggle}>
            Contact
          </SidebarLink>

          {/* <SidebarLink to="" onClick={toggle}>Sign Up</SidebarLink> */}
          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              fontSize: "1.5rem",
              listStyle: "none",
              transition: "0.2 ease-in-out",
              textDecoration: "none",
              cursor: "pointer",
              color: "#fff",
            }}
          >
            <AuthModal />
          </div>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
