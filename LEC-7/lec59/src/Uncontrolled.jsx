import { useRef } from "react";

function Uncontrolled() {
let emailRef=useRef();
let h1Ref=useRef();   //use ref re render nhi hota h 
let passRef=useRef(); 

// console.log(emailRef)
  function formSubmit(event) {
    event.preventDefault();
    // console.log(emailRef.current.value);
    console.log({email,password});
      emailRef.current.style.backgroundColor = "red";
      console.log(pas)
      h1Ref.current.innerHTML = "Rags";

  }

  return (
    <>
    
        <h1 ref={h1Ref}>Uncontrolled</h1>
<form>
        <input 
          type="text" 
          placeholder="email" ref={emailRef}
        />
        <br />

        <input 
          type="password" 
          placeholder="password" ref={passRef}
        />
        <br /><br />

        <button onClick={formSubmit}>Login</button>
      </form>
    </>
  )
}

export default Uncontrolled;
