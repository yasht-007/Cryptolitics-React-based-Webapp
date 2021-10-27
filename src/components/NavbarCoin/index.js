import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons/lib";
import { CryptoState } from "../../CryptoContext";
import { animateScroll as scroll } from "react-scroll";
import { MobileIcon, Nav, NavbarContainer, NavLogo, NavMenu } from "../NavbarCoin/NavbarCoinElement";
import AuthModal from "../Authentication/AuthModal";
import UserSidebar from "../UserSidebar";
import { FaBars } from "react-icons/fa";

const NavbarCoin = ({toggle}) => {
  const { user } = CryptoState();
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              Cryptolitics
            </NavLogo>

            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>

            <NavMenu>
            {user ? <UserSidebar /> : <AuthModal />}
            </NavMenu>
          </NavbarContainer>

        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default NavbarCoin;
