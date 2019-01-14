import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

import Login from "./login";

class Welcome extends React.Component {
  componentDidMount = () => {
    document.title = "OneLiner";
  }
  render() {
    return (
      <Router>
        <div>
          <Link to="/login" onClick={this.forceUpdate}>Login</Link>
        </div>
      </Router>
    );
  }
}

export default Welcome;