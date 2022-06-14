import React from 'react';
import Wrapper from '../components/Layouts/Wrapper';
import { AboutSection } from '../components/About/AboutSection';
import Navigation from '../components/Layouts/Navigation';
import { PathInfo } from '../components/Layouts/PathInfo';
import { Footer } from '../components/Layouts/Footer';

function About() {
  return (
    <React.Fragment>
      <Navigation />
      <PathInfo />
      <Wrapper>
        <AboutSection />
      </Wrapper>
      <Footer />
    </React.Fragment>
  );
}

export default About;
