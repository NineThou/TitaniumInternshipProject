// modules
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react';
import styled, { css } from 'react-emotion';

// colors
import { grey, purple } from '../styles/colors';

const MainWrap = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginWrap = styled('div')`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 210px;
  margin: 0 auto;
  position: relative;
  top: 50px;
  color: black;
  border: 3px solid #586180;
  border-radius: 5px;
  background-color: #B2BABB;
  padding-top: 5px;
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
  top: 20px;
  margin: 0 auto;
`;

const ContainerWrap = styled('div')`
  margin: 0 auto;
`;

const white = css`
  color: white !important;
`;

const colors = css`
  color: white !important;
  background-color: ${grey} !important;
  border: 3px solid ${purple};
`;

const Login = () => (
  <MainWrap>
    <Title>Login Page</Title>
    <LoginWrap className={`formWrap ${colors}`}>
      <ContainerWrap>
        <Form size="large" width="equal">
          <Form.Field className={formSize}>
            <label htmlFor="email" className={white}>
              E-mail
              <input placeholder="Email" id="email" type="email" />
            </label>
          </Form.Field>
          <Form.Field className={formSize}>
            <label htmlFor="password" className={white}>
            Password
              <input placeholder="Password" type="password" />
            </label>
          </Form.Field>
          <span>
            <Button type="submit">Submit</Button>
            <NavLink className={LinkWrap} to="/signup">Don&apos;t have an account?</NavLink>
          </span>
        </Form>
      </ContainerWrap>
    </LoginWrap>
  </MainWrap>
);

export default Login;
