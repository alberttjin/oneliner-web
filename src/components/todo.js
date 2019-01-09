import React from "react";
import styled from "styled-components";

import TaskEvent from "./task_event";

const Title = styled.p`
  font-size: 200%;
  font-family: 'Ubuntu', sans-serif;
  color: black;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  width: 30%;
  border-radius: 25px;
  box-shadow: 15px 15px 20px 0 rgba(0, 0, 0, .4);
`
const List = styled.ul`
  list-style-type: none;
  padding-left: 0;
`
const ListElem = styled.li`
  margin-bottom: 20px;
  font-family: 'Source Sans Pro', sans-serif;
  color: black;
`
class Todo extends React.Component {
  render() {
    const { title, elems } = this.props;
    const elemsList = elems.map((name) => {
      return <ListElem>{name}</ListElem>;
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