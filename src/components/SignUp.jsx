// modules
import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import styled, { css } from 'react-emotion';

// colors
import { grey, purple } from '../styles/colors';

const SignUpWrap = styled('div')`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 280px;
  margin: 0 auto;
  position: relative;
  top: 50px;
  color: black;
  border: 3px solid #586180;
  border-radius: 5px;
  background-color: #B2BABB;
  padding-top: 5px;
`;

// error below
const ContainerWrap = styled('Container')`
  margin: 0 auto;
`;

const MainWrap = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled('h1')`
  margin: 0 auto;
`;

const colors = css`
  background-color: ${grey} !important;
  border: 3px solid ${purple};
`;

const white = css`
  color: white !important;
`;

const SignUp = () => (
  <MainWrap>
    <Title>Registration</Title>
    <SignUpWrap className={colors}>
      <ContainerWrap>
        <Form size="large" widths="equal">
          <Form.Field>
            <label htmlFor="email" className={white}>
            E-mail
              <input placeholder="E-mail" id="email" type="email" />
            </label>
          </Form.Field>
          <Form.Field>
            <label htmlFor="password" className={white}>
            Password
              <input placeholder="Password" type="password" />
            </label>
          </Form.Field>
          <Form.Field>
            <label htmlFor="password" className={white}>
            Repeat password
              <input placeholder="Repeat password" type="password" id="password" />
            </label>
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </ContainerWrap>
    </SignUpWrap>
  </MainWrap>
);


export default SignUp;

