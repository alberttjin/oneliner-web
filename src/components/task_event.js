import React from "react";
import styled from "styled-components";

const ListElem = styled.p`
  font-family: 'Source Sans Pro', sans-serif;
  margin: 0;
  padding: 0;
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
`

class TaskEvent extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <Container>
        <ListElem
          onMouseEnter={this.handleHover}
          onMouseLeave={this.handleNotHover}
        >
          {name}
        </ListElem>
      </Container>
    );
  }
}

export default TaskEvent;