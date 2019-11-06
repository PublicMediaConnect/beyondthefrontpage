import React, { Component } from 'react';
import Layout from '../components/layout';
import Intro from '../components/mask';
import Teachers from '../components/teacherVideos'
import SEO from '../components/seo';
import { MDBRow } from 'mdbreact';

class TeachersPage extends Component {
  render() {
    return (
      <>
        <Layout>
          <SEO title="Videos for Teachers" keywords={[`eTech Ohio`, `journalism`, `CET`, `ThinkTV`]} />
          <main>
          <section id="teacherVideoSection">
            <Teachers/>
                    </section>
        </main>
        </Layout>
      </>
    );
  }
}


export default TeachersPage;
