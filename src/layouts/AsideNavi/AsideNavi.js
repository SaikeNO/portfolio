import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import AsideNaviItem from "./AsideNaviItem";

import { StyledAside, StyledPageCounter } from "./style";

const dataNav = [
  { name: "-- home", path: "/", exact: true },
  { name: "-- about", path: "/about" },
  { name: "-- works", path: "/works" },
  { name: "-- contact", path: "/contact" },
];

const counterVariants = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.4 },
  },
  exit: {
    y: -20,
    opacity: 0,
    transition: { duration: 0.4 },
  },
};

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
        <AnimatePresence>
          <motion.span
            variants={counterVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {currentPage}
          </motion.span>
        </AnimatePresence>

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
