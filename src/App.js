import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./layouts/Header/Header";
import Page from "./layouts/Page/Page";
import Navigation from "./layouts/Navigation/Navigation";

import "./styles/App.css";

function App() {
  return (
    <Router>
      <Header />
      <header></header>
      {/* <Page /> */}
      {/* <Navigation /> */}
    </Router>
  );
}

export default App;
