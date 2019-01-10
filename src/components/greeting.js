import React from "react";
import styled from "styled-components";

import Moment from 'react-moment';
import 'moment-timezone';

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`
const DateBg = styled.div`
  display: flex;
  justify-content: center;
  width: 20%;
  background-color: rgba(255, 255, 255, .0);
  box-shadow: 0px 0px 30px 0 rgba(0, 0, 0, .4);
`
class Greeting extends React.Component {
  render() {
    return (
    <Container>
      <DateBg>
        <Moment 
          style={{
            fontSize: 80,
            fontFamily:'Ubuntu',
            color: 'white',
          }} 
          format="MMM D"
        >
        </Moment>
      </DateBg>
    </Container>
    );
  }
}

export default Greeting;