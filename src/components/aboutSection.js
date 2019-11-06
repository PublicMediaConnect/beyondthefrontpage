import React from "react";
import { MDBRow, MDBCol, MDBIcon, MDBContainer } from "mdbreact";

const AboutPage = () => {
    return (
        <MDBContainer tag="section"  className="text-center my-5">
            <h2 className="h1-responsive font-weight-bold my-5">
                About Beyond the Front Page 2.0
            </h2>
            <p className="lead grey-darken-1-text w-responsive mx-auto mb-5">
              Journalism provides a direct point of access for teachers to working with nonfiction reading and writing, particularly in middle and high school. It also addresses the urgent need to increase exposure to nonfiction literature and to provide authentic learning opportunities under the Common Core State Standards.
            </p>
            <p className="lead grey-darken-1-text w-responsive mx-auto mb-5">
          <strong>“Beyond the Front Page 2.0”</strong> is a multimedia project funded by eTech Ohio and produced by public television stations <a href="http://www.cetconnect.org" target="_blank" title="CET, Cincinnati's PBS Station">CET</a> in Cincinnati and <a href="http://www.thinktv.org" target="_blank" title="ThinkTV, Dayton's PBS Station">Think<sup>TV</sup></a> in Dayton. Through a series of nine videos and a companion website, the project highlights the keys to understanding and utilizing journalism for both teachers and students. It includes interviews with teachers, students and journalists from Cincinnati and Dayton as well notable contributors from <a href="http://www.pbs.org/newshour/" target="_blank" title="PBS NewsHour">PBS NewsHour</a> and <a href="http://www.nytimes.com/" target="_blank" title="The New York Times">The New York Times</a>.
            </p>
        </MDBContainer>
    );
}

export default AboutPage;
