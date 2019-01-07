import React from "react";
import styled from "styled-components";


class Header extends React.Component {
  render() {
    return (
    <header>
        <div>
        <span className="icon">date_range</span>
        <span>
            One<b>Liner</b>
        </span>
        </div>
    </header>
    );
  }
}

export default Header;