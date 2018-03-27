// modules
import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'react-emotion';
import { Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { compose, withState } from 'recompose';
import decode from 'jwt-decode';

// colors
import { black } from '../../styles/colors';

// clock
import Clock from './Clock';

const Head = styled('div')` 
  z-index: 2;
  position: fixed;
  background-color: ${black};
  height: 70px;
  width: 100%;
  overflow: hidden;
  display: grid;
  grid-template-areas: "name clock";
  grid-template-columns: 2fr 1fr;
  -webkit-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.75);
  font-weight: 700;
  font-size: 30px;
  @media(max-width: 1068px) {
    font-size: 25px !important;
  }
  @media(max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 800px) {
    font-size: 20px;
    grid-template-areas: "hiddenhome clock";
  }
  margin: 0;
`;


const ClockArea = styled('div')`
  grid-area: clock;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 200px;
`;

const Name = styled('div')`
  grid-area: name;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: 800px) {
    display: none;
  }
`;

const HomeLink = styled('div')`
  display: none;
  @media (max-width: 800px) {
    justify-content: flex-start;
    display: flex;
    grid-area: hiddenhome;
  }
`;

const iconpos = css`
  padding-top: 25px;
  padding-left: 20px;
  color: white;
`;

const Header = ({ user }) => (
  <Head>
    <Name>
      Hi, {user && user.nickname ? `${user.nickname}!` : 'anonymous!'}
    </Name>
    <HomeLink>
      <Link to="/">
        <Icon className={iconpos} name="home" size="large" />
      </Link>
    </HomeLink>
    <ClockArea>
      <Clock />
    </ClockArea>
  </Head>
);

Header.defaultProps = {
  user: PropTypes.object,
};

Header.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
};

const user = localStorage.getItem('id_token') ? decode(localStorage.getItem('id_token')) : '';

export default compose(withState('user', 'getUserInfo', user))(Header);

