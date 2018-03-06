import React from 'react';
import { Button, Form } from 'semantic-ui-react';

const SignUp = () => (
  <Form size="large" widths="equal">
    <Form.Field width={5}>
      <label htmlFor="email">
      E-mail
        <input placeholder="E-mail" id="email" type="email" />
      </label>
    </Form.Field>
    <Form.Field width={5}>
      <label htmlFor="password">
      Password
        <input placeholder="Password" type="password" />
      </label>
    </Form.Field>
    <Form.Field width={5}>
      <label htmlFor="password">
      Repeat password
        <input placeholder="Repeat password" type="password" id="password" />
      </label>
    </Form.Field>
    <Button type="submit">Submit</Button>
  </Form>
);

export default SignUp;
