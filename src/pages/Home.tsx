import React from 'react';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Testimonials from '../components/Testimonials';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Products />
      <Testimonials />
    </>
  );
};

export default Home;