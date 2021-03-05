import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import WorksList from "./WorksList";
import FirstProject from "../../components/FirstProject";
import SecondProject from "../../components/SecondProject";
import ThirdProject from "../../components/ThirdProject";
import FourthProject from "../../components/FourthProject";

import {
  StyledWrapper,
  StyledButton,
  StyledLeftSection,
  StyledTitle,
  StyledDescription,
  StyledRightSection,
} from "../style";

import { StyledProjectWrapper, HiddenDiv } from "./style";

const WorksPage = () => {
  const [idProject, SetIdProject] = useState(null);
  const [project, setProject] = useState(null);

  useEffect(() => {
    if (idProject === 1) {
      setProject(() => <FirstProject SetIdProject={SetIdProject} />);
    } else if (idProject === 2) {
      setProject(() => <SecondProject SetIdProject={SetIdProject} />);
    } else if (idProject === 3) {
      setProject(() => <ThirdProject SetIdProject={SetIdProject} />);
    } else if (idProject === 4) {
      setProject(() => <FourthProject SetIdProject={SetIdProject} />);
    } else {
      setProject(null);
    }
  }, [idProject]);

  return (
    <>
      <StyledWrapper>
        <StyledLeftSection
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <StyledTitle>Works</StyledTitle>
          <StyledDescription>
            There are my best projects made with modern techonoglies. Click on
            certain project to see more details
          </StyledDescription>
          <div>
            <StyledButton as={Link} to={"/contact"} primary="true">
              contact
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
          <WorksList SetIdProject={SetIdProject} />
        </StyledRightSection>
      </StyledWrapper>
      <AnimatePresence>
        {idProject && (
          <>
            <StyledProjectWrapper
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%", transition: { duration: 0.4 } }}
              transition={{ duration: 0.6 }}
            >
              {project}
            </StyledProjectWrapper>

            <HiddenDiv onClick={() => SetIdProject(null)} />
          </>
        )}
      </AnimatePresence>
    </>
  );
};
export default WorksPage;
