import React from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";

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

const SubmitStyled = styled.button`
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

class SignUp extends React.Component {
  state = {
    username: "",
    email: "",
    password: "",
    token: "",
  }
  componentWillMount = () => {
    document.addEventListener('mousedown', this.handleClick, false);
    document.addEventListener('keydown', this.handleEnter);
  }

  componentWillUnmount = () => {
    document.removeEventListener('mousedown', this.handleClick, false);
    document.removeEventListener('keydown', this.handleEnter);
  }

  handleClick = (e) => {
    if (!this.node.contains(e.target)) {
      this.props.handleClose();
    }
  }

  handleEmailInput = (event) => {
    this.setState({email: event.target.value});
  }

  handleUsernameInput = (event) => {
    this.setState({username: event.target.value});
  }

  handlePasswordInput = (event) => {
    this.setState({password: event.target.value});
  }

  handleSubmit = async() => {
    const token = await login(this.state.username, this.state.password);
    this.setState({token: token});
  }

  handleEnter = (event) => {
    if (event.key === 'Enter') {
      this.handleSubmit();
    }
  }

  render() {
    const { show, handleClose } = this.props;
    const show_hide = show ? {'display': 'block'} : {'display': 'none'}
    if (this.state.token) {
      return <Redirect to='/home' />
    } else {
      return (
        <Modal style={show_hide}>
          <ModalMain ref={node => this.node = node}>
            <RowWrapper>
              <Title>Sign Up!</Title>
              <CloseStyled onClick={handleClose}>X</CloseStyled>
            </RowWrapper>
            <ColumnWrapper>
              <InputStyled placeholder={"Email"} onChange={this.handleEmailInput}/>
              <InputStyled placeholder={"Username"} onChange={this.handleUsernameInput}/>
              <InputStyled type="password" placeholder={"Password"} onChange={this.handlePasswordInput}/>
              <SubmitStyled type="button" onClick={this.handleSubmit}>
              Sign Up!
              </SubmitStyled>
            </ColumnWrapper>
          </ModalMain>
        </Modal>
      );
    }
  }
}

export default SignUp;