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
  border-radius: 5px;
  -webkit-border-radius: 5px;
  width: 50%;
  padding: 3px;
  border: none;
  box-shadow: 15px 15px 20px 0 rgba(0, 0, 0, .4);
  font: 1em/1.25em Arial, Helvetica, sans-serif;
`

class Input extends React.Component {
  render() {
    return (
      <Container>
        <InputStyled type="text"/>
      </Container>
    );
  }
}

export default Input;