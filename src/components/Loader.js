import React from "react";
import AnimatedNumber from "animated-number-react";

import styled from "styled-components";
import { colors } from "../styles/colors";
import { fonts } from "../styles/fonts";
import { motion } from "framer-motion";

const loaderVariants = {
  hidden: { y: 0 },
  visible: { y: 0 },
  exit: { y: -100, transition: { duration: 1 } },
};

const LoaderDiv = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.white};
`;
const LoaderCounter = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: ${fonts.xxl};
`;
const Loader = () => {
  const formatValue = (value) => `${Math.floor(value)}%`;
  return (
    <LoaderDiv
      variants={loaderVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <LoaderCounter>
        <AnimatedNumber
          value={"100%"}
          formatValue={formatValue}
          duration={1000}
        />
      </LoaderCounter>
    </LoaderDiv>
  );
};

export default Loader;
