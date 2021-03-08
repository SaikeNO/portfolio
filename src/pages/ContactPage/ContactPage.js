import React from "react";
import { Link } from "react-router-dom";

import Form from "./Form";

import {
  StyledWrapper,
  StyledLeftSection,
  StyledRightSection,
  StyledTitle,
  StyledDescription,
  StyledButton,
} from "../style";

import { variants } from "../../styles/variants";

const ContactPage = () => {
  return (
    <StyledWrapper>
      <StyledLeftSection
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <StyledTitle>Contact</StyledTitle>
        <StyledDescription>
          Write me if you have some questions. I will respond as soon as it
          possible.
        </StyledDescription>
        <div>
          <StyledButton as={Link} to={"/works"} primary="true">
            works
          </StyledButton>
          <StyledButton href={"https://github.com/SaikeNO"} target={"_blank"}>
            GitHub
          </StyledButton>
        </div>
      </StyledLeftSection>
      <StyledRightSection>
        <Form />
      </StyledRightSection>
    </StyledWrapper>
  );
};

export default ContactPage;
