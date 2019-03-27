import React from "react";
import styled from "styled-components";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import moment from 'moment';

import { completeTask, getTasks, getEvents, completeEvent } from "../utils/api";
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

class Todo extends React.Component {
  state = {
    is_tasks: false,
    todos: []
  }

  componentDidMount = async () => {
    const today = moment();
    const until = moment().add(2, 'weeks');
    let todos;
    this.state.is_tasks = this.props.title == "Tasks"
    if (this.state.is_tasks) {
      todos =  await getTasks(this.props.token, today.format('YYYY-MM-DD'), until.format('YYYY-MM-DD'));
    } else {
      todos =  await getEvents(this.props.token, today.format('YYYY-MM-DD'), until.format('YYYY-MM-DD'));
    }
    this.setState({
      todos: todos,
    });
  }

  deleteTodo = (id, token) => {
    this.state.is_tasks ? completeTask(token, id): completeEvent(token, id);
    const filtered_todos = this.state.todos.filter(todo => todo.id != id);
    this.setState({
      todos: filtered_todos,
    })
  }

  render() {
    const { title } = this.props;
    const todos = [...this.state.todos];
    const today = moment();
    console.log(todos.sort((a, b) => moment(a.date, 'YYYY-MM-DD').diff(moment(b.date, 'YYYY-MM-DD'))))
    const todos_list = todos
      .map((todo) => {
      return (
      <TaskEvent
        key={todo.id}
        id={todo.id}
        name={todo.name}
        deleteTodo={this.deleteTodo}
        time={this.state.is_tasks ? moment(todo.date).fromNow(): moment(todo.start_date).fromNow()}
        overdue={this.state.is_tasks ? moment(todo.date) < today: moment(todo.start_date) < today}
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