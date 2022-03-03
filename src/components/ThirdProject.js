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

import img1 from "../images/saper1.jpg";
import img2 from "../images/saper2.jpg";

const SecondProject = ({ SetIdProject }) => {
  return (
    <>
      <ProjectTitle
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        Minesweeper
      </ProjectTitle>

      <PojectDescription
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        My own algorithm for minesweeper. I wrote this to pass the school
        subject.
      </PojectDescription>

      <NextProject onClick={() => SetIdProject((prevId) => prevId + 1)}>
        Next Project
        <NextProjectArrow />
      </NextProject>

      <StyledButton
        width={"140px"}
        href="https://saikeno.github.io/saper/"
        target="_blank"
      >
        <InsideButton>
          <AiOutlineShareAlt size="1.5em" style={{ marginRight: "8px" }} />
          live
        </InsideButton>
      </StyledButton>

      <StyledButton
        href="https://github.com/SaikeNO/saper"
        target="_blank"
        width={"150px"}
      >
        <InsideButton>
          <AiFillGithub size="1.5em" style={{ marginRight: "8px" }} />
          source code
        </InsideButton>
      </StyledButton>

      <StyledImg src={img1} />
      <StyledImg src={img2} />
      <CloseButton onClick={() => SetIdProject(null)} />
    </>
  );
};

export default SecondProject;
