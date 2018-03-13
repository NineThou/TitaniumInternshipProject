import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'react-emotion';
import { black, grey, blue } from '../../styles/colors';

const navLinkStyle = css`
  padding: 1em;
  font-size: 20px;
  display: block;
`;

const activeNav = css`
  background-color: ${blue};
  color: white;
  :hover {
    color: white;
    background-color: ${blue} !important;
  }
`;

const inactive = css`
  color: white;
  :hover {
    background-color: ${grey};
    color: white;
  }
  transition: all 0.3s ease;
  text-align: left;
`;

const CustomSidebar = styled(Menu)`
  height: 100%;
  width: 100% !important;
  &.ui.menu {
    background: ${black};
  }
`;

const icon = css`
  text-align: center;
`;

const SidebarContent = () => (
  <CustomSidebar vertical>
    <NavLink
      className={`${inactive} ${navLinkStyle} ${icon}`}
      to="/"
    >
      <Icon name="home" size="large" />
    </NavLink>
    <NavLink
      className={`${inactive} ${navLinkStyle}`}
      to="/login"
      activeClassName={activeNav}
    >
      <i className="user outline icon" />
      Login
    </NavLink>
    <NavLink
      className={`${inactive} ${navLinkStyle}`}
      to="/signup"
      activeClassName={activeNav}
    >
      <i className="clipboard outline icon" />
      SignUp
    </NavLink>
    <NavLink
      className={`${inactive} ${navLinkStyle}`}
      to="/users"
      activeClassName={activeNav}
    >
      <i className="address book outline icon" />
      Users
    </NavLink>
    <NavLink
      className={`${inactive} ${navLinkStyle}`}
      to="/events"
      activeClassName={activeNav}
    >
      <i className="calendar alternate outline icon" />
      Events
    </NavLink>
    <NavLink
      className={`${inactive} ${navLinkStyle}`}
      to="/posts"
      activeClassName={activeNav}
    >
      <i className="archive icon" />
      Posts
    </NavLink>

  </CustomSidebar>
);

export default SidebarContent;
