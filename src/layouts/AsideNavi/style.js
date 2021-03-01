import { NavLink } from "react-router-dom";

import styled from "styled-components";
import { colors } from "../../styles/colors";

export const StyledAside = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px;
  z-index: 0;
`;

export const StyledLink = styled(NavLink)`
  display: block;
  padding: 0.3em;
  font-size: 1.3em;
  color: ${colors.white};
`;

export const StyledPageCounter = styled.div`
  position: relative;
  font-size: 1.1em;
  height: 50px;
  font-weight: bold;
  color: ${colors.orange};
  & span:first-of-type {
    position: absolute;
    top: 0;
    left: 0;
  }
  & span:nth-of-type(2) {
    position: absolute;
    top: 20%;
    left: 15%;
  }
  & span:nth-of-type(3) {
    position: absolute;
    top: 40%;
    left: 30%;
  }
`;
