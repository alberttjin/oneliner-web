import React from "react";
import styled from "styled-components";
import { MdKeyboardArrowRight } from 'react-icons/md';
import { IconContext } from 'react-icons';

import { addTask, addEvent } from "../utils/api";
import { parse } from "../utils/parser";
import swal from 'sweetalert';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  padding: 0px;
  margin-top: 25px;
  margin-bottom: 25px;
`

const InputStyled = styled.input`
  border-radius: 5px 0px 0px 5px;
  -webkit-border-radius: 5px 0px 0px 5px;
  width: 30%;
  height: 35px;
  border: none;
  outline: none;
  box-shadow: 15px 15px 20px 0 rgba(0, 0, 0, .4);
  padding-left: 10px;
  font: .75em/1em Arial, Helvetica, sans-serif;
`

const SubmitStyled = styled.button`
  border: none;
  box-shadow: 15px 15px 20px 0 rgba(0, 0, 0, .4);
  font: 1em/1.25em Arial, Helvetica, sans-serif;
  border-radius: 0px 5px 5px 0px;
  background: white;
  outline: none;
  -webkit-border-radius: 0px 5px 5px 0px;
  color: grey;
  cursor: pointer;
  &:hover {
    color: #72c9ff;
  }
  &:focus {
    outline: none;
  }
  height: 35px;
  padding: 0;
  margin: 0;
  padding-right: 5px;
`

class Input extends React.Component {
  state = {
    value: '',
  }

  componentWillMount = () => {
    document.addEventListener('keydown', this.handleEnter);
  }

  componentWillUnmount = () => {
    document.removeEventListener('keydown', this.handleEnter);
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (token, event) => {
    const to_send = parse(this.state.value);
    let success;
    if (to_send['is_event']){
      success = addEvent(token, to_send);
    } else {
      success = addTask(token, to_send);
    }
    if (success.ok) {
      window.location.reload();
    } else {
      swal({
        title: "Oops!",
        text: "We could not parse the query you entered. Try again!",
        icon: "error",
      });
    }
  }

  render() {
    const placeholder = "Try \"math howework due in 2 days\""
    return (
      <Container>
        <InputStyled type="text" placeholder = {placeholder} onChange={this.handleChange} />
        <SubmitStyled onClick={() => this.handleSubmit(this.props.token)}>
          <IconContext.Provider value={{size: 20}}>
            <MdKeyboardArrowRight />
          </IconContext.Provider>
        </SubmitStyled>
      </Container>
    );
  }
}

export default Input;