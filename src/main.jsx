import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar.jsx'
// import App from './App.jsx'
import Banner from './components/Banner.jsx'
import ImgGallery from './components/ImgGallery.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <AppContextProvider> <-------cuando funcione lo habilitamos*/}
      {/* <BrowserRouter>
        <App />
      </BrowserRouter> */}
      <Navbar />
      <Banner/>
      <ImgGallery />
    {/* </AppContextProvider> */}
  </React.StrictMode>,
)