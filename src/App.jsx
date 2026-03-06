import { useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </HashRouter>
  )
}

export default App;
