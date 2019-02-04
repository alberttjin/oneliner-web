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
    const { id, name, time, deleteTask } = this.props;
    return (
      <TokenConsumer>
        {({ token }) => (
          <Container
          onMouseOverCapture={this.handleHover}
          onMouseEnter={this.handleHover}
          onMouseLeave={this.handleNotHover}
          >
            <Wrapper>
              <Check onClick={() => deleteTask(id, token)}>
                {this.state.hovered ?
                  <IconContext.Provider value={{size: 20}}>
                    <MdCheck />
                  </IconContext.Provider> :
                  null
                }
              </Check>
              <ListElem>{name}</ListElem>
            </Wrapper>
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