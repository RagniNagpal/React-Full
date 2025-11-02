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
// import React from "react";
// import ReactDOM from 'react-dom/client';
// import Ragni from "./Ragni";

// let h1=<h1>Hello</h1>
// console.log(h1);
// let root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Ragni />);


import React from "react";
import ReactDOM,* as Hello from "react-dom/client";
// default import
// import Ragni from "./Nishant";
import './index.css'
// named import
import { Ragni as CodeThread } from "./Ragni";

let root = Hello.createRoot(document.getElementById("root"));
root.render(<CodeThread/>)
// root.render(<Nishant></Nishant>)