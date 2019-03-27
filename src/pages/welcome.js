import React from "react";
import { 
  MDBNavbar, 
  MDBNavbarBrand, 
  MDBNavbarNav, 
  MDBNavItem,
  MDBNavLink,
  MDBIcon,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdbreact";
import { Parallax, Background } from 'react-parallax';
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import {getCookie, checkCookie} from "../utils/util";
import * as consts from "../utils/constants"
// import Background from "../assets/images/working.jpg";

import Login from "./login";
import SignUp from "./signup";

const Header_Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const Header_One = styled.p`
  font-size: 100px;
  color: white;
`

const Header_Liner = styled.p`
  font-size: 100px;
  font-weight: bold;
  color: white;
`

class Welcome extends React.Component {
  state = {
    showLogin: false,
    showSignUp: false,
  };

  componentDidMount = () => {
    document.title = "OneLiner";
  }

  showLogin = () => {
    this.setState({
      showLogin: true,
    });
  }
 
  hideLogin = () => {
    this.setState({
      showLogin: false,
    });
  }

  showSignUp = () => {
    this.setState({
      showSignUp: true,
    });
  }
 
  hideSignUp = () => {
    this.setState({
      showSignUp: false,
    });
  }

  // style={{backgroundColor: "rgba(0, 0, 0, 0.5)"}}

  render() {
    if (checkCookie(consts.ACCESS_TOKEN_KEY) !== -1) {
      return <Redirect to={{pathname: '/home', state: {token: getCookie(consts.ACCESS_TOKEN_KEY)}}}/>;
    } else {
      return (
          <div>
            
            <Parallax
              bgImage={require('../assets/images/working.jpg')}
              blur={1}
              strength={1000}
            >
              
              <MDBNavbar style={{backgroundColor: "rgba(0, 0, 0, 0.5)"}} dark expand="md">
                <MDBNavbarBrand>
                  <strong className="white-text">OneLiner</strong>
                </MDBNavbarBrand>
                  <MDBNavbarNav left>
                  </MDBNavbarNav>
                  <MDBNavbarNav right>
                    {/* <MDBNavItem className="px-3">
                      <MDBNavLink className="waves-effect waves-light" to="">
                        <MDBIcon icon="cog" className="mr-1" /> Settings
                      </MDBNavLink>
                    </MDBNavItem> */}
                    <MDBNavItem className="px-3">
                      <MDBDropdown>
                        <MDBDropdownToggle nav caret>
                          <MDBIcon icon="user" className="mr-1" />Profile
                        </MDBDropdownToggle>
                        <MDBDropdownMenu className="dropdown-default" right>
                          <MDBDropdownItem onClick={this.showLogin}>Login</MDBDropdownItem>
                          <MDBDropdownItem onClick={this.showSignUp}>Sign Up</MDBDropdownItem>
                        </MDBDropdownMenu>
                      </MDBDropdown>
                    </MDBNavItem>
                  </MDBNavbarNav>
              </MDBNavbar>
              
              <Header_Container>

                <Header_One>One</Header_One>
                <Header_Liner>Liner</Header_Liner>

                <Login show={this.state.showLogin} handleClose={this.hideLogin}/>
                <SignUp show={this.state.showSignUp} handleClose={this.hideSignUp}/>

              </Header_Container>
            
            </Parallax>
          </div>
      );
    }
    
  }
}

export default Welcome;