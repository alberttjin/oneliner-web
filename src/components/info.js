import React from "react";
import styled from "styled-components";

import * as consts from "../utils/constants"

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
`

const ModalMain = styled.section`
  position:fixed;
  background: white;
  width: 50%;
  height: 80%;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  border-radius: 15px;
  padding-bottom: 20px;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  border: 3px solid grey;
	overflow-y: scroll;
	::-webkit-scrollbar {display:none;};
`

const Body = styled.section`
	display: flex;
	flex-direction: column;
`

const Elem = styled.p`

`
const ListElem = styled.p`
`

const Title = styled.p`
  font: 1em/1.25em Arial, Helvetica, sans-serif;
  font-size: 12;
  font-weight: 600;
  margin-top: 15px;
`

const RowWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
`

class Info extends React.Component {

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

  render() {
    const { show } = this.props;
    const show_hide = show ? {'display': 'block'} : {'display': 'none'}
    return (
    <Modal style={show_hide}>
        <ModalMain ref={node => this.node = node}>
        <Title>How Does it Work?</Title>
        <Body>
					<Elem>One Liner is a to do list manager that flexibly parses your input to figure out when a particular task or event is due.</Elem>
					<Elem>Here are some examples of inputs you can make:</Elem>
					<Elem>Imagine you have some hw due. You can type:</Elem>
					<RowWrapper>
						<ListElem>Hw due in 2 days</ListElem>
						<ListElem>Hw due tmrw</ListElem>
					</RowWrapper>
					<RowWrapper>
						<ListElem>Hw in 2 days</ListElem>
						<ListElem>Hw 01/01/2019</ListElem>
					</RowWrapper>
					<RowWrapper>
						<ListElem>Hw on 2019-01-28</ListElem>
						<ListElem>Hw next week</ListElem>
					</RowWrapper>
					<RowWrapper>
						<ListElem>Hw next week monday</ListElem>
						<ListElem>next tuesday hw</ListElem>
					</RowWrapper>
					<ListElem>And many more!</ListElem>
					<Elem>Honestly, try what seems most natural to you, and One Liner can probably parse it!</Elem>
					<Elem>Last but not least, to add an event instead of a task, with events being things such as holidays, concerts, lectures, etc., simply put the word event or e at the front of your input.</Elem>
				</Body>
        </ModalMain>
    </Modal>
    );
  }
}

export default Info;