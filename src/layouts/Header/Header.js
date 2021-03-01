import React from "react";

import { StyledHeader, StyledButton, LinkElement, StyledBurger } from "./style";

const Header = ({ handleToggleClick, isOpened }) => {
  return (
    <StyledHeader>
      <nav>
        <LinkElement exact to={"/"}>
          lengiewicz
        </LinkElement>
      </nav>
      <StyledButton onClick={handleToggleClick} isOpened={isOpened}>
        <StyledBurger />
        <StyledBurger />
        <StyledBurger />
      </StyledButton>
    </StyledHeader>
  );
};

export default Header;
