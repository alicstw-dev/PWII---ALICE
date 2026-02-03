import { useState } from 'react'
import Home from './pages/Home/Home'
import Sobre from './pages/Sobre/Sobre'
import './App.css'

function App() {
  const [pagina, setPagina] = useState('home')

  return (
    <>
      {pagina === 'home' && <Home mudarPagina={setPagina} />}
      {pagina === 'sobre' && <Sobre mudarPagina={setPagina} />}
    </>
  )
}

export default App
