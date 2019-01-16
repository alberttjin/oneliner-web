import React from "react";
import styled from "styled-components";

const Container = styled.form`
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
  font: 1em/1.25em Arial, Helvetica, sans-serif;
`

const SubmitStyled = styled.input`
  border: none;
  box-shadow: 15px 15px 20px 0 rgba(0, 0, 0, .4);
  font: 1em/1.25em Arial, Helvetica, sans-serif;
  border-radius: 0px 5px 5px 0px;
  background: white;
  outline: none;
  -webkit-border-radius: 0px 5px 5px 0px;
  color: grey;
  cursor: pointer;
`

class Input extends React.Component {

  state = {
    value: '',
    hovered: false,
  }

  handleHover = () => {
    this.setState({
      hovered: true,
    });
  }

  handleNotHover = () => {
    this.setState({
      hovered: false,
    });
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    alert(this.state.value);
    event.preventDefault();
  }

  render() {
    const text_color = this.state.hovered ? '#72c9ff' : 'grey';
    const placeholder = "Try \"Math homework due in 3 days\""
    return (
      <Container onSubmit={this.handleSubmit}>
        <InputStyled type="text" placeholder = {placeholder} onChange={this.handleChange} />
        <SubmitStyled
          type="submit"
          value=">"
          onMouseEnter={this.handleHover}
          onMouseLeave={this.handleNotHover}
          style={{color: text_color}}
        />
      </Container>
    );
  }
}

export default Input;