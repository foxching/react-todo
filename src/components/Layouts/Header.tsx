import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <div className="header">
    <h1>Simple Todo</h1>
    <NavLink to="/" activeClassName="is-active" exact={true} className="link">
      Home|
    </NavLink>
    <NavLink to="/about" activeClassName="is-active" className="link">
      About
    </NavLink>
  </div>
);

export default Header;
