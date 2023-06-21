import Home from '../../pages/Home/Home'
import About from '../../pages/About/About'
import Apartment from '../../pages/Apartment/Apartment'
import Error from '../../pages/Error/Error'
import datas from '../../assets/datas/DataBase.json'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home datas={datas} />} />
      <Route path="/About" element={<About />} />
      <Route path="/Apartment/:id" element={<Apartment datas={datas} />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  )
}

export default App

