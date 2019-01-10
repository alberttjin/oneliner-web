import React from "react";
import styled from "styled-components";

const ListElem = styled.p`
  display: flex;
  font-family: 'Source Sans Pro', sans-serif;
  border-bottom: 1px solid rgba(0, 0, 0, .4);
  width: 100%;
  margin: 0;
  padding-top: 10px;
  padding-bottom: 10px;
  justify-content: center;
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
    const { name } = this.props;
    const bg_color = this.state.hovered ? '#e0e0e0' : 'transparent';
    return (
      <ListElem
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleNotHover}
        style={{backgroundColor: bg_color}}
      >
        {name}
      </ListElem>
    );
  }
}

export default TaskEvent;