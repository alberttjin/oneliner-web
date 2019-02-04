import React from "react";
import styled from "styled-components";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import moment from 'moment';

import { completeTask, getTasks } from "../utils/api";
import TaskEvent from "./task_event";
import '../css/animations.css';

const Title = styled.p`
  display: flex;
  justify-content: center;
  font-size: 200%;
  font-family: 'Ubuntu', sans-serif;
  color: black;
  margin: 0;
  padding-bottom: 25px;
  padding-top: 25px;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, .4);
`

const Container = styled.div`
  background-color: rgba(255, 255, 255, .9);
  width: 30%;
  border-radius: 25px;
  box-shadow: 15px 15px 20px 0 rgba(0, 0, 0, .4);
  height: 400px;
  overflow-y: scroll;
  ::-webkit-scrollbar {display:none;}
`
const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
class Todo extends React.Component {
  state = {
    todos: []
  }

  componentDidMount = async () => {
    const tasks =  await getTasks(this.props.token, "2019-02-03", "2019-02-17");
    this.setState({
      todos: tasks,
    });
  }

  deleteTask = (id, token) => {
    console.log(token)
    completeTask(token, id);
    const filtered_todos = this.state.todos.filter(todo => todo.id != id);
    this.setState({
      todos: filtered_todos,
    })
  }

  render() {
    const { title } = this.props;
    const todos = this.state.todos;
    const todos_list = todos.map((todo) => {
      return (
      <TaskEvent
        key={todo.id}
        id={todo.id}
        name={todo.name}
        deleteTask={this.deleteTask}
        time={moment(todo.date).fromNow()}
        type={title}/>
      );    
    })
    return (
    <Container>
      <Title>{title}</Title>
      <ReactCSSTransitionGroup
          transitionName="fade"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
      {todos_list}
      </ReactCSSTransitionGroup>
    </Container>
    );
  }
}

export default Todo;