import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
const anotherElement=(
  <a href="https://google.com" target='_blank'>Visit google</a>
)
var username="prashant"
const reactElement=React.createElement(
  "a",
  {href:"https://google.com",target:"_blank"},
  "click me to visit google",
  username



)

createRoot(document.getElementById('root')).render(
  
   <App/>

)
