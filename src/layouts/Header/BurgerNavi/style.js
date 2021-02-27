import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { colors } from "../../../styles/colors";

export const StyledNav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: ${colors.white};
`;

export const StyledUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  font-size: 60px;
  text-transform: uppercase;
`;
export const StyledLink = styled(motion(NavLink))`
  color: ${colors.black};
`;
