import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import AsideNaviItem from "./AsideNaviItem";

import { StyledAside, StyledPageCounter } from "./style";

const dataNav = [
  { name: "-- home", path: "/", exact: true },
  { name: "-- about", path: "/about" },
  { name: "-- works", path: "/works" },
  { name: "-- contact", path: "/contact" },
];

const AsideNavi = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState();

  useEffect(() => {
    setCurrentPage(() => {
      if (location.pathname === "/") return 1;
      else if (location.pathname === "/about") return 2;
      else if (location.pathname === "/works") return 3;
      else if (location.pathname === "/contact") return 4;
      else return -1;
    });
  }, [location]);

  const menu = dataNav.map((item) => (
    <AsideNaviItem
      key={item.name}
      path={item.path}
      exact={item.exact}
      name={item.name}
    />
  ));

  return (
    <StyledAside>
      <StyledPageCounter>
        <motion.span
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {currentPage}
        </motion.span>
        <span>/</span>
        <span>4</span>
      </StyledPageCounter>
      <nav>
        <ul>{menu}</ul>
      </nav>
    </StyledAside>
  );
};

export default AsideNavi;
