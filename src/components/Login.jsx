import React from 'react';

const Login = () => (
	  <div>
	    <form class="ui form">
	      <div class="field">
	        <label>E-mail</label>
	        <input placeholder="E-mail" type="email"/>
	      </div>
	      <div class="field">
	        <label>Password</label>
	        <input placeholder="Password" type="password" />
	      </div>
	      <div class="field">
	        <label>Repeat password</label>
	        <input placeholder="Repeat password" type="password"/>
	    </div>
	    <button type="submit" class="ui button">Submit</button>
	    </form>
	  </div>
)

export default Login;