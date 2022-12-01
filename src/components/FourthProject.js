import React from "react";
import { AiOutlineShareAlt } from "react-icons/ai";

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

import img1 from "../images/pzz.jpg";
import img2 from "../images/pzz2.jpg";
import img3 from "../images/pzz3.jpg";

const FourthProject = ({ SetIdProject }) => {
  return (
    <>
      <ProjectTitle
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        PZZ Białystok
      </ProjectTitle>
      <PojectDescription
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        My last commercial project. I used wordpress custom theme here with ACF.
      </PojectDescription>
      <NextProject onClick={() => SetIdProject(1)}>
        Next Project
        <NextProjectArrow />
      </NextProject>
      <StyledButton
        width={"140px"}
        href="https://pzz.bialystok.pl/"
        target="_blank"
      >
        <InsideButton>
          <AiOutlineShareAlt size="1.5em" style={{ marginRight: "8px" }} />
          live
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
