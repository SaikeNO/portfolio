import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "../../pages/HomePage/HomePage";
import AboutPage from "../../pages/AboutPage/AboutPage";
import WorksPage from "../../pages/WorksPage/WorksPage";
import ContactPage from "../../pages/ContactPage/ContactPage";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";

const Page = () => {
  return (
    <Switch>
      <Route path={"/"} exact component={HomePage} />
      <Route path={"/about"} component={AboutPage} />
      <Route path={"/works"} component={WorksPage} />
      <Route path={"/contact"} component={ContactPage} />
      <Route component={ErrorPage} />
    </Switch>
  );
};

export default Page;
