import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Navbar />
      <BrowserRouter>
        <nav>
          <Link to="/"> Home</Link> | 
          <Link to="/formulario"> Formulario</Link> | 
          <Link to="/contacto"> Contacto</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/formulario" element={<Form />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </BrowserRouter> */}
    </>
  )
}

export default App
