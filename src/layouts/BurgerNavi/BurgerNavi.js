import React from "react";
import MenuItem from "./BurgerNaviItem";

import { StyledNav, StyledList } from "./style";

const dataNav = [
  { name: "home", path: "/", exact: true },
  { name: "about", path: "/about" },
  { name: "works", path: "/works" },
  { name: "contact", path: "/contact" },
];

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
      key="burger nav"
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%", transition: { delay: 0.8, duration: 0.5 } }}
      transition={{ duration: 0.8 }}
    >
      <StyledList>{menu}</StyledList>
    </StyledNav>
  );
};

export default BurgerNavigation;
