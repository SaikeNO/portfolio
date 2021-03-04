import styled from "styled-components";
import { motion } from "framer-motion";

import { colors } from "../../styles/colors";
import { fonts } from "../../styles/fonts";

export const ListItem = styled(motion.li)`
  display: flex;
  justify-content: space-between;
  padding: 20px 40px;
  margin: 30px 0;
  width: 550px;
  font-size: ${fonts.s};
  font-weight: bold;
  background-color: #000;
  border-radius: 20px;
  color: ${colors.gray};
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    color: ${colors.white};
  }
`;
