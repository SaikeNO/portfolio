import React, { useState } from "react";

import validator from "validator";

import { StyledButton } from "../style";
import {
  StyledLabel,
  StyledForm,
  StyledInput,
  StyledTextArea,
  StyledWrapper,
  ErrorMessage,
  StyledConfirmation,
} from "./style";

const Form = () => {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [messageValue, setMessageValue] = useState("");
  const [isNameError, setIsNameError] = useState();
  const [isEmailError, setIsEmailError] = useState();
  const [isMessagError, setIsMessageError] = useState();
  const [isValidate, setIsValidate] = useState(false);

  const handleInput = (e) => {
    const { id, value } = e.target;

    if (id === "name") {
      setNameValue(value);
      if (!value || value.length < 3) {
        setIsNameError(true);
      } else {
        setIsNameError(false);
      }
    } else if (id === "email") {
      setEmailValue(value);
      if (!validator.isEmail(value)) {
        setIsEmailError(true);
      } else {
        setIsEmailError(false);
      }
    } else if (id === "msg") {
      setMessageValue(value);
      if (!value) {
        setIsMessageError(true);
      } else {
        setIsMessageError(false);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValidate = checkIsValidate();
    clearForm(isValidate);
  };

  const checkIsValidate = () => {
    if (
      isNameError === false &&
      isEmailError === false &&
      isMessagError === false
    ) {
      return true;
    } else {
      return false;
    }
  };

  const clearForm = (isValidate) => {
    if (isValidate) {
      setNameValue("");
      setEmailValue("");
      setMessageValue("");
      setIsValidate(true);
    }
  };

  return (
    <StyledForm noValidate onSubmit={handleSubmit}>
      <StyledWrapper>
        <StyledLabel htmlFor="name">Name</StyledLabel>
        <StyledInput
          type="text"
          id="name"
          value={nameValue}
          onChange={handleInput}
        />
        {isNameError && (
          <ErrorMessage>Have to be more than 3 marks! </ErrorMessage>
        )}
      </StyledWrapper>
      <StyledWrapper>
        <StyledLabel htmlFor="email">E-mail</StyledLabel>
        <StyledInput
          type="email"
          id="email"
          value={emailValue}
          onChange={handleInput}
        />
        {isEmailError && <ErrorMessage>Invalid email! </ErrorMessage>}
      </StyledWrapper>
      <StyledWrapper>
        <StyledLabel htmlFor="msg">Message</StyledLabel>
        <StyledTextArea
          as={"textarea"}
          height="auto"
          id="msg"
          value={messageValue}
          onChange={handleInput}
        ></StyledTextArea>
        {isMessagError && (
          <ErrorMessage top={"25px"}> Can not be empty! </ErrorMessage>
        )}
      </StyledWrapper>

      <StyledButton
        as={"button"}
        primary="true"
        padding="15px 40px"
        fontSize="20px"
      >
        Send
      </StyledButton>
      {isValidate && (
        <StyledConfirmation>Send successfully!</StyledConfirmation>
      )}
    </StyledForm>
  );
};

export default Form;
