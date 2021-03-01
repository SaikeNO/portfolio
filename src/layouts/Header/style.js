import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { colors } from "../../styles/colors";
import { fonts } from "../../styles/fonts";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100px;
  padding: 0 50px;
  font-weight: bold;
  z-index: 999;
`;

export const StyledButton = styled.button`
  position: relative;
  width: 38px;
  ${(props) =>
    props.isOpened
      ? "& span:first-of-type {width: 90%;} span:nth-of-type(2) {width: 60%;} span:nth-of-type(3) {width: 30%}"
      : ""};
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  &:hover span:first-of-type {
    width: 90%;
  }
  &:hover span:nth-of-type(2) {
    width: 60%;
  }
  &:hover span:nth-of-type(3) {
    width: 30%;
  }
  transition: 0.4s;
`;

export const LinkElement = styled(NavLink)`
  font-size: ${fonts.xs};
  color: ${colors.white};
`;

export const StyledBurger = styled.span`
  display: block;
  height: 3px;
  width: 100%;
  margin-bottom: 7px;
  background-color: ${colors.orange};
  transition: 0.4s;
  &:first-of-type {
    margin-top: 7px;
  }
`;
