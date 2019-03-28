import React from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import { MDBBtn, MDBIcon} from 'mdbreact';

import Header from "../components/header";
import Todo from "../components/todo";
import Greeting from "../components/greeting";
import Background from "../assets/images/background.jpeg";
import Input from "../components/input";
import {checkCookie} from "../utils/util"
import * as consts from "../utils/constants"
import Info from "../components/info";

import "../index.css";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${Background});
  background-size: 100%;
  ::-webkit-scrollbar {display:none;}
`

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-grow: 1;
  margin-bottom: 20px;
`

const SubmitStyled = styled.button`
  position: absolute;
  border: none;
  background: transparent;
  outline: none;
  cursor: pointer;
  color: white;
  &:hover {
    color: #72c9ff;
  }
  &:focus {
    outline: none;
  }
  height: 35px;
  padding: 0;
  right: 30%;
  top: 30%;
`

const TokenContext = React.createContext({});
const TokenProvider = TokenContext.Provider;
const TokenConsumer = TokenContext.Consumer;

class Home extends React.Component {
  state = {
    tasks: [],
    events: [],
    showInfo: false,
  }

  showInfo = () => {
    this.setState({
      showInfo: true,
    });
  }

  hideInfo = () => {
    this.setState({
      showInfo: false,
    });
  }

  render() {
    if (checkCookie(consts.ACCESS_TOKEN_KEY) === -1) {
      return <Redirect to={{pathname: '/'}}/>;
    } else {
      return (
        <Container>
          <TokenProvider value={{token: this.props.location.state.token}}>
            <Info show={this.state.showInfo} handleClose={this.hideInfo}></Info>
            <Header />
            <Greeting />
            <InputWrapper>
              <Input token={this.props.location.state.token}/>
              <SubmitStyled onClick={this.showInfo}>
                <MDBIcon icon="info-circle" className="mr-3" size="lg"/>
              </SubmitStyled>
            </InputWrapper>
            <Wrapper>
              <Todo title="Tasks" token={this.props.location.state.token}/>
              <Todo title="Events" token={this.props.location.state.token}/>
            </Wrapper>
          </TokenProvider>
        </Container>
      );
    }
  }
}

export {
  Home,
  TokenProvider,
  TokenConsumer
}