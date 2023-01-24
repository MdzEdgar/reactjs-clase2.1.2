import { useState } from 'react'
import './App.css'

function App() {
  const [isShowText, setIsShowText] = useState(false)

  const handleClick = () => {
    setIsShowText(isShowText + 1)
  }

  return (
    <div className="App">
      {
        isShowText === 21 && <h1>Verdadero</h1>
      }
      <button onClick={handleClick}>Change</button>
    </div>
  )
}

export default App
