import React from "react";

import { StyledWrapper, HiddenDiv } from "./style";

const SecondProject = ({ SetIdProject }) => {
  return (
    <>
      <StyledWrapper
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%", transition: { duration: 0.4 } }}
        transition={{ duration: 0.6 }}
      ></StyledWrapper>
      <HiddenDiv onClick={() => SetIdProject(null)} />
    </>
  );
};

export default SecondProject;
