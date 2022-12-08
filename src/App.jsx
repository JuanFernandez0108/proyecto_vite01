import { useState } from 'react'
import Descripciones from './components/Descripciones';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Descripciones />
    </div>
  )
}

export default App
