import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBBtn, MDBIcon } from "mdbreact";
import { ReactComponent as Logo } from "../images/bfp_logo_490.svg";

const Footer = () => {
    return (
        <MDBFooter color="stylish-color-dark" className="font-small pt-0">
            <MDBContainer>
                <MDBRow className="pt-5 mb-3 text-center d-flex justify-content-center">
                    <MDBCol md="2" className="b-3">
                        <h6 className="title font-weight-bold">
                            <a href="/">Home</a>
                        </h6>
                    </MDBCol>
                    <MDBCol md="2" className="b-3">
                        <h6 className="title font-weight-bold">
                            <a href="/students">Student Videos</a>
                        </h6>
                    </MDBCol>
                    <MDBCol md="2" className="b-3">
                        <h6 className="title font-weight-bold">
                            <a href="/teachers">Teacher Videos</a>
                        </h6>
                    </MDBCol>
                    <MDBCol md="2" className="b-3">
                        <h6 className="title font-weight-bold">
                            <a href="/resources">Resources</a>
                        </h6>
                    </MDBCol>

                </MDBRow>
                <hr className="rgba-white-light" style={{ margin: "0 15%" }} />
                <MDBRow className="d-flex text-center justify-content-center mb-md-0 mb-4">
                    <MDBCol md="8" sm="12" className="mt-5">
                      <Logo  />
                        <p style={{ lineHeight: "1.7rem" }}>
                          1223 Central Parkway, Cincinnati, Ohio 45214-2812<br/>
                          Phone: (513) 345-6566<br/>
                          Fax: (513) 381-7520
                        </p>
                    </MDBCol>
                </MDBRow>
                <hr className="clearfix d-md-none rgba-white-light" style={{ margin: "10% 15% 5%" }} />
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: Public Media Connect
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default Footer;
