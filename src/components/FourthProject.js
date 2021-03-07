import React from "react";
import { AiFillGithub, AiOutlineShareAlt } from "react-icons/ai";

import {
  ProjectTitle,
  PojectDescription,
  NextProject,
  NextProjectArrow,
  StyledImg,
  InsideButton,
  CloseButton,
} from "./style";

import { StyledButton } from "../pages/style";

import img1 from "../images/speedcars1.png";
import img2 from "../images/speedcars2.png";
import img3 from "../images/speedcars3.png";

const FourthProject = ({ SetIdProject }) => {
  return (
    <>
      <ProjectTitle
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        Speedcars
      </ProjectTitle>
      <PojectDescription
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        First web project made with HTML/CSS/JS some jQuery for smooth scrolling
        and library lightbox for gallery of images.
      </PojectDescription>
      <NextProject onClick={() => SetIdProject(1)}>
        Next Project
        <NextProjectArrow />
      </NextProject>
      <StyledButton
        width={"140px"}
        href="https://saikeno.github.io/Speedcars/"
        target="_blank"
      >
        <InsideButton>
          <AiOutlineShareAlt size="1.5em" style={{ marginRight: "8px" }} />
          live
        </InsideButton>
      </StyledButton>
      <StyledButton
        href="https://github.com/SaikeNO/Speedcars"
        target="_blank"
        width={"150px"}
      >
        <InsideButton>
          <AiFillGithub size="1.5em" style={{ marginRight: "8px" }} />
          source code
        </InsideButton>
      </StyledButton>
      <StyledImg
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        src={img1}
      />
      <StyledImg
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        src={img2}
      />
      <StyledImg
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        src={img3}
      />
      <CloseButton onClick={() => SetIdProject(null)} />
    </>
  );
};

export default FourthProject;
