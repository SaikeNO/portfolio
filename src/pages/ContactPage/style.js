import styled from "styled-components";
import { motion } from "framer-motion";

import { colors } from "../../styles/colors";
import { fonts } from "../../styles/fonts";

export const StyledForm = styled(motion.form)`
  background-color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 50px 20px;
  border-radius: 30px;
`;

export const StyledLabel = styled.label`
  display: inline-block;
  align-self: flex-start;
  font-size: ${fonts.m};
  color: ${colors.white};
  margin-bottom: 10px;
  cursor: pointer;
`;
export const StyledInput = styled.input`
  width: 100%;
  font-size: ${fonts.s};
  color: ${colors.gray};
  background-color: transparent;
  border: none;
  border-bottom: 2px solid gray;
  outline: none;
  font-family: "roboto";
  transition: 0.3s;
  &:focus {
    border-color: ${colors.orange};
  }
  &::selection {
    background-color: gray;
  }
`;

export const StyledTextArea = styled(StyledInput)`
  resize: none;
  height: 100px;
  font-family: "Roboto";
`;

export const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 20px 0;
`;

export const ErrorMessage = styled(motion.span)`
  position: absolute;
  bottom: 0;
  ${(props) => `top: ${props.top}`};
  left: -250px;
  width: 230px;
  height: 35px;
  line-height: 35px;
  background-color: gray;
  font-size: ${fonts.s};
  color: ${colors.white};
  border-radius: 5px;
  text-align: center;
  &::before {
    content: "";
    position: absolute;
    right: 0;
    top: 50%;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-left: 6px solid gray;
    transform: translate(100%, -50%);
  }
`;

export const StyledConfirmation = styled.p`
  color: ${colors.white};
  font-size: ${fonts.s};
  margin-right: 20px;
`;
