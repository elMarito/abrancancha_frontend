import React from 'react'
import Navbar from './components/Navbar.jsx'
import Canchas from './canchas.jsx'
export const HomeB = () => {
  return (
    <div>
        <header>
      {/* <NavBar /> */}
    </header>
    <main id='body'>
      <Canchas/>
      <Routes>
        {/* <Switch>*/}
        <Route exact path='/' element={<HomeB />} />
        {/* <Route path='/Canchas' element={<Canchas />} /> */}
        {/* <Route path='/Products/:id' element={<Product />} /> */}
        {/* <Route path='/User' element='<User/>'/> */}
        <Route path='/Login' element={<Login/>}/>
        {/* <Route path="*" component={NotFound} /> */}
        {/* </Switch>  */}
      </Routes>
    </main>
    {/* <div id='footer'></div> */}
    {/* <footer>
      <img src='/logo-no-background.svg' alt="logo Mercado Trucho" />
      <p>Copyright Mario Patronelli</p>
    </footer>   */}
    </div>
  )
}