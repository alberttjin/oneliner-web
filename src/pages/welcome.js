import React from "react";
import styled from "styled-components";

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

export default Welcome;