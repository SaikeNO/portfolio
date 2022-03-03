import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaReact,
  FaMobileAlt,
  FaAtom,
  FaWordpressSimple,
  FaFileAlt,
} from "react-icons/fa";
import { SiJavascript, SiStyledComponents, SiFramer } from "react-icons/si";

import { ListItem, StyledList } from "./style";
import { listVariants, itemVariants } from "../../styles/variants";

const data = [
  { icon: FaHtml5, name: "HTML5" },
  { icon: FaSass, name: "SASS" },
  { icon: FaCss3Alt, name: "CSS" },
  { icon: FaReact, name: "React (hooks)" },
  { icon: SiJavascript, name: "Javascript (ES6+)" },
  { icon: SiStyledComponents, name: "Styled Components" },
  { icon: SiFramer, name: "Framer" },
  { icon: FaMobileAlt, name: "RWD" },
  { icon: FaAtom, name: "Atomic design" },
  { icon: FaWordpressSimple, name: "Wordpress" },
  { icon: FaFileAlt, name: "ACF" },
];

const list = data.map((item, id) => (
  <ListItem key={id} variants={itemVariants}>
    {item?.icon && <item.icon style={{ marginRight: "10px" }} size={"2em"} />}{" "}
    {item.name}
  </ListItem>
));

const TechStack = () => {
  return (
    <StyledList
      variants={listVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {list}
    </StyledList>
  );
};

export default TechStack;
