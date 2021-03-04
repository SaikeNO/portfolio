import React from "react";
import TechStack from "./TechStack";

import {
  StyledWrapper,
  StyledLeftSection,
  StyledRightSection,
  StyledTitle,
  StyledDescription,
} from "../style";

import { AboutMeTitle, AboutMeDescription } from "./style";

const AboutPage = () => {
  return (
    <StyledWrapper>
      <StyledLeftSection
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <StyledTitle>About me</StyledTitle>
        <StyledDescription>
          A few words about me and my technologies what I use for building Apps{" "}
        </StyledDescription>
      </StyledLeftSection>
      <StyledRightSection>
        <AboutMeTitle
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          #About me
        </AboutMeTitle>
        <AboutMeDescription
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          I'm 18 years old developer who is passionated about what I do. I'm a
          student of the 3rd grade of electronic technical high school in
          Białystok. The process of self-developement based on the modern
          technologies makes me satisfied.
        </AboutMeDescription>
        <AboutMeTitle
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          #Tech Stack
        </AboutMeTitle>
        <TechStack />
      </StyledRightSection>
    </StyledWrapper>
  );
};

export default AboutPage;
