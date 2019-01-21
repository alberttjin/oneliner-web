import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./home";
import { login } from "../utils/api";

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
`

const ModalMain = styled.section`
  position:fixed;
  background: white;
  width: 20%;
  height: auto;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  border-radius: 15px;
  padding-bottom: 20px;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
`

const InputStyled = styled.input`
  width: 80%;
  height: 35px;
  padding-left: 10px;
  font: 1em/1.25em Arial, Helvetica, sans-serif;
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: none;
  outline: none;
  border: 1px solid lightgrey;
`

const SubmitStyled = styled.input`
  font: 1em/1.25em Arial, Helvetica, sans-serif;
  background: #4accf7;
  color: white;
  width: 85%;
  height: 35px;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  &:hover {
    background: #39c2ef;
  }
`

const CloseStyled = styled.button`
  background-color: white;
  border: none;
  cursor: pointer;
  &:hover {
    color: #828080;
  }
  outline: none;
  margin-right: 15px;
  margin-top: 15px;
  width: 10px;
  height: 10px;
`
const RowWrapper = styled.div`
  display: flex;
  flex-direction: table-row;
  justify-content: space-between;
`

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.p`
  font: 1em/1.25em Arial, Helvetica, sans-serif;
  font-size: 12;
  font-weight: 600;
  padding-left: 7.5%;
`

class Login extends React.Component {
  state = {
    username: "",
    email: "",
    password: "",
  }

  componentWillMount = () => {
    console.log(login("albert", "albert"));
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount = () => {
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  handleClick = (e) => {
    if (!this.node.contains(e.target)) {
      this.props.handleClose();
    }
  }

  handleUsernameInput = (event) => {
    this.setState({username: event.target.value});
  }

  handlePasswordInput = (event) => {
    this.setState({password: event.target.value});
  }

  handleSubmit = (event) => {
    const token = login(this.state.username, this.state.password);
    console.log(token);
  }

  render() {
    const { show, handleClose } = this.props;
    const show_hide = show ? {'display': 'block'} : {'display': 'none'}
    return (
      <Modal style={show_hide}>
        <ModalMain ref={node => this.node = node}>
          <RowWrapper>
            <Title>Login</Title>
            <CloseStyled onClick={handleClose}>X</CloseStyled>
          </RowWrapper>
          <form onSubmit={this.handleSubmit}>
            <ColumnWrapper>
              <InputStyled placeholder={"Username"} onChange={this.handleUsernameInput}/>
              <InputStyled placeholder={"Password"} onChange={this.handlePasswordInput}/>
              <SubmitStyled type="submit" value="Log In"/>
            </ColumnWrapper>
          </form>
          
        </ModalMain>
      </Modal>
    );
  }
}

export default Login;