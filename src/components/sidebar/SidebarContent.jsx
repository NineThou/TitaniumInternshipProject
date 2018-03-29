import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { FormattedMessage } from 'react-intl';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'react-emotion';
import LanguageChange from '../LanguageChange';
import { black, grey, lightBlue } from '../../styles/colors';
import { login, logout, isLoggedIn } from '../../utils/AuthService';

const navLinkStyle = css`
  padding: 1em;
  font-size: 20px;
  display: block;
`;

const activeNav = css`
  background-color: ${lightBlue};
  color: white;
  :hover {
    color: white;
    background-color: ${lightBlue} !important;
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
    {(isLoggedIn()) ?
      (<NavLink to="/" className={`${inactive} ${navLinkStyle}`} onClick={() => logout()}>
        <i className="reply outline icon" />
        <FormattedMessage id="sidebar.out" />
      </NavLink>) //eslint-disable-line
      : (<NavLink to="/" className={`${inactive} ${navLinkStyle}`} onClick={() => login()}>
        <i className="user outline icon" />
        <FormattedMessage id="sidebar.in" />
      </NavLink>) //eslint-disable-line
    }
    <NavLink
      className={`${inactive} ${navLinkStyle}`}
      to="/events"
      activeClassName={activeNav}
    >
      <i className="calendar alternate outline icon" />
      <FormattedMessage id="sidebar.events" />
    </NavLink>
    <NavLink
      className={`${inactive} ${navLinkStyle}`}
      to="/posts"
      activeClassName={activeNav}
    >
      <i className="archive icon" />
      <FormattedMessage id="sidebar.posts" />
    </NavLink>
    {
      (isLoggedIn()) ? <NavLink
        className={`${inactive} ${navLinkStyle}`}
        to="/users"
        activeClassName={activeNav}
      >
        <i className="address book outline icon" />
        <FormattedMessage id="sidebar.users" />
      </NavLink> : null //eslint-disable-line
    }
    <LanguageChange />
  </CustomSidebar>
);

export default SidebarContent;
