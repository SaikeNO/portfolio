import React from "react";
import { AiFillGithub, AiOutlineShareAlt } from "react-icons/ai";

import {
  ProjectTitle,
  PojectDescription,
  NextProject,
  NextProjectArrow,
  // StyledImg,
  InsideButton,
  CloseButton,
} from "./style";

import { StyledButton } from "../pages/style";

// import img1 from "../images/applab1.png";
// import img2 from "../images/applab2.png";
// import img3 from "../images/applab3.png";

const SecondProject = ({ SetIdProject }) => {
  return (
    <>
      <ProjectTitle
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        Weather App
      </ProjectTitle>
      <PojectDescription
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        ...
      </PojectDescription>
      <NextProject onClick={() => SetIdProject((prevId) => prevId + 1)}>
        Next Project
        <NextProjectArrow />
      </NextProject>
      <StyledButton width={"140px"} href="" target="_blank">
        <InsideButton>
          <AiOutlineShareAlt size="1.5em" style={{ marginRight: "8px" }} />
          live
        </InsideButton>
      </StyledButton>
      <StyledButton href="" target="_blank" width={"150px"}>
        <InsideButton>
          <AiFillGithub size="1.5em" style={{ marginRight: "8px" }} />
          source code
        </InsideButton>
      </StyledButton>
      {/* <StyledImg src={img1} /> */}
      {/* <StyledImg src={img2} /> */}
      {/* <StyledImg src={img3} /> */}
      <CloseButton onClick={() => SetIdProject(null)} />
    </>
  );
};

export default SecondProject;
