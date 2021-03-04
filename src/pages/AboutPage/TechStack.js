import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaReact,
  FaMobileAlt,
} from "react-icons/fa";
import { SiJavascript, SiStyledComponents, SiFramer } from "react-icons/si";

import { ListItem } from "./style";

const data = [
  { icon: FaHtml5, name: "HTML5" },
  { icon: FaSass, name: "SASS" },
  { icon: FaCss3Alt, name: "CSS" },
  { icon: FaReact, name: "React (hooks)" },
  { icon: SiJavascript, name: "Javascript (ES6+)" },
  { icon: SiStyledComponents, name: "Styled Components" },
  { icon: SiFramer, name: "Framer" },
  { icon: FaMobileAlt, name: "RWD" },
];

const list = data.map((item, id) => (
  <ListItem
    key={id}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, delay: id * 0.3 }}
  >
    <item.icon style={{ marginRight: "10px" }} size={"2em"} /> {item.name}
  </ListItem>
));

const TechStack = () => {
  return <ul style={{ display: "flex", flexWrap: "wrap" }}>{list}</ul>;
};

export default TechStack;
