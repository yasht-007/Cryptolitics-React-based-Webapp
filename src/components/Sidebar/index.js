import React from "react";
import { SidebarContainer, Icon, CloseIcon,SidebarWrapper,SidebarMenu,SidebarLink,SidebtnWrap,SidebarRoute } from "./SidebarElements";

const Sidebar = ({isOpen,toggle}) => {
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

          <SidebarLink to="signup" onClick={toggle}>Sign Up</SidebarLink>
        </SidebarMenu>

        <SidebtnWrap>
            <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SidebtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
