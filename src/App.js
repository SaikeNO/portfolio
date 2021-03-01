import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import Header from "./layouts/Header/Header";
import Page from "./layouts/Page/Page";
import AsideNavi from "./layouts/AsideNavi/AsideNavi";
import BurgerNavi from "./layouts/BurgerNavi/BurgerNavi";

import "./styles/App.css";

function App() {
  const [isOpened, setIsOpened] = useState(false);

  const handleToggleClick = () => setIsOpened((prevIsOpened) => !prevIsOpened);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header isOpened={isOpened} handleToggleClick={handleToggleClick} />
      <Page />
      <AsideNavi />
      <AnimatePresence>
        {isOpened && <BurgerNavi handleToggleClick={handleToggleClick} />}
      </AnimatePresence>
    </Router>
  );
}

export default App;
