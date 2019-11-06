import React, { Component } from "react";
import {
  MDBContainer, MDBNavbar,  MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
} from "mdbreact";
import { Link } from 'gatsby';
import CustomNavLink from './customLink';
import { ReactComponent as Logo } from "../images/bfp_logo_490.svg";

class NavbarPage extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <MDBNavbar color="white" expand="md">
        <MDBContainer>
          <Logo  />
          <MDBNavbarToggler name="navbar-toggler" onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav right>
                <CustomNavLink to="/" color="deep-purple accent-4"><strong>Home</strong></CustomNavLink>
                <CustomNavLink to="/students" color="deep-purple accent-4"><strong>Student Videos</strong></CustomNavLink>
                <CustomNavLink to="/teachers" color="deep-purple accent-4"><strong>Teacher Videos</strong></CustomNavLink>
                <CustomNavLink to="/resources" color="deep-purple accent-4"><strong>Resources</strong></CustomNavLink>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    );
  }
}

export default NavbarPage;
