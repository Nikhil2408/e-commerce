import React from 'react';
import FeaturedProducts from '../components/Home/FeaturedProducts';
import Features from '../components/Home/Features';
import Main from '../components/Home/Main';
import NewsLetter from '../components/Home/NewsLetter';
import Navigation from '../components/Layouts/Navigation';
import { Footer } from '../components/Layouts/Footer';

function Home() {
  return (
    <div>
      <Navigation />
      <Main />
      <FeaturedProducts />
      <Features />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default Home;
