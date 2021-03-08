import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import HomePage from "../../pages/HomePage/HomePage";
import AboutPage from "../../pages/AboutPage/AboutPage";
import WorksPage from "../../pages/WorksPage/WorksPage";
import ContactPage from "../../pages/ContactPage/ContactPage";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";

const Page = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Switch location={location} key={location.key}>
        <Route path={"/"} exact component={HomePage} />
        <Route path={"/about"} component={AboutPage} />
        <Route path={"/works"} component={WorksPage} />
        <Route path={"/contact"} component={ContactPage} />
        <Route component={ErrorPage} />
      </Switch>
    </AnimatePresence>
  );
};

export default Page;
