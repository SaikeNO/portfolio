import styled from "styled-components";
import { motion } from "framer-motion";

import { colors } from "../styles/colors";
import { fonts } from "../styles/fonts";

export const StyledWrapper = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5vw;
  padding: 100px 12vw 100px 15vw;
  height: 100vh;
`;
export const StyledLeftSection = styled(motion.section)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-width: 300px;
`;
export const StyledRightSection = styled.section``;

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
export const StyledOrangeButton = styled.a`
  display: inline-block;
  text-align: center;
  margin: 20px 20px 20px 0;
  border: 2px solid ${colors.orange};
  border-radius: 20px;
  font-size: ${fonts.xs};
  color: ${colors.orange};
  font-weight: bold;
  padding: 10px 20px;
  transition: 0.4s;
  &:hover {
    background-color: #000;
  }
`;

export const StyledBlackButton = styled(StyledOrangeButton)`
  background-color: #000;
  border: 2px solid #000;
`;
