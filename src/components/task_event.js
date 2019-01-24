import React from "react";
import styled from "styled-components";
import { MdCheck } from 'react-icons/md';
import { IconContext } from 'react-icons';

const ListElem = styled.p`
  font-family: 'Source Sans Pro', sans-serif;
  margin: 0;
  padding: 0;
  margin-left: 5px;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  border-top: 1px solid rgba(0, 0, 0, .4);
  width: 100%;
  margin: 0;
  padding-top: 10px;
  padding-bottom: 10px;
  &:hover {
    background: #e0e0e0;
  }
`

const Check = styled.button`
  border: none;
  outline: none;
  background-color: inherit;
  color: green;
  &:hover {
    color: blue;
  }
  cursor: pointer;
  width: 30px;
  height: 25px;
`


class TaskEvent extends React.Component {
  state = {
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
  
  render() {
    const { name } = this.props;
    const check = this.state.hovered ? 
      <Check>
        <IconContext.Provider value={{size: 20}}>
          <MdCheck />
        </IconContext.Provider>
      </Check> :
      <Check></Check>
    return (
      <Container
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleNotHover}
      >
        {check}
        <ListElem>{name}</ListElem>
      </Container>
    );
  }
}

export default TaskEvent;