import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Game from './pages/game'

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/jogo' element={<Game />} />
      </Routes>


    </>
  )
}

export default App
