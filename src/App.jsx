import { useState } from 'react'
import './App.css'
import Registro from './Components/Registro'

const App = () => {
  const [mensaje, setMensaje] = useState("");
  const [color, setColor] = useState("");

  return (
    <Registro mensaje={mensaje} setMensaje={setMensaje} color={color} setColor={setColor} />
  );
}

export default App;
