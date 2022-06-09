import React from 'react';
import Wrapper from '../components/Layouts/Wrapper';
import { AboutSection } from '../components/About/AboutSection';
import Navigation from '../components/Layouts/Navigation';
import { PathInfo } from '../components/Layouts/PathInfo';

function About() {
  return (
    <React.Fragment>
      <Navigation />
      <PathInfo />
      <Wrapper>
        <AboutSection />
      </Wrapper>
    </React.Fragment>
  );
}

export default About;
