import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0)

  //let counter = 5

  const addValue = () => {
    counter = counter + 1
    setCounter(counter)
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value: {counter}</button>
      <br/>
      <button>Remove value: {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
