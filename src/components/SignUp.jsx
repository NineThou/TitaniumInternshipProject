// modules
import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import styled, { css } from 'react-emotion';
import { NavLink } from 'react-router-dom';

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
          <span>
            <Button type="submit">Submit</Button>
            <NavLink className={Link} to="/login">Already have an account?</NavLink>
          </span>
        </Form>
      </ContainerWrap>
    </SignUpWrap>
  </MainWrap>
);


export default SignUp;

