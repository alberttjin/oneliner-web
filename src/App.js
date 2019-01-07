import React from "react";
import styled from "styled-components";

import Header from "./components/header";
import Todo from "./components/todo";
import Greeting from "./components/greeting";

import "./App.css";
import "./index.css";

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Greeting />
        <Wrapper>
          <Todo title="Tasks" elems={["hw due in 2 days", "hw due in 2 days", "hw due in 2 days"]}/>
          <Todo title="Events" elems={["birthday in 2 days", "birthday in 2 days", "birthday in 2 days"]}/>
        </Wrapper>
      </div>
    );
  }
}

export default App;