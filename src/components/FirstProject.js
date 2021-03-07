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

import img1 from "../images/to_do_app1.png";
import img2 from "../images/to_do_app2.png";

const FirstProject = ({ SetIdProject }) => {
  return (
    <>
      <ProjectTitle
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        To do App
      </ProjectTitle>
      <PojectDescription
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        Simple TO DO APP done with pure React. Building this app i learnt how to
        use stateless functional component and react hooks. Data flow with props
        isn't problem for me. Built this app taught me how to move in pure React
        quite efficiently.
      </PojectDescription>
      <NextProject onClick={() => SetIdProject((prevId) => prevId + 1)}>
        Next Project
        <NextProjectArrow />
      </NextProject>
      <StyledButton
        width={"140px"}
        href="https://saikeno.github.io/to-do-app/"
        target="_blank"
      >
        <InsideButton>
          <AiOutlineShareAlt size="1.5em" style={{ marginRight: "8px" }} />
          live
        </InsideButton>
      </StyledButton>
      <StyledButton
        href="https://github.com/SaikeNO/to-do-app"
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
      <CloseButton onClick={() => SetIdProject(null)} />
    </>
  );
};

export default FirstProject;
