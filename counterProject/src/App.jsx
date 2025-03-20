import { useState } from 'react';

import './App.css'

function App() {
var[counter,setCounter]=useState(15)
// let counter=15
const addValue=()=>
  {
    // counter=counter+1;
    if(counter<20){
    setCounter(counter+1)
    
  }
  console.log(counter);
}

const removeValue=()=>{
  // counter=counter-1;
  if(counter>0){
  setCounter(counter-1)
  
  }
  console.log(counter);
}

  return (
    <>
      <div>
        <h1>Chai aur React</h1>
        <h3>Counter value:{counter}</h3>
        <button onClick={addValue}>Add value</button>
        <br />
        <button onClick={removeValue}>Remove value</button>

        
      </div>
    </>
  )
}

export default App
