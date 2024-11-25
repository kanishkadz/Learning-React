import { useState, useCallback } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNummberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%&"


    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass = str.charAt(char)
    } 

    setPassword(pass)


  }, [length, numberAllow, charAllowed, setPassword])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 mmy-8 text-orange-500 bg-gray-500'>test</div>
    </>
  )
}

export default App
