import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import styled from "styled-components";
import { colors } from "../../styles/colors";
import { fonts } from "../../styles/fonts";

export const StyledAside = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 12vw;
  min-width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledLink = styled(motion(NavLink))`
  display: block;
  padding: 0.2em;
  font-size: ${fonts.s};
  color: ${colors.gray};
`;

export const StyledPageCounter = styled.div`
  position: relative;
  font-size: ${fonts.s};
  height: 50px;
  width: 100px;
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
