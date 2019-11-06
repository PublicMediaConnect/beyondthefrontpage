import React, { Component } from 'react';
import Layout from '../components/layout';
import Intro from '../components/mask';
import Resources from '../components/resourcesSection'
import SEO from '../components/seo';
import { MDBRow } from 'mdbreact';

class ResourcePage extends Component {
  render() {
    return (
      <>
        <Layout>
          <SEO title="Resources" keywords={[`eTech Ohio`, `journalism`, `CET`, `ThinkTV`]} />
          <main>
          <section id="resourcesSection">
            <Resources/>
                    </section>
        </main>
        </Layout>
      </>
    );
  }
}


export default ResourcePage;
