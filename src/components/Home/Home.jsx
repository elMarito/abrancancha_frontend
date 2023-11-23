import React from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from '../Banner/Banner'
import Gallery from '../Gallery/ImgGallery'
import Footer from '../Footer/Footer'
import Search from '../Search/Search'
function Home() {
  const isAuthenticated = true
  return (
    <>
      <Navbar />
      {isAuthenticated
        ? <Search />
      : <>
        <Banner/>
        <Gallery/> 
        </>
      }
      <Footer />

    </>
  )
}

export default Home