import React, { createRef } from 'react';
import './App.css';

import Courses ,{createMessageMutation}from "./Courses";
import { useMutation,  } from "@apollo/client"
function App() {
  const messageValue = createRef()
  const [course] = useMutation(createMessageMutation);
  
  const submit = () => {
    let message = messageValue.current.value;
    course({ variables:  {book: message }  })
    .then(data=>{
      console.log('response',data)
    }).catch(error=>{
      console.log("errorr",error)
    })
  }
  return (
    
      
    <div>
    <div className="App">
      <input ref={messageValue} placeholder="message" />
      <button onClick={submit}>add</button>
    </div>
      <h1>Hello World</h1>
      <Courses/>
    </div> 
   
  );
}

export default App;
