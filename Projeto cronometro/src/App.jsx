import { useState } from 'react'
import './App.css'

function App() {
  const [tempo, setTempo] = useState(0)

  return (
    <main>
      <h1>⏱️ Meu Cronômetro</h1>
      <h2>{tempo}s</h2>
      <button onClick={() => setTempo(tempo + 1)}>Iniciar</button>
    </main>
  )
}

export default App