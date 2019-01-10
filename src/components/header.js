import React from "react";
import styled from "styled-components";

const Container = styled.header`
  /*background-color: #74a3a8;*/
  height: 50px;
  padding-top: 5px;
  padding-left: 10px;
`
const LogoOne = styled.p`
  font-size: 15px;
`
const LogoTwo = styled.p`
  font-size: 15px;
  font-weight: 700;
`
const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const Logo = () => {
  return (
    <LogoContainer>
      <span className="icon">date_range</span>
      <LogoOne>One</LogoOne>
      <LogoTwo>Liner</LogoTwo>
    </LogoContainer>
  );
}

class Header extends React.Component {
  render() {
    return (
    <Container>
      <Logo />
    </Container>
    );
  }
}

export default Header;