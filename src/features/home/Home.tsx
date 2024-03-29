import React from 'react';
import Header from '@/features/navigation/Header';
import Hero from './Hero';
import Bestsellers from '@/features/home/Bestsellers';
import NewCollection from './NewCollection';
import Footer from '@/features/navigation/Footer';

/**
 * Renders the home page of the ecommerce website.
 * Includes the header, hero section, bestsellers section, new collection section, and footer.
 */
const Home: React.FC = () => {
  return (
    <>
      <div className="">
        <Header />
        <Hero
          title="TITLE"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          btnContent="nouveautés"
        />
        <Bestsellers
          content={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut porttitor leo a diam sollicitudin tempor. Aenean vel elit scelerisque mauris pellentesque. Fusce ut placerat orci nulla pellentesque dignissim.'
          }
          btnContent={'bestsellers'}
        />
        <NewCollection />
        <Footer />
      </div>
    </>
  );
};

export default Home;
