import Home from '../../pages/Home/Home'
import About from '../../pages/About/About'
import Apartments from '../../pages/Apartment/Apartment'
import Error from '../../pages/Error/Error'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Apartment" element={<Apartments />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  )
}

export default App
