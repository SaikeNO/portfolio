import React from "react";

import { StyledLink } from "./style";

const AsideNaviItem = ({ path, exact, name }) => {
  return (
    <li>
      <StyledLink to={path} exact={exact}>
        {" "}
        {name}
      </StyledLink>
    </li>
  );
};

export default AsideNaviItem;
