import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import Header from "./layouts/Header/Header";
import Page from "./layouts/Page/Page";
import AsideNavi from "./layouts/AsideNavi/AsideNavi";
import BurgerNavi from "./layouts/BurgerNavi/BurgerNavi";

import "./styles/App.css";
import { device } from "./styles/device";

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [isMediaMatches, setIsMediaMatches] = useState(true);

  useEffect(() => {
    setIsMediaMatches(!window.matchMedia(device.laptop).matches);
    window.addEventListener("resize", () => {
      setIsMediaMatches(!window.matchMedia(device.laptop).matches);
    });
  }, []);

  const handleToggleClick = () => setIsOpened((prevIsOpened) => !prevIsOpened);

  return (
    <AnimatePresence exitBeforeEnter>
      <Router basename={process.env.PUBLIC_URL}>
        <Header isOpened={isOpened} handleToggleClick={handleToggleClick} />
        <Page />
        {isMediaMatches && <AsideNavi />}
        <AnimatePresence>
          {isOpened && <BurgerNavi handleToggleClick={handleToggleClick} />}
        </AnimatePresence>
      </Router>
    </AnimatePresence>
  );
}

export default App;
