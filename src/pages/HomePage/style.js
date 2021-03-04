import styled from "styled-components";
import { motion } from "framer-motion";

import { colors } from "../../styles/colors";

export const StyledImgWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  $ img {
  }
`;
export const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
  position: absolute;
  min-height: 300px;
  filter: grayscale(1);
`;

export const StyledAnimateDiv = styled(motion.div)`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: ${colors.gray};
  z-index: 2;
`;
export const StyledCoverDiv = styled(motion.div)`
  position: absolute;
  background-color: ${colors.black};
  width: 100%;
  height: 100%;
`;
