import { useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState(0)
  console.log(data)   //0

  //isse ui chnage nhi ho rha 
  //ui change nhi ho rha hai clg mei change ho rha hai
  let count=0;

  // function increment(){
  //   console.log("Inc");
  //   count++;
  // }
  // function decrement(){
  //   console.log("Dec");
  //   count--;
  // }

  function inc(){
    setData((data)=>data+1);
    //or ++data
  }

  function dec(){
    setData((data)=> data-1);
  }

  return (
    <>
      {/* <div>
        <h1>Counter</h1>
        <button onClick={increment}>Increase</button>
        <h2>{count}</h2>
        <button onClick={decrement}>Decrease</button>
      </div> */}

        <div>
        <h1>Counter</h1>
        <button onClick={inc}>Increase</button>
        <h2>{data}</h2>
        <button onClick={dec}>Decrease</button>
      </div>
    </>
  )
}

export default App
