import React from "react";
import MenuItem from "./BurgerNaviItem";

import { StyledNav, StyledList } from "./style";

const dataNav = [
  { name: "home", path: "/", exact: true },
  { name: "about", path: "/about" },
  { name: "works", path: "/works" },
  { name: "contact", path: "/contact" },
];

const navVariants = {
  hidden: { x: "-100%" },
  visible: {
    x: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.15,
      when: "beforeChildren",
    },
  },
  exit: {
    x: "-100%",
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
      when: "afterChildren",
    },
  },
};

const BurgerNavigation = ({ handleToggleClick }) => {
  const menu = dataNav.map((item, index) => (
    <MenuItem
      key={index}
      name={item.name}
      path={item.path}
      exact={item.exact}
      index={index + 1}
      handleToggleClick={handleToggleClick}
    />
  ));

  return (
    <StyledNav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <StyledList>{menu}</StyledList>
    </StyledNav>
  );
};

export default BurgerNavigation;
