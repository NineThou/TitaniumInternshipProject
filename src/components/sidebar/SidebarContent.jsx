import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'react-emotion';
import { black, grey, brightred } from '../../styles/colors';

const navLinkStyle = css`
  padding: 1em;
  font-size: 20px;
  display: block;
`;

const activeNav = css`
  background-color: ${brightred};
  color: white;
  :hover {
    color: white;
    background-color: ${brightred} !important;
  }
`;

const inactive = css`
  color: white;
  :hover {
    background-color: ${grey};
    color: white;
  }
  transition: all 0.3s ease;
  text-align: center;
`;

const CustomSidebar = styled(Menu)`
  height: 100%;
  width: 100% !important;
  &.ui.menu {
    background: ${black};
  }
`;

const SidebarContent = () => (
  <CustomSidebar vertical>
    <NavLink
      className={`${inactive} ${navLinkStyle}`}
      to="/"
    >
      <Icon name="home" size="large" />
    </NavLink>
    <NavLink
      className={`${inactive} ${navLinkStyle}`}
      to="/login"
      activeClassName={activeNav}
    >
      Login
    </NavLink>
    <NavLink
      className={`${inactive} ${navLinkStyle}`}
      to="/signup"
      activeClassName={activeNav}
    >
      SignUp
    </NavLink>
    <NavLink
      className={`${inactive} ${navLinkStyle}`}
      to="/users"
      activeClassName={activeNav}
    >
      Users
    </NavLink>
    <NavLink
      className={`${inactive} ${navLinkStyle}`}
      to="/events"
      activeClassName={activeNav}
    >
      Events
    </NavLink>
    <NavLink
      className={`${inactive} ${navLinkStyle}`}
      to="/posts"
      activeClassName={activeNav}
    >
      Posts
    </NavLink>

  </CustomSidebar>
);

export default SidebarContent;
