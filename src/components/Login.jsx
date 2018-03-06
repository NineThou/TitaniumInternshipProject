import React from 'react';
import { Input, Button, Form } from 'semantic-ui-react'; 
import styled, { css } from 'react-emotion';

const MainWrap = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const LoginWrap = styled('Form')`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 210px;
  margin: 0 auto;
  position: relative;
  top: 50px;
  color: black;
  border: 3px solid black;
  border-radius: 8px;
  background-color: #839192;
`
const Title = styled('h1')`
  margin: 0 auto;
`

const input = css`
  margin: 10px;
`
const button = css`
  position: relative;
  left: 10px;
  top: 10px;
`

const Login = () => (
  <MainWrap>
    <Title>Login Page</Title>
    <LoginWrap className='formWrap'>
      <Form.Group width='equal'>
        <Form.Field fluid control={Input} label='Login' className={input}  placeholder='enter your login' />
        <Form.Field fluid control={Input} label='Password' className={input} placeholder='enter your password' />
        <Form.Field control={Button} inverted color='grey' className={button} content='Login'/>
      </Form.Group>
    </LoginWrap>
  </MainWrap>
)

export default Login;