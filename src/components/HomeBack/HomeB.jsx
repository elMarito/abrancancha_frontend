import React from 'react';
import NavBarBack from '../HomeBack/NavbarBack';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';

function HomeB() {
  return (
    <div>
      <header>
        <NavBarBack />
      </header>
      <main id="body">
        {/* <Banner/> */}
        <Footer/>
      </main>
    </div>
  );
}

export default HomeB;
