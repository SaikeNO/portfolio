import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

import { colors } from "../../styles/colors";
import { fonts } from "../../styles/fonts";
import { device } from "../../styles/device";

export const StyledNav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: ${colors.white};
  z-index: 997;
`;

export const StyledList = styled.ul`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  font-size: ${fonts.xxl};
  text-transform: uppercase;
  @media ${device.mobileL} {
    font-size: ${fonts.xl};
  }
`;
export const StyledLink = styled(motion(NavLink))`
  color: ${colors.black};
  font-weight: bold;
`;
