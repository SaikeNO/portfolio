import styled from "styled-components";
import { motion } from "framer-motion";

import { colors } from "../../styles/colors";
import { fonts } from "../../styles/fonts";

export const StyledWelcome = styled(motion.section)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-width: 300px;
`;

export const StyledImgWrapper = styled.section`
  position: relative;
  overflow: hidden;
  $ img {
  }
`;
export const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  position: absolute;
  min-height: 300px;
  filter: grayscale(1);
`;
export const StyledTitle = styled.h2`
  font-size: ${fonts.xxl};
  line-height: 0.8;
  color: ${colors.white};
`;

export const StyledDescription = styled.p`
  font-size: ${fonts.m};
  color: ${colors.gray};
  margin-top: 20px;
`;

export const StyledButton = styled.button`
  width: 100px;
  margin: 20px 20px 20px 0;
  border: 2px solid ${colors.orange};
  background-color: transparent;
  border-radius: 20px;
  font-size: ${fonts.xs};
  transition: 0.4s;
  & a {
    display: block;
    color: ${colors.orange};
    font-weight: bold;
    padding: 10px;
    transition: 0.4s;
  }
  &:hover {
    background-color: #000;
  }

  &:nth-of-type(2) {
    background-color: #000;
    border: 2px solid #000;
  }
`;

export const StyledAnimateDiv = styled(motion.div)`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: ${colors.gray};
  z-index: 2;
`;
export const StyledCoverDiv = styled(motion.div)`
  position: absolute;
  background-color: ${colors.black};
  width: 100%;
  height: 100%;
`;
