import React, { Component } from 'react';
import Layout from '../components/layout';
import Intro from '../components/mask';
import Students from '../components/studentVideos'
import SEO from '../components/seo';
import { MDBRow } from 'mdbreact';

class StudentsPage extends Component {
  render() {
    return (
      <>
        <Layout>
          <SEO title="Home" keywords={[`eTech Ohio`, `journalism`, `CET`, `ThinkTV`]} />
          <main>
          <section id="studentVideoSection">
            <Students/>
                    </section>
        </main>
        </Layout>
      </>
    );
  }
}


export default StudentsPage;
