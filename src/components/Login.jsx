import React from 'react';
import { Input, Button, Form } from 'semantic-ui-react';
import styled, { css } from 'react-emotion';
import { grey, purple } from '../styles/colors';


const MainWrap = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// error below
const LoginWrap = styled('Form')`
  display: flex;
  flex-direction: column;
<<<<<<< HEAD
  width: 380px;
  height: 220px;
=======
  width: 350px;
  height: 210px;
>>>>>>> 5c73dd43d8c74b4d5da04fa31a4ea1adae36513f
  margin: 0 auto;
  position: relative;
  top: 50px;
  color: black;
  border: 3px solid #586180;
  border-radius: 5px;
  background-color: #B2BABB;
`;
const Title = styled('h1')`
  margin: 0 auto;
`;

const input = css`
  margin: 10px;
`;
const button = css`
  position: relative;
  left: 10px;
  top: 10px;
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
      <Form.Group width="equal">
        <Form.Field
          type="email"
          fluid
          control={Input}
          label="Login"
          className={input}
          placeholder="enter your login"
        />
        <Form.Field fluid control={Input} label="Password" className={input} placeholder="enter your password" />
        <Form.Field control={Button} className={button} content="Login" />
      </Form.Group>
    </LoginWrap>
  </MainWrap>
);

export default Login;
