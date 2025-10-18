import React from 'react'
import Heading from "./components/Heading"
import AllCards from './components/AllCard'  

export default function App() {
  return (
    <div>
      <Heading />
      <div>
        <input type="text" placeholder='Kya chaiye..?' />
        <button>Search</button>
      </div>

      {/* ✅ Just render AllCards (it already has default sampleProducts inside) */}
      <AllCards />
    </div>
  )
}
