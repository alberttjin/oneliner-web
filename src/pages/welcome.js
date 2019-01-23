import React from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";

import Login from "./login";
import SignUp from "./signup";


class Welcome extends React.Component {
  state = {
    showLogin: false,
    showSignUp: false,
  };

  componentDidMount = () => {
    document.title = "OneLiner";
  }

  showLogin = () => {
    this.setState({
      showLogin: true,
    });
  }
 
  hideLogin = () => {
    this.setState({
      showLogin: false,
    });
  }

  showSignUp = () => {
    this.setState({
      showSignUp: true,
    });
  }
 
  hideSignUp = () => {
    this.setState({
      showSignUp: false,
    });
  }

  checkCookie = (name) => {
    var keyIndex = document.cookie.indexOf("; " + name + "=");
    if (keyIndex === -1) {
      return false;
    }
    return true;
  }

  getCookie = (name) => {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
  }

  render() {
    if (this.checkCookie("access_token")) {
      return <Redirect to={{pathname: '/home', state: {token: this.getCookie("access_token")}}}/>;
    } else {
      return (
        <div>
          <button onClick={this.showLogin}>
            Login
          </button>
          <Login show={this.state.showLogin} handleClose={this.hideLogin}/>
          <button onClick={this.showSignUp}>
            SignUp
          </button>
          <SignUp show={this.state.showSignUp} handleClose={this.hideSignUp}/>
        </div>
      );
    }
    
  }
}

export default Welcome;