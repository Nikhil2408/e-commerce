import { Footer } from '../components/Layouts/Footer';
import Navigation from '../components/Layouts/Navigation';
import React from 'react';
import Wrapper from '../components/Layouts/Wrapper';
import { ProductsContainer } from '../components/Products/ProductsContainer';
import { PathInfo } from '../components/Layouts/PathInfo';

function Products() {
  return (
    <div>
      <Navigation />
      <PathInfo />
      <Wrapper>
        <ProductsContainer />
      </Wrapper>
      <Footer />
    </div>
  );
}

export default Products;
