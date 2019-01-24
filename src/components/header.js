import React from "react";
import styled from "styled-components";
import { MdSettings } from 'react-icons/md';
import { IconContext } from 'react-icons';

const Container = styled.header`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: #86e888;
  margin-bottom: 20px;
  box-shadow: 0px 10px 5px rgba(0, 0, 0, .1);
  height: 50px;
  padding-top: 5px;
  padding-left: 10px;
  justify-content: space-between;
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

const Gear = styled.button`
  border: none;
  outline: none;
  background-color: inherit;
  color: grey;
  &:hover {
    color: blue;
  }
  cursor: pointer;
  margin-right: 20px;
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
      <Gear>
        <IconContext.Provider value={{size: 20}}>
          <MdSettings />
        </IconContext.Provider>
      </Gear>
    </Container>
    );
  }
}

export default Header;