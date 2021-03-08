import React from "react";
import { Link } from "react-router-dom";
import TechStack from "./TechStack";

import {
  StyledWrapper,
  StyledLeftSection,
  StyledRightSection,
  StyledTitle,
  StyledDescription,
  StyledButton,
} from "../style";

import { AboutMeTitle, AboutMeDescription } from "./style";
import { variants, decriptionVariants } from "../../styles/variants";

const AboutPage = () => {
  return (
    <StyledWrapper>
      <StyledLeftSection
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <StyledTitle>About me</StyledTitle>
        <StyledDescription>
          A few words about me and my technologies what I use for building Apps{" "}
        </StyledDescription>
        <div>
          <StyledButton as={Link} to={"/works"} primary="true">
            works
          </StyledButton>
          <StyledButton
            href={"https://www.facebook.com/mateusz.lengiewicz/"}
            target={"_blank"}
          >
            facebook
          </StyledButton>
        </div>
      </StyledLeftSection>
      <StyledRightSection>
        <AboutMeTitle
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          #About me
        </AboutMeTitle>
        <AboutMeDescription
          variants={decriptionVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          I'm 18 years old developer who is passionated about what I do. I'm a
          student of the 3rd grade of electronic technical high school in
          Białystok. The process of self-developement based on the modern
          technologies makes me satisfied and I love it.
        </AboutMeDescription>
        <AboutMeTitle
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          #Tech Stack
        </AboutMeTitle>
        <TechStack />
      </StyledRightSection>
    </StyledWrapper>
  );
};

export default AboutPage;
