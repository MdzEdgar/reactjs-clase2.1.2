import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [isShowImg, setIsShowImg] = useState(false)

  const handleClick = () => {
    setIsShowImg(!isShowImg)
  }

  return (
    <div className="App">
      <h1>Ejercicio</h1>
      <p>Crear un estado que almacene un booleano que me permita mostrar una imagen cuando esta en valor true, y otra cuando este en false usando un boton que tenga la funcionalidad de cambiar el estado.</p>
      { isShowImg ? <img src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg" alt="" /> : <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg" alt="" /> }
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default App
