import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sample from './components/sample'
import Login from './components/login'

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
