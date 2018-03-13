// modules
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react';
import styled, { css } from 'react-emotion';

// colors
import { grey } from '../styles/colors';

const MainWrap = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginWrap = styled('div')`
  padding-top: 30px !important;
  padding-bottom: 20px !important;
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 210px;
  margin: 0 auto;
  position: relative;
  top: 50px;
  color: black;
  background-color: #B2BABB;
  padding-top: 5px;
  -webkit-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.75);
`;

const LinkWrap = css`
  margin-left: 20px;
  color: white !important;
  :hover {
    color: lightgray !important;
  }
`;

const formSize = css`
  width: 320px; 
`;

const Title = styled('h1')`
  position: relative;
  bottom: 25px;
  margin: 0 auto;
`;

const ContainerWrap = styled('div')`
  margin: 0 auto;
`;

const colors = css`
  color: white !important;
  background-color: ${grey} !important;
`;

const Login = () => (
  <MainWrap>
    <LoginWrap className={colors}>
      <Title>Login</Title>
      <ContainerWrap>
        <Form size="large" width="equal">
          <Form.Field className={formSize}>
            <input placeholder="Email" id="email" type="email" />
          </Form.Field>
          <Form.Field className={formSize}>
            <input placeholder="Password" type="password" />
          </Form.Field>
          <span>
            <Button type="submit">Sign In</Button>
            <NavLink className={LinkWrap} to="/signup">Don&apos;t have an account?</NavLink>
          </span>
        </Form>
      </ContainerWrap>
    </LoginWrap>
  </MainWrap>
);

export default Login;
