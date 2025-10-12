// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


// main.jsx
import React from "react";
import ReactDOM from 'react-dom/client';
import Ragni from "./Ragni";

let h1=<h1>Hello</h1>
console.log(h1);
let root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Ragni />);