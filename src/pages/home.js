import React from "react";
import styled from "styled-components";

import Header from "../components/header";
import Todo from "../components/todo";
import Greeting from "../components/greeting";
import Background from "../assets/images/background.jpeg";
import Input from "../components/input";
import {getTasks}  from "../utils/api";

import "../index.css";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-image: url(${Background});
  background-size: cover;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-grow: 1;
  margin-bottom: 20px;
`

class Home extends React.Component {
  state = {
    tasks: [],
    events: [],
  }
  componentDidMount = async () => {
    const tasks =  await getTasks(this.props.location.state.token, "2018-10-01", "2018-11-01");
    this.setState({
      tasks: tasks,
    });
    document.title = "OneLiner";
  }
  render() {
    console.log(document.cookie);
    return (
      <Container>
        <Header />
        <Greeting />
        <Input />
        <Wrapper>
          <Todo title="Tasks" elems={this.state.tasks}/>
          <Todo title="Events" elems={[{id: 3, name: "birthday in 2 days"}, {id: 4, name: "birthday in 3 days"}]}/>
        </Wrapper>
      </Container>
    );
  }
}

export default Home;