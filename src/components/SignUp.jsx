import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import styled from 'react-emotion';

const SignUpWrap = styled('div')`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const ContainerWrap = styled('Container')`
  margin: 0 auto;
`;

const SignUp = () => (
  <SignUpWrap>
    <ContainerWrap>
      <Form size="large" widths="equal">
        <Form.Field>
          <label htmlFor="email">
          E-mail
            <input placeholder="E-mail" id="email" type="email" />
          </label>
        </Form.Field>
        <Form.Field>
          <label htmlFor="password">
          Password
            <input placeholder="Password" type="password" />
          </label>
        </Form.Field>
        <Form.Field>
          <label htmlFor="password">
          Repeat password
            <input placeholder="Repeat password" type="password" id="password" />
          </label>
        </Form.Field>
        <Button inverted color="grey" type="submit">Submit</Button>
      </Form>
    </ContainerWrap>
  </SignUpWrap>
);


export default SignUp;

