import React from "react";
import styled from "styled-components";
import { MdCheck } from 'react-icons/md';
import { IconContext } from 'react-icons';

import { TokenConsumer } from "../pages/home";

const ListElem = styled.p`
  font-family: 'Source Sans Pro', sans-serif;
  margin: 0;
  padding: 0;
  margin-left: 5px;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid rgba(0, 0, 0, .4);
  width: 100%;
  margin: 0;
  padding-top: 10px;
  padding-bottom: 10px;
  &:hover {
    background: #e0e0e0;
  }
  justify-content: space-between;
  align-items: center;
`

const Check = styled.button`
  border: none;
  outline: none;
  background-color: inherit;
  color: green;
  &:hover {
    opacity: 0.5;
  }
  &:focus {
    outline: none;
  }
  cursor: pointer;
  width: 30px;
  height: 25px;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const Time = styled.p`
  color: grey;
  font-size: 12px;
  padding: 0;
  margin: 0;
  padding-right: 5px;
`

const Overdue = styled.p`
  font-size: 12px;
  color: red;
  padding: 0;
  margin: 0;
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
    const { id, name, time, deleteTodo, overdue } = this.props;
    const show_overdue = overdue ? <Overdue>Overdue</Overdue> : null
    return (
      <TokenConsumer>
        {({ token }) => (
          <Container
          onMouseOverCapture={this.handleHover}
          onMouseLeave={this.handleNotHover}
          >
            <Wrapper>
              <Check onClick={() => deleteTodo(id, token)}>
                {this.state.hovered ?
                  <IconContext.Provider value={{size: 20}}>
                    <MdCheck />
                  </IconContext.Provider> :
                  null
                }
              </Check>
              <ListElem>{name}</ListElem>
            </Wrapper>
            <Wrapper>{show_overdue}</Wrapper>
            <Wrapper>
              <Time>{time}</Time>
            </Wrapper>
          </Container>
        )}
      </TokenConsumer>
    );
  }
}

export default TaskEvent;