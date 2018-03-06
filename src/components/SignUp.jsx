import React from 'react';


const SignUp = () => (
  <div>
    <form className="ui form">
      <div className="field">
        <label htmlFor="email">
          <input placeholder="E-mail" id="email" type="email" />
        E-mail
        </label>
      </div>
      <div className="field">
        <label htmlFor="password">
          <input placeholder="Password" type="password" />
        Password
        </label>
      </div>
      <div className="field">
        <label htmlFor="password">
          <input placeholder="Repeat password" type="password" id="password" />
        Repeat password
        </label>
      </div>
      <button type="submit" className="ui button">Submit</button>
    </form>
  </div>
);

export default SignUp;
