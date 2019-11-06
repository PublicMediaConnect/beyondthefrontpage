import React from "react";
import { MDBRow, MDBCol, MDBIcon, MDBContainer } from "mdbreact";

const StudentVideos = () => {
    return (
        <MDBContainer tag="section">
        <MDBRow className="mt-3 mb-3">
          <div class="card">
            <h3 class="card-header deep-orange darken-3 white-text text-uppercase">Student Video 1: What is Journalism?</h3>
              <div class="card-body">

                  <div class="embed-responsive embed-responsive-16by9">
                  <video class="video-fluid z-depth-1" poster="https://publicmediaconnect-videos.s3.amazonaws.com/btfp/whatisjournalism.jpg" playsinline controls>
  <source src="https://publicmediaconnect-videos.s3.amazonaws.com/btfp/What_is_Journalism_1.mp4" type="video/mp4" />
</video>
                  </div>
                    <h5>This video introduces students to the concept of journalism and the job of a journalist. It features interviews with correspondents from PBS NewsHour as well as journalists across a range of media based in Cincinnati, Dayton, and Springfield.
                    </h5>
                  </div>
            </div>
        </MDBRow>
          <MDBRow className="mb-3">
          <div class="card">
            <h3 class="card-header deep-orange darken-3 white-text text-uppercase">Student Video 2: The Rules of Journalism</h3>
              <div class="card-body">

                  <div class="embed-responsive embed-responsive-16by9">
                  <video class="video-fluid z-depth-1" poster="https://publicmediaconnect-videos.s3.amazonaws.com/btfp/rulesofjournalism.jpg" playsinline controls>
  <source src="https://publicmediaconnect-videos.s3.amazonaws.com/btfp/Rules_Journalism_1.mp4" type="video/mp4" />
</video>
                  </div>
                    <h5>This video introduces students to the rules that journalists follow to gather and report the news. It features interviews with correspondents from PBS NewsHour as well as journalists across a range of media based in Cincinnati, Dayton, and Springfield.
                    </h5>
                  </div>
            </div>
        </MDBRow>
        <MDBRow className="mb-3">
        <div class="card">
          <h3 class="card-header deep-orange darken-3 white-text text-uppercase">Student Video 3: Sources in Journalism</h3>
            <div class="card-body">

                <div class="embed-responsive embed-responsive-16by9">
                <video class="video-fluid z-depth-1" poster="https://publicmediaconnect-videos.s3.amazonaws.com/btfp/sourcesinjournalism.jpg" playsinline controls>
<source src="https://publicmediaconnect-videos.s3.amazonaws.com/btfp/Sources_Journalism_1.mp4" type="video/mp4" />
</video>
                </div>
                  <h5>This video introduces students to the importance of sources in the coverage of News, Features, and Opinion. It features interviews with journalists across a range of media based in Cincinnati, Dayton, and Springfield.
                  </h5>
                </div>
          </div>
      </MDBRow>
      <MDBRow className="mb-3">
      <div class="card">
        <h3 class="card-header deep-orange darken-3 white-text text-uppercase">Break-Out Module 1: Journalism Yesterday and Today </h3>
          <div class="card-body">

              <div class="embed-responsive embed-responsive-16by9">
              <video class="video-fluid z-depth-1" poster="https://publicmediaconnect-videos.s3.amazonaws.com/btfp/journalismyesterdayandtoday.jpg" playsinline controls>
<source src="https://publicmediaconnect-videos.s3.amazonaws.com/btfp/Journo_Yesterday_Today_1.mp4" type="video/mp4" />
</video>
              </div>
                <h5>This video provides students with a brief history of journalism and how it is changing in the digital age. It features interviews with correspondents from PBS NewsHour as well as journalists across a range of media based in Cincinnati, Dayton, and Springfield.
                </h5>
              </div>
        </div>
    </MDBRow>
    <MDBRow className="mb-3">
    <div class="card">
      <h3 class="card-header deep-orange darken-3 white-text text-uppercase">Break-Out Module 2: The Art of the Interview </h3>
        <div class="card-body">

            <div class="embed-responsive embed-responsive-16by9">
            <video class="video-fluid z-depth-1" poster="https://publicmediaconnect-videos.s3.amazonaws.com/btfp/artoftheinterview.jpg" playsinline controls>
<source src="https://publicmediaconnect-videos.s3.amazonaws.com/btfp/Art_Interview_1.mp4" type="video/mp4" />
</video>
            </div>
              <h5>This video provides students with some of the interviewing tips and tricks used by professional journalists in news gathering. It features interviews with journalists across a range of media based in Cincinnati, Dayton, and Springfield.
              </h5>
            </div>
      </div>
  </MDBRow>
  <MDBRow className="mb-3">
  <div class="card">
    <h3 class="card-header deep-orange darken-3 white-text text-uppercase">Break-Out Module 3: Student Journalism</h3>
      <div class="card-body">

          <div class="embed-responsive embed-responsive-16by9">
          <video class="video-fluid z-depth-1" poster="https://publicmediaconnect-videos.s3.amazonaws.com/btfp/studentjournalism.jpg" playsinline controls>
<source src="https://publicmediaconnect-videos.s3.amazonaws.com/btfp/Student_Journalism_1.mp4" type="video/mp4" />
</video>
          </div>
            <h5>This video provides inspiration to students as they embark on their own journeys in journalism. It features interviews with student journalists, correspondents from PBS NewsHour, and journalists across a range of media based in Cincinnati and Dayton.</h5>
          </div>
    </div>
</MDBRow>
<MDBRow className="mb-3">
<div class="card">
  <h3 class="card-header deep-orange darken-3 white-text text-uppercase">Student Video 4: Telling the Story</h3>
    <div class="card-body">

        <div class="embed-responsive embed-responsive-16by9">
        <video class="video-fluid z-depth-1" poster="https://publicmediaconnect-videos.s3.amazonaws.com/btfp/tellingthestory.jpg" playsinline controls>
<source src="https://publicmediaconnect-videos.s3.amazonaws.com/btfp/Telling_Story_1.mp4" type="video/mp4" />
</video>
        </div>
          <h5>This video provides students with tips on how to tell a compelling news story. It features interviews with correspondents from PBS NewsHour as well as journalists across a range of media based in Cincinnati, Dayton, and Springfield.</h5>
        </div>
  </div>
</MDBRow>
        </MDBContainer>
    );
}

export default StudentVideos;
