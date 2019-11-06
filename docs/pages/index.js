import React, { Component } from 'react';
import Layout from '../components/layout';
import Intro from '../components/mask';
import SEO from '../components/seo';
import Carousel from '../components/carousel';
import AboutSection from '../components/aboutSection';
import Card from '../components/card';
import { MDBRow } from 'mdbreact';

class App extends Component {
  render() {
    return (
      <>
        <Layout>
          <SEO title="Home" keywords={[`eTech Ohio`, `journalism`, `CET`, `ThinkTV`]} />
        <Carousel />
        <Intro />
        <main>
          <AboutSection />
          <section id="cardSection">
            <MDBRow className="m-0" center>
              <Card />
            </MDBRow>
          </section>
        </main>
        </Layout>
      </>
    );
  }
}

export default App;
