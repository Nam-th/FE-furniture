import React from 'react';
import '@/styles/globals.css';
import { Footer, Header, HomeProduct, Newsletter } from '@/components';
import '../../styles/core-style.css';
import '../../styles/style.css';
const Home = () => {
  return (
    <>
      <div className="main-content-wrapper d-flex clearfix font-helveticaMedium">
        <Header />
        <div className="products-catagories-area clearfix">
          <HomeProduct />
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
