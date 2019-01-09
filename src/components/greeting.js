import React from "react";
import styled from "styled-components";

import Moment from 'react-moment';
import 'moment-timezone';

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`
class Greeting extends React.Component {
  render() {
    return (
    <Container>
      <Moment style={{fontSize: 80, fontFamily: 'Thasadith', color: '#92eefc'}} format="MMM D"></Moment>
    </Container>
    );
  }
}

export default Greeting;