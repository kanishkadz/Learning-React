import { useState } from "react"

function App() {
  const [color, setColor] = useState("aqua")

  return (
    <div className="w-full h-screen
    duration-200" 
    style = {{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{backgroundColor:"red"}}>Red</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{backgroundColor:"green"}}>Green</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{backgroundColor:"blue"}}>Blue</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{backgroundColor:"yellow"}}>Yellow</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{backgroundColor:"pink"}}>Pink</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{backgroundColor:"orange"}}>Orange</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{backgroundColor:"white"}}>White</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{backgroundColor:"black"}}>Black</button>
        </div>
      </div>
    </div>
  )
}

export default App
