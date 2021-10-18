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
          <SidebarLink to="about">About</SidebarLink>

          <SidebarLink to="events">Events</SidebarLink>

          <SidebarLink to="team">Team</SidebarLink>

          <SidebarLink to="contact">Contact</SidebarLink>

          <SidebarLink to="signup">Sign Up</SidebarLink>
        </SidebarMenu>

        <SidebtnWrap>
            <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SidebtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
