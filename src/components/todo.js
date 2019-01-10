import React from "react";
import styled from "styled-components";

import TaskEvent from "./task_event";

const Title = styled.p`
  display: flex;
  justify-content: center;
  font-size: 200%;
  font-family: 'Ubuntu', sans-serif;
  color: black;
  border-bottom: 1px solid rgba(0, 0, 0, .4);
  margin: 0;
  padding-bottom: 25px;
  padding-top: 25px;
  width: 100%;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: rgba(255, 255, 255, .9);
  width: 30%;
  border-radius: 25px;
  box-shadow: 15px 15px 20px 0 rgba(0, 0, 0, .4);
`
const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
class Todo extends React.Component {

  render() {
    const { title, elems } = this.props;
    const elemsList = elems.map((todo) => {
      return <TaskEvent key={todo.id} id={todo.id} name={todo.name} />;
    })
    return (
    <Container>
        <Title>{title}</Title>
        <List>{elemsList}</List>
    </Container>
    );
  }
}

export default Todo;