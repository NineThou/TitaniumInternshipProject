// modules
import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import styled, { css } from 'react-emotion';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

// colors
import { grey } from '../styles/colors';

const SignUpWrap = styled('div')`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 280px;
  margin: 0 auto;
  position: relative;
  top: 50px;
  color: black;
  background-color: #B2BABB;
  padding-top: 15px;
  -webkit-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.75);
`;

const Link = css`
  margin-left: 15px;
  color: white !important;
  :hover {
    color: lightgray !important;
  }
`;

const ContainerWrap = styled('div')`
  margin: 0 auto;
`;

const MainWrap = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled('h1')`
  position: relative;
  bottom: 10px;
  margin: 0 auto;
  color: white;
`;

const colors = css`
  background-color: ${grey} !important;
`;

const formSize = css`
  width: 320px; 
`;

const SignUp = () => (
  <MainWrap>
    <SignUpWrap className={colors}>
      <Title>
        <FormattedMessage id="signuppage.signup" />
      </Title>
      <ContainerWrap>
        <Form size="large" widths="equal">
          <Form.Field className={formSize}>
            <input placeholder="E-mail" id="email" type="email" />
          </Form.Field>
          <Form.Field className={formSize}>
            <input placeholder="Password" type="password" />
          </Form.Field>
          <Form.Field className={formSize}>
            <input placeholder="Repeat password" type="password" id="password" />
          </Form.Field>
          <span className={formSize}>
            <Button type="submit">
              <FormattedMessage id="signuppage.submit" />
            </Button>
            <NavLink className={Link} to="/login">
              <FormattedMessage id="signuppage.account" />
            </NavLink>
          </span>
        </Form>
      </ContainerWrap>
    </SignUpWrap>
  </MainWrap>
);


export default SignUp;

