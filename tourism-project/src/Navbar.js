import React from "react";
import {
  Navbar,
  NavbarBrand,
  Container,
} from "reactstrap";
import "../src/App.css";
import logo from "./logo.png";

class NavbarMain extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar
          color="faded"
          dark
          expand="md"
          fixed={`top`}
          className="navDark"
        >
          <Container>
            <NavbarBrand href="/"> <img src={'https://i.postimg.cc/Qxg0FJbs/logo.png'} width="30" height="35"/> Tourism</NavbarBrand>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default NavbarMain;
