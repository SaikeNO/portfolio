import { motion } from "framer-motion";
import { StyledLink } from "./style";
import { colors } from "../../styles/colors";

const childVariants = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
  exit: {
    y: -50,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const BurgerNaviItem = ({ name, path, exact, handleToggleClick }) => {
  return (
    <motion.li variants={childVariants}>
      <StyledLink
        whileHover={{
          color: colors.orange,
        }}
        transition={{
          duration: 0.25,
        }}
        to={path}
        exact={exact}
        onClick={handleToggleClick}
      >
        {name}
      </StyledLink>
    </motion.li>
  );
};
export default BurgerNaviItem;
