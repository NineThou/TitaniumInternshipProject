import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'react-emotion';

const navLinkStyle = css`
  padding: 1em;
  font-size: 20px;
  display: block;
`;

const activeNav = css`
  background: hotpink;
  color: crimson;

  :hover {
    color: crimson;
  }
`;

const CustomSidebar = styled(Menu)`
  height: 100%;
  &.ui.menu {
    background: lightcoral;
  }
`;

const SidebarContent = () => (
  <CustomSidebar vertical>
    <NavLink
      className={navLinkStyle}
      to="/"
    >
      <Icon name="home" size="large" />
    </NavLink>
    <NavLink
      className={navLinkStyle}
      to="/login"
      activeClassName={activeNav}
    >
      Login
    </NavLink>

  </CustomSidebar>
);

export default SidebarContent;
