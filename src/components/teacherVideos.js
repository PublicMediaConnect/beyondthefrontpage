import React from "react";
import { MDBRow, MDBCol, MDBIcon, MDBContainer } from "mdbreact";

const TeacherVideos = () => {
    return (
        <MDBContainer tag="section">
        <MDBRow className="mt-3 mb-3">
          <div class="card">
            <h3 class="card-header stylish-color-dark white-text text-uppercase">Teacher Video 1: Journalism & The Common Core </h3>
              <div class="card-body">

                  <div class="embed-responsive embed-responsive-16by9">
                  <video class="video-fluid z-depth-1" poster="https://publicmediaconnect-videos.s3.amazonaws.com/btfp/commoncore.jpg" playsinline controls>
  <source src="https://publicmediaconnect-videos.s3.amazonaws.com/btfp/TRV_Common_Core_1.mp4" type="video/mp4" />
</video>
                  </div>
                    <h5>This video for educators illustrates how a journalism curriculum can support Common Core learning and media literacy. It features interviews with educators who have found success with multimedia non-fiction storytelling projects in their own classrooms.
                    </h5>
                  </div>
            </div>
        </MDBRow>
          <MDBRow className="mb-3">
          <div class="card">
            <h3 class="card-header stylish-color-dark white-text text-uppercase">Teacher Video 2: Journalism in the 21st Century Classroom </h3>
              <div class="card-body">

                  <div class="embed-responsive embed-responsive-16by9">
                  <video class="video-fluid z-depth-1" poster="https://publicmediaconnect-videos.s3.amazonaws.com/btfp/journoclassroom.jpg" playsinline controls>
  <source src="https://publicmediaconnect-videos.s3.amazonaws.com/btfp/TRV_Century_1.mp4" type="video/mp4" />
</video>
                  </div>
                    <h5>This video for educators illustrates how a journalism curriculum can foster the 21st century skills of critical thinking, communication, collaboration, and creativity. It features interviews with educators using journalism to enhance student engagement.
                    </h5>
                  </div>
            </div>
        </MDBRow>

        </MDBContainer>
    );
}

export default TeacherVideos;
