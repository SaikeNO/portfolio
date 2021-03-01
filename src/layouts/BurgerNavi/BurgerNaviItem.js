import { motion } from "framer-motion";
import { StyledLink } from "./style";
import { colors } from "../../styles/colors";

const BurgerNaviItem = ({ name, path, exact, index, handleToggleClick }) => {
  return (
    <motion.li
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{
        transition: { duration: 0.5, delay: (index - 1.5) * 0.2 },
        y: -50,
        opacity: 0,
      }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <StyledLink
        whileHover={{
          color: colors.orange,
        }}
        transition={{
          duration: 0.2,
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
