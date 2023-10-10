import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar.jsx'
// import App from './App.jsx'
import Banner from './components/Banner.jsx'
import Footer from './components/Footer.jsx'
import { BrowserRouter as Router } from "react-router-dom";
// import Footer from './components/footer.jsx'
import { ModalFooter } from 'react-bootstrap'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <AppContextProvider> <-------cuando funcione lo habilitamos*/}
      {/* <BrowserRouter>
        <App />
      </BrowserRouter> */}
      <Navbar />
      <Banner/>
      <Footer/>
    {/* </AppContextProvider> */}
  </React.StrictMode>,
)
