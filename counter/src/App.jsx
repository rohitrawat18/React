import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  const [counter, setounter] = useState(15)

  //let counter = 15
  const addValue = () => {
    // setounter(prevCounter => prevCounter = 1)
    // setounter(prevCounter => prevCounter = 1)
    // setounter(prevCounter => prevCounter = 1)
    // setounter(prevCounter => prevCounter = 1)

    console.log("clicked", counter);

    //counter = counter + 1

    setounter(counter + 1)
  }

  const removeValue = () => {

    setounter(counter - 1)
  }


  return (
    <>
      <h1>Chai or React</h1>
      <h2>Counter value: {counter}</h2>
      <button
        onClick={addValue}
      >Add Value{counter}</button>
      <br />
      <button
        onClick={removeValue}>remove value {counter} </button>
      <p>footer: {counter} </p>
    </>
  )
}

export default App
