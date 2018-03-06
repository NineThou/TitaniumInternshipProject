import React from 'react';

const Login = () => (
  <div>
    <form className="ui form">
      <div className="field">
        <label>E-mail</label>
        <input placeholder="E-mail" type="email"/>
      </div>
      <div className="field">
        <label>Password</label>
        <input placeholder="Password" type="password" />
      </div>
      <div className="field">
        <label>Repeat password</label>
        <input placeholder="Repeat password" type="password"/>
      </div>
      <button type="submit" className="ui button">Submit</button>
    </form>
  </div>
)

export default Login;