import React from "react";

import {
  StyledWrapper,
  HiddenDiv,
  ProjectTitle,
  PojectDescription,
  NextProject,
  NextProjectArrow,
  StyledImg,
} from "./style";

import { StyledBlackButton } from "../pages/style";

import img1 from "../images/to_do_app1.png";
import img2 from "../images/to_do_app2.png";

const FirstProject = ({ SetIdProject }) => {
  return (
    <>
      <StyledWrapper
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%", transition: { duration: 0.4 } }}
        transition={{ duration: 0.6 }}
      >
        <ProjectTitle>TO DO APP</ProjectTitle>
        <PojectDescription>
          Simple TO DO APP done with pure React.
        </PojectDescription>
        <NextProject onClick={() => SetIdProject((prevId) => prevId + 1)}>
          Next Project
          <NextProjectArrow />
        </NextProject>
        <StyledBlackButton color="white" padding="5px 40px">
          live
        </StyledBlackButton>
        <StyledBlackButton color="white" padding="5px 40px">
          source code
        </StyledBlackButton>
        <StyledImg src={img1} />
        <StyledImg src={img2} />
      </StyledWrapper>
      <HiddenDiv onClick={() => SetIdProject(null)} />
    </>
  );
};

export default FirstProject;
