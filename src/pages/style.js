import styled from "styled-components";
import { motion } from "framer-motion";

import { colors } from "../styles/colors";
import { fonts } from "../styles/fonts";
import { device } from "../styles/device";

export const StyledWrapper = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 7vw;
  padding: 100px 12vw 100px 15vw;
  height: 100vh;
  max-width: 2000px;
  margin: 0 auto;
  @media ${device.laptop} {
    grid-template-columns: auto;
    grid-template-rows: repeat(2, 1fr);
    padding: 100px 50px;
    gap: 20px;
  }
  @media ${device.mobileL} {
    padding: 100px 20px 50px;
  }
`;
export const StyledLeftSection = styled(motion.section)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-width: 300px;
  @media ${device.mobileL} {
    min-width: 0;
  }
`;
export const StyledRightSection = styled(StyledLeftSection)`
  min-width: auto;
`;

export const StyledTitle = styled.h2`
  font-size: ${fonts.xxl};
  line-height: 0.8;
  color: ${colors.white};
  @media ${device.mobileL} {
    font-size: ${fonts.xl};
  }
`;

export const StyledDescription = styled.p`
  font-size: ${fonts.m};
  color: ${colors.gray};
  margin-top: 20px;
  @media ${device.mobileL} {
    font-size: ${fonts.s};
  }
`;
export const StyledButton = styled.a`
  display: inline-block;
  text-align: center;
  margin: 20px 20px 20px 0;
  border: 2px solid ${(props) => (props.primary ? colors.orange : "#000")};
  background-color: ${(props) => (props.primary ? "transparent" : "#000")};
  padding: ${(props) => props.padding || "10px 20px"};
  color: ${(props) => (props.primary ? colors.orange : colors.white)};
  width: ${(props) => props.width || "auto"};
  font-size: ${(props) => props.fontSize || fonts.xs};
  border-radius: 20px;
  font-weight: bold;
  transition: 0.4s;
  cursor: pointer;
  &:hover {
    background-color: #000;
  }
`;
