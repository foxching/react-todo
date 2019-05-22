import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div style={headerStyle}>
    <h1>Simple Todo</h1>
    <NavLink to="/" activeClassName="is-active" style={LinkStyle} exact={true}>
      Home|
    </NavLink>
    <NavLink to="/about" activeClassName="is-active" style={LinkStyle}>
      About
    </NavLink>
  </div>
);

const headerStyle = {
  background: '#333',
  color: '#fff',
  padding: '10px',
  textAlign: 'center'
};

const LinkStyle = {
  color: '#fff',
  textDecoration: 'none'
};

export default Header;
