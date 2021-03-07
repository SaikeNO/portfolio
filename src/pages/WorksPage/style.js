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
export const StyledProjectWrapper = styled(motion.article)`
  position: fixed;
  top: 0;
  left: 0;
  width: 60%;
  height: 100%;
  padding: 100px 50px;
  background-color: ${colors.white};
  z-index: 999;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const HiddenDiv = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 998;
  backdrop-filter: blur(2px);
`;
