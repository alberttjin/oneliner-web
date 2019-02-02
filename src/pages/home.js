import React from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";

import Header from "../components/header";
import Todo from "../components/todo";
import Greeting from "../components/greeting";
import Background from "../assets/images/background.jpeg";
import Input from "../components/input";
import {checkCookie} from "../utils/util"
import * as consts from "../utils/constants"


import "../index.css";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-image: url(${Background});
  background-size: cover;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-grow: 1;
  margin-bottom: 20px;
`
const TokenContext = React.createContext({});
const TokenProvider = TokenContext.Provider;
const TokenConsumer = TokenContext.Consumer;

class Home extends React.Component {
  state = {
    tasks: [],
    events: [],
  }

  render() {
    if (checkCookie(consts.ACCESS_TOKEN_KEY) === -1) {
      return <Redirect to={{pathname: '/'}}/>;
    } else {
      return (
        <TokenProvider value={{token: this.props.location.state.token}}>
          <Container>
            <Header />
            <Greeting />
            <Input />
            <Wrapper>
              <Todo title="Tasks" token={this.props.location.state.token}/>
              <Todo title="Events" token={this.props.location.state.token}/>
            </Wrapper>
          </Container>
        </TokenProvider>
      );
    }
  }
}

export {
  Home,
  TokenProvider,
  TokenConsumer
}