import React from "react";
import styled from "styled-components";

import {removeCookie} from "../utils/util"
import * as consts from "../utils/constants"

const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  height: 150px;
  width: 100px;
  position: fixed;
  margin: 0;
  padding: 0;
  right: 125px;
  top: 55px;
`

const SettingsElem = styled.button`
  outline: none;
  border: none;
  &:hover {
    background-color: lightgrey;
  }
  margin: 0;
  width: 100%;
  cursor: pointer;
  text-align: left;
`

class Settings extends React.Component {
  componentWillMount = () => {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount = () => {
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  handleClick = (e) => {
    if (!this.node.contains(e.target)) {
      this.props.handleClose();
    }
  }

  handleLogOut = () => {
    removeCookie(consts.ACCESS_TOKEN_KEY)
    window.location.reload();
  }

  render() {
    const { show } = this.props;
    const show_settings = show ? {'display': 'block'} : {'display': 'none'}
    return (
      <SettingsContainer style={show_settings} ref={node => this.node = node}>
        <SettingsElem>Help</SettingsElem>
        <SettingsElem onClick={this.handleLogOut}>Logout</SettingsElem>
      </SettingsContainer>
    );
  }
}

export default Settings;