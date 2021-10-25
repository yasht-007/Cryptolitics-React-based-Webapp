import { MenuItem, Select } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons/lib";
import { CryptoState } from "../../CryptoContext";
import { animateScroll as scroll } from "react-scroll";
import { Nav, NavbarContainer, NavLogo } from "../NavbarCoin/NavbarCoinElement";

const NavbarCoin = () => {
  const { currency, setCurrency } = CryptoState();
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
          </NavbarContainer>

          <div>
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
                borderRadius: "25px",
                textDecoration: "none",
              }}
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
              <MenuItem value={"EUR"}>EUR</MenuItem>
            </Select>{" "}
          </div>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default NavbarCoin;
