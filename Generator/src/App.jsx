import { useState,useCallback, useEffect,useRef } from 'react'
import './App.css'
function App() {
  const [length,setLength] =useState(8)
  const [numberAllowed, setNumberAllowed]=useState(false);
  const [charAllowed,setCharAllowed]=useState(false);
  const [password, setPassword]=useState("")
  //useRef hook
  const passwordRef=useRef(null)

  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*()_-+={}[]`~<>"

    for(let i=0; i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }
    setPassword(pass)


  },[length,numberAllowed,charAllowed,setPassword])


  const cpyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,99)
    window.navigator.clipboard.writeText(password)
  },[password])


  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])


  return (
    <>
    <div className="w-full max-w-md bg-gray-800 shadow-lg rounded-lg p-6 my-8 mx-auto">
      <h1 className="text-white text-center text-xl font-semibold mb-4">Password Generator</h1>
      
      <div className="flex items-center border-2 border-orange-500 rounded-lg overflow-hidden">
        <input 
          type="text"
          value={password}
          className="w-full py-2 px-4 bg-transparent text-white outline-none placeholder-gray-400"
          placeholder="Generated password"
          readOnly
          ref={passwordRef}
        />
        <button 
        onClick={cpyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range"
          min={6}
          max={100}
          value={length}
          className='crusor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}
           />
           <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={()=>{
            setNumberAllowed((prev)=>!prev)
          }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={charAllowed}
          id="charInput"
          onChange={()=>{
            setCharAllowed((prev)=>!prev)
          }}
          />
          <label htmlFor="charInput">Characters</label>
          </div>
      </div>
    </div>
  </>
  
  


  )
}

export default App
