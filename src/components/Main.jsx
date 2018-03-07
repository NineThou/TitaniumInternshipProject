import React from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const Main = () => (
  <Menu inverted>
    <NavLink to="/home">
      <Menu.Item
        name="home"
        activeclassname="active"
      />
    </NavLink>
    <NavLink to="/login">
      <Menu.Item
        name="Login"
        activeclassname="active"
      />
    </NavLink>
    <NavLink to="/signup">
      <Menu.Item
        name="SignUp"
        activeclassname="active"
      />
    </NavLink>
    <NavLink to="/events">
      <Menu.Item
        name="Events"
        activeclassname="active"
      />
    </NavLink>
    <NavLink to="/posts">
      <Menu.Item
        name="Posts"
        activeClassName="active"
      />
    </NavLink>
    <NavLink to="/users">
      <Menu.Item
        name="Users"
        activeClassName="active"
      />
    </NavLink>
  </Menu>
);


export default Main;
