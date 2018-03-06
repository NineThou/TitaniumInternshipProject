import React, { Component } from 'react';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstPassword: '',
      secondPassword: '',
    }
  }


  render() {
    return (
      <div>
        <form class="ui form">
          <div class="field">
            <label>E-mail</label>
            <input placeholder="E-mail" type="email" />
          </div>
          <div class="field">
            <label>Password</label>
            <input placeholder="Password" type="password" ref={(input) => }/>
          </div>
          <div class="field">
            <label>Repeat password</label>
            <input placeholder="Repeat password" type="password" />
          </div>
          <button type="submit" class="ui button" role="button">Submit</button>
        </form>
      </div>
    )
  };
}

export default SignUp;