import styled from "styled-components";
import { motion } from "framer-motion";

import { colors } from "../../styles/colors";
import { fonts } from "../../styles/fonts";

export const AboutMeTitle = styled(motion.h3)`
  color: ${colors.white};
  font-size: ${fonts.m};
  margin: 30px 15px 15px 0;
`;

export const AboutMeDescription = styled(motion.p)`
  color: ${colors.gray};
  font-size: ${fonts.s};
`;

export const StyledList = styled(motion.ul)`
  display: flex;
  flex-wrap: wrap;
`;

export const ListItem = styled(motion.li)`
  width: 50%;
  font-size: ${fonts.s};
  color: ${colors.gray};
  margin-bottom: 1em;
  display: flex;
  align-items: center;
`;
