import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import WorksList from "./WorksList";
import FirstProject from "../../components/FirstProject";
import SecondProject from "../../components/SecondProject";

import {
  StyledWrapper,
  StyledOrangeButton,
  StyledBlackButton,
  StyledLeftSection,
  StyledTitle,
  StyledDescription,
  StyledRightSection,
} from "../style";

const WorksPage = () => {
  const [idProject, SetIdProject] = useState(null);
  const [project, setProject] = useState(null);

  useEffect(() => {
    if (idProject === 1) {
      setProject(() => <FirstProject SetIdProject={SetIdProject} />);
    } else if (idProject === 2) {
      setProject(() => <SecondProject SetIdProject={SetIdProject} />);
    } else {
      setProject(null);
    }
  }, [idProject]);

  return (
    <>
      <StyledWrapper>
        <StyledLeftSection>
          <StyledTitle>Works</StyledTitle>
          <StyledDescription>
            There are my best projects made with modern techonoglies. Click on
            certain project to see more details
          </StyledDescription>
          <div>
            <StyledOrangeButton as={Link} to={"/contact"}>
              contact
            </StyledOrangeButton>
            <StyledBlackButton
              target="_blank"
              rel="noreferrer"
              href="https://github.com/SaikeNO"
            >
              GitHub
            </StyledBlackButton>
          </div>
        </StyledLeftSection>
        <StyledRightSection>
          <WorksList SetIdProject={SetIdProject} />
        </StyledRightSection>
      </StyledWrapper>
      <AnimatePresence>{project}</AnimatePresence>
    </>
  );
};
export default WorksPage;
