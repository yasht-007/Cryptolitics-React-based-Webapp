import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  border-radius: 50px;

  background: ${({ primary }) => (primary ? "#01BF71" : "#010606")};

  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};

  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#01BF71")};
  }
`;

export const Buttonsecond = styled(Link)`
  border-radius: 50px;

  background: #01bf71;

  white-space: nowrap;
  padding: 10px 18px;
  text-decoration: none;
  color: #fff;
  font-size: 16px;
  font-weight: 300;

  outline: none;
  border: none;
  cursor: pointer;
  margin-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    text-decoration: none;
    background: #fff;
    transition: all 0.2s ease-in-out;
    color: #000000;
  }
`;
