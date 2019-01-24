import React from "react";
// import styled from "styled-components";
import { Redirect } from "react-router-dom";
import {getCookie, checkCookie} from "../utils/util";
import * as consts from "../utils/constants"

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

  render() {
    if (checkCookie(consts.ACCESS_TOKEN_KEY) !== -1) {
      return <Redirect to={{pathname: '/home', state: {token: getCookie(consts.ACCESS_TOKEN_KEY)}}}/>;
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