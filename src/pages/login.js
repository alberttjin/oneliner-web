import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./home";
import Welcome from "./welcome";

class Login extends React.Component {
  componentDidMount = () => {
    document.title = "OneLiner";
  }
  render() {
    return (
      <Router>
        <div>
          <Link to="/home" onClick={this.forceUpdate}>Home</Link>
        </div>
      </Router>
    );
  }
}

export default Login;