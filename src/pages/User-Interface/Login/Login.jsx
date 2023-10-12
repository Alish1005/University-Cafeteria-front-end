import React from "react";
import "./Login.css";
import GoogleIcon from '@mui/icons-material/Google';
function Login (){
    return (
      <div className="LoginContainer">
      <div className="login-box">
      <h2>Login</h2>
      <form>
        <div className="user-box">
          <input type="text" name="" required=""/>
          <label>Username</label>
        </div>
        <div className="user-box">
          <input type="password" name="" required=""/>
          <label>Password</label>
        </div>
        <div className="loginRemember">
        <input type="checkbox" className="loginCheckbox" id="Remember"  name="Remember"/><label className="loginCheckboxlabel" htmlFor="Remember">Remember Me</label><br />
        </div>
        <a href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </a>
      </form>
    </div>
    <a className="loginwithgoogle" href=""> <span><GoogleIcon/> Login or SignUp with Google</span></a>
    </div>
    );
  }
export default Login;
