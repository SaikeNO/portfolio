import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { colors } from "../../styles/colors";

export const HeaderElement = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100px;
  padding: 0 50px;
  font-size: 16px;
  font-weight: bold;
`;

export const ButtonElement = styled.button`
  position: relative;
  width: 40px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 999;
`;

export const LinkElement = styled(NavLink)`
  color: ${colors.white};
`;

export const BurgerSpanElement = styled.span`
  display: block;
  height: 3px;
  width: 100%;
  margin-bottom: 8px;
  background-color: ${colors.orange};
`;
