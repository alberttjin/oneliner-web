import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

import Home from "./pages/home"
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Welcome from "./pages/welcome";

import "./index.css";

class App extends React.Component {
  componentDidMount = () => {
    document.title = "OneLiner";
  }
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Welcome} />
          <Route path="/home" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;