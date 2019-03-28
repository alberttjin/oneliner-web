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
import {removeCookie} from "../utils/util"
import * as consts from "../utils/constants"

class Header extends React.Component {

  handleLogOut = () => {
    removeCookie(consts.ACCESS_TOKEN_KEY)
    window.location.reload();
  }

  render() {
    return (
      <MDBNavbar style={{backgroundColor: "rgba(0, 0, 0, 0.5)"}} dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">OneLiner</strong>
        </MDBNavbarBrand>
          <MDBNavbarNav left>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem className="px-3">
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" className="mr-1" />Profile
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default" right>
                  <MDBDropdownItem onClick={this.handleLogOut}>Sign Out</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
      </MDBNavbar>
    );
  }
}

export default Header;