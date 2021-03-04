import styled from "styled-components";
import { motion } from "framer-motion";

import { colors } from "../styles/colors";
import { fonts } from "../styles/fonts";

export const StyledWrapper = styled(motion.article)`
  position: fixed;
  top: 0;
  left: 0;
  width: 60%;
  height: 100%;
  padding: 100px 50px;
  background-color: ${colors.white};
  z-index: 900;
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
  width: 40%;
  height: 100%;
`;

export const ProjectTitle = styled.h2`
  font-size: ${fonts.xxl};
  color: ${colors.black};
`;

export const PojectDescription = styled.p`
  font-size: ${fonts.s};
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

export const StyledImg = styled.img`
  width: 90%;
  margin: 10% 0 40px 10%;
  box-shadow: 2px 2px 10px 1px ${colors.gray};
  &:nth-of-type(2) {
    margin: 0 10% 0 0;
  }
`;
