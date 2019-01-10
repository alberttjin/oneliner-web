import React from "react";
import styled from "styled-components";

import Header from "./components/header";
import Todo from "./components/todo";
import Greeting from "./components/greeting";
import Background from "./assets/images/background.jpeg";

import "./App.css";
import "./index.css";

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
const VerticalLine = styled.div`
  border-left: 2px solid #dddddd;
`
const HorizontalLine = styled.div`
  border-bottom: 2px solid #dddddd;
`
class App extends React.Component {
  render() {
    return (
      <Container>
        <Header />
        <Greeting />
        <Wrapper>
          <Todo title="Tasks" elems={[{id: 1, name: "hw due in 2 days"}, {id: 2, name: "hw due in 3 days"}]}/>
          <Todo title="Events" elems={[{id: 3, name: "birthday in 2 days"}, {id: 4, name: "birthday in 3 days"}]}/>
        </Wrapper>
      </Container>
    );
  }
}

export default App;