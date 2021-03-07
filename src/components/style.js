import styled from "styled-components";
import { motion } from "framer-motion";

import { colors } from "../styles/colors";
import { fonts } from "../styles/fonts";
import { device } from "../styles/device";

export const ProjectTitle = styled(motion.h2)`
  font-size: ${fonts.xxl};
  color: ${colors.black};
  @media ${device.mobileL} {
    font-size: ${fonts.xl};
    margin-bottom: 10px;
  }
`;

export const PojectDescription = styled(motion.p)`
  font-size: ${fonts.s};
  width: 80%;
`;

export const NextProjectArrow = styled.div`
  display: inline-block;
  position: relative;
  width: 40px;
  height: 2px;
  margin-left: 10px;
  background-color: ${colors.black};
  transition: 0.3s;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 15px;
    height: 2px;
    background-color: ${colors.black};
    transform-origin: 100% 100%;
    transform: rotate(45deg);
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 15px;
    height: 2px;
    background-color: ${colors.black};
    transform-origin: 100% 100%;
    transform: rotate(-45deg);
  }
`;
export const NextProject = styled.div`
  display: flex;
  align-items: center;
  padding: 25px 0;
  font-size: ${fonts.xs};
  width: 140px;
  cursor: pointer;

  &:hover ${NextProjectArrow} {
    width: 50px;
  }
`;

export const StyledImg = styled(motion.img)`
  width: 90%;
  margin: 40px 0 40px 10%;
  box-shadow: 2px 2px 10px 1px ${colors.gray};
  &:nth-of-type(2) {
    margin: 0 10% 0 0;
  }
  @media ${device.tablet} {
    width: 100%;
    margin: 20px 0 0 0 !important;
  } ;
`;

export const InsideButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 5%;
  right: 5%;
  height: 20px;
  width: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: 0.3s;
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    background-color: ${colors.black};
    height: 2px;
    width: 20px;
    transform: rotate(-45deg);
  }
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    background-color: ${colors.black};
    height: 2px;
    width: 20px;
    transform: rotate(45deg);
  }

  &:hover {
    transform: rotate(-90deg);
  }
`;
