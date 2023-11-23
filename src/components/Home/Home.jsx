import React from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from '../Banner/Banner'
import Gallery from '../Gallery/ImgGallery'
import Footer from '../Footer/Footer'
import Search from '../Search/Search'
import { Route, Routes } from 'react-router-dom'
function Home({isAuthenticated}) {
  // const isAuthenticated = false
  // console.log({isAuthenticated});
  return (
    <>
      <Navbar />
      {isAuthenticated
        // ? <Search />
        ? <Routes> <Route path="search" element={<Search />} /></Routes>
        //tambien se podria mostra "MIS RESERVAS Y MI PERFIL"
        : <>
        </>
      }
      <Banner/>
      <Gallery/>
      <Footer />
    </>
  )
}

export default Home