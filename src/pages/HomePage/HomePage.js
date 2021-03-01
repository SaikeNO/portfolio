import React, { useState } from "react";
import { Link } from "react-router-dom";

import { StyledWrapper } from "../style";
import {
  StyledWelcome,
  StyledTitle,
  StyledDescription,
  StyledImgWrapper,
  StyledButton,
  StyledAnimateDiv,
  StyledImg,
  StyledCoverDiv,
} from "./style";
import image from "../../images/lengiewicz.jpg";

const HomePage = () => {
  const [isAnimated, setIsAnimated] = useState(true);

  return (
    <StyledWrapper>
      <StyledWelcome
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <StyledTitle>
          Mateusz <br /> Lengiewicz
        </StyledTitle>
        <StyledDescription>
          FrontEnd Developer by passion who focuses on writing clean, elegant
          and effcient code
        </StyledDescription>
        <div>
          <StyledButton>
            <Link to={"/about"}>about me</Link>
          </StyledButton>
          <StyledButton>
            {" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/SaikeNO"
            >
              GitHub
            </a>{" "}
          </StyledButton>
        </div>
      </StyledWelcome>
      <StyledImgWrapper>
        <StyledImg src={image} alt="portrait of Mateusz Lengiewicz" />
        {isAnimated && (
          <StyledAnimateDiv
            initial={{ y: "-150%" }}
            animate={{ y: "150%" }}
            exit={[{ y: "-100%" }]}
            transition={{ duration: 1.2, ease: "linear" }}
            onAnimationComplete={() => setIsAnimated(false)}
          />
        )}
        {isAnimated && (
          <StyledCoverDiv
            initial={{ y: "0" }}
            animate={{ y: "150%" }}
            transition={{ duration: 0.6, ease: "linear", delay: 0.4 }}
          />
        )}
      </StyledImgWrapper>
    </StyledWrapper>
  );
};

export default HomePage;
