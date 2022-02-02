import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sample from './pages/sample'
import Login from './pages/login'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sample />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
