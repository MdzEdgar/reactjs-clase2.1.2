import { useState } from 'react'
import './App.css'

function App() {
  const [isShowText, setIsShowText] = useState(false)

  const handleClick = () => {
    setIsShowText(!isShowText)
  }

  return (
    <div className="App">
      {
        isShowText ? <h1>Verdadero</h1> : <h1>Falso</h1>
      }
      <button onClick={handleClick}>Change</button>
    </div>
  )
}

export default App
