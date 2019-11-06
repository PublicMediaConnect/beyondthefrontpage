import React from 'react';
import { MDBContainer, MDBBtn, MDBIcon, MDBRow, MDBCol } from "mdbreact";

const Intro = ({ children }) => {
    return (
        <MDBContainer style={{marginTop: "25vh", marginBottom: "55vh"}}>
            <MDBRow >
                <MDBCol md="12" className="white-text text-center">
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default Intro;
