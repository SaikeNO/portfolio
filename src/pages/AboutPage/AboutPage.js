import React from "react";

import { motion } from "framer-motion";
import {
  StyledWrapper,
  StyledLeftSection,
  StyledRightSection,
  StyledTitle,
  StyledDescription,
} from "../style";

const AboutPage = () => {
  return (
    <StyledWrapper>
      <StyledLeftSection>
        <StyledTitle>About me</StyledTitle>
        <StyledDescription>
          A few words about me and my technologies what I use for building Apps{" "}
        </StyledDescription>
      </StyledLeftSection>
      <StyledRightSection></StyledRightSection>
    </StyledWrapper>
  );
};

export default AboutPage;
