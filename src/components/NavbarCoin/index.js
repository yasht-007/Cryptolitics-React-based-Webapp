import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons/lib";
import { CryptoState } from "../../CryptoContext";
import { animateScroll as scroll } from "react-scroll";
import { MobileIcon, Nav, NavbarContainer, NavLogo, NavMenu } from "../NavbarCoin/NavbarCoinElement";
import AuthModal from "../Authentication/AuthModal";
import UserSidebar from "../UserSidebar";
import { FaBars } from "react-icons/fa";
import { Select, MenuItem } from "@material-ui/core";

const NavbarCoin = ({toggle}) => {
  const { user } = CryptoState();
  const [scrollNav, setScrollNav] = useState(false);
  const {currency,setCurrency} = CryptoState();

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
            <Select
            variant="outlined"
            style={{
             
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
              borderRadius: "25px",
              textDecoration: "none",
            }}
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <MenuItem value={"USD"}>USD</MenuItem>
            <MenuItem value={"INR"}>INR</MenuItem>
            <MenuItem value={"EUR"}>EUR</MenuItem>
          </Select>
            </NavMenu>
          </NavbarContainer>

        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default NavbarCoin;
