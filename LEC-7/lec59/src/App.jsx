import { useState } from 'react'

function App() {
  // const [email, setEmail] = useState("");
  // const [pass, setPass] = useState("");

 const [data, setData] = useState({ email: "", password: "" });


  function formSubmit(event){
    event.preventDefault();
//     console.log({ "email": email });
// console.log({ "password": pass });

console.log(data);

  }

  //for different
  // function handleEmail(event){
  //   // console.log("Email:", event.target.value);
  //   setEmail(event.target.value);
  // }

  // // ✅ new password handler
  // function handlePassword(event) {
  //   setPass(event.target.value);
  // }


  //for single 
  function handleEmail(event) {
  setData({ ...data, email: event.target.value });
}

function handlePassword(event) {
  setData({ ...data, password: event.target.value });
}
  return (
    <>
    <form>
      <h1>Form</h1>

      {/* ⚠️ value ke sath onChange dena zaroori hai */}
      {/* <input 
          type="text" 
          placeholder="email" 
          value={email}
          onChange={handleEmail} 
        /> */}

        <input 
  type="text" 
  placeholder="email" 
  value={data.email}          // ✅ controlled via state object
  onChange={handleEmail} 
/>

      <br />

      {/* ✅ second email input */}
      <input 
        type="text" 
        placeholder="email" 
        onChange={handleEmail} 
      />
      <br />

      {/* ✅ defaultValue wala input */}
      <input 
        type="text" 
        placeholder="email" 
        defaultValue={"hello"} 
      />
      <br />

      {/* ✅ password input ke liye handlePassword use kiya */}
      <input 
        type="password" 
        placeholder="password" 
        onChange={handlePassword}
      />
      <br /><br />

      <button onClick={formSubmit}>Login</button>
    </form>
    </>
  )
}

export default App



//an input form element whose component is controlled by react in this way is called as controlled component(value) is controlled component agar value="" agar login sirf first letter so value={}