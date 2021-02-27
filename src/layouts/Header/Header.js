import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import BurgerNavi from "./BurgerNavi/BurgerNavi";

import { AnimatePresence } from "framer-motion";

import {
  HeaderElement,
  ButtonElement,
  LinkElement,
  BurgerSpanElement,
} from "./style";

const Header = () => {
  const [isOpened, setIsOpened] = useState(false);

  const handleToggleClick = () => setIsOpened((prevIsOpened) => !prevIsOpened);

  return (
    <HeaderElement>
      <nav>
        <LinkElement exact to={"/"}>
          lengiewicz
        </LinkElement>
      </nav>
      <ButtonElement onClick={handleToggleClick}>
        <BurgerSpanElement />
        <BurgerSpanElement />
        <BurgerSpanElement />
      </ButtonElement>
      <AnimatePresence>
        {isOpened && <BurgerNavi isOpened={isOpened} />}
      </AnimatePresence>
    </HeaderElement>
  );
};

export default Header;
