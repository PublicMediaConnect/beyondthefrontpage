import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdbreact';
import studentImage from "../images/student_videos.jpg"
import teacherImage from "../images/teacher_videos.jpg"
import resourcesImage from "../images/resources_links.jpg"

const videoCards = () => {
    return (
       <MDBRow>
        <MDBCol style={{ maxWidth: "22rem" }}>
            <MDBCard>
            <MDBCardImage className="img-fluid" src={studentImage} alt=""  waves />
                <MDBCardBody>
                    <MDBCardTitle>Videos for Students</MDBCardTitle>
                    <MDBCardText>These videos will help students explore journalism and understand concepts around student journalism.</MDBCardText>
                    <MDBBtn color="mdb-color" href="/students">Watch Now</MDBBtn>
                </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol style={{ maxWidth: "22rem" }}>
            <MDBCard>
            <MDBCardImage className="img-fluid" src={teacherImage} alt=""  waves />
                <MDBCardBody>
                    <MDBCardTitle>Videos for Teachers</MDBCardTitle>
                    <MDBCardText>Interested in incorporating journalism in the classroom? Find out about the benefits and Common Core standards.</MDBCardText>
                    <MDBBtn color="mdb-color" href="/teachers">Watch Now</MDBBtn>
                </MDBCardBody>
            </MDBCard>
                </MDBCol>
                <MDBCol style={{ maxWidth: "22rem" }}>
            <MDBCard>
            <MDBCardImage className="img-fluid" src={resourcesImage} alt=""  waves />
                <MDBCardBody>
                    <MDBCardTitle>Resources and Links</MDBCardTitle>
                    <MDBCardText>Ready to learn more? <br/>We've compiled a list of resources to help and inspire.</MDBCardText>
                    <MDBBtn color="mdb-color" href="/resources">See More</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
      </MDBRow>

    )
}

export default videoCards;
