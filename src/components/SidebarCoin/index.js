import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarCoinElement";

import AuthModal from "../Authentication/AuthModal";
import { CryptoState } from "../../CryptoContext";
import UserSidebar from "../UserSidebar";
import { Select, MenuItem } from "@material-ui/core";

const SidebarCoin = ({ isOpen, toggle }) => {
  const { user, currency, setCurrency, setAlert } = CryptoState();

  const toggleChange = (e) => {
    setCurrency(e.target.value);

    setAlert({
      open: true,
      type: "success",
      message: "Currency Changed !",
    });
  };

  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/" onClick={toggle}>
            Home
          </SidebarLink>

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
            {user ? <UserSidebar /> : <AuthModal />}
          </div>

          <SidebarLink to="">
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
              onChange={(e) => toggleChange(e)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
              <MenuItem value={"EUR"}>EUR</MenuItem>
            </Select>
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default SidebarCoin;
