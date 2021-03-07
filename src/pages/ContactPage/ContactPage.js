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

const ContactPage = () => {
  return (
    <StyledWrapper>
      <StyledLeftSection
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
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
