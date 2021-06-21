import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Layouts/Header";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/about" component={AboutPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
