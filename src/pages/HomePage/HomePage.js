import React from "react";
import { Link } from "react-router-dom";

import {
  StyledWrapper,
  StyledButton,
  StyledLeftSection,
  StyledTitle,
  StyledDescription,
  StyledRightSection,
} from "../style";

import {
  StyledImgWrapper,
  StyledAnimateDiv,
  StyledImg,
  StyledCoverDiv,
} from "./style";

import image from "../../images/lengiewicz.jpg";

import {
  variants,
  imageVariants,
  imageHiddenVariants,
} from "../../styles/variants";

const HomePage = () => {
  return (
    <StyledWrapper>
      <StyledLeftSection
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <StyledTitle>
          Mateusz <br /> Lengiewicz
        </StyledTitle>
        <StyledDescription>
          FrontEnd Developer by passion who focuses on writing clean, elegant
          and effcient code
        </StyledDescription>
        <div>
          <StyledButton as={Link} to={"/about"} primary="true">
            about me
          </StyledButton>
          <StyledButton
            target="_blank"
            rel="noreferrer"
            href="https://github.com/SaikeNO"
          >
            GitHub
          </StyledButton>
        </div>
      </StyledLeftSection>
      <StyledRightSection>
        <StyledImgWrapper>
          <StyledImg src={image} alt="portrait of Mateusz Lengiewicz" />
          <StyledAnimateDiv
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          />
          <StyledCoverDiv
            variants={imageHiddenVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          />
        </StyledImgWrapper>
      </StyledRightSection>
    </StyledWrapper>
  );
};

export default HomePage;
