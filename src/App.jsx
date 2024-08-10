import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  useEffect(()=>{
    const frame = document.getElementById('frame-box');
    console.log(frame)
    if(frame){
      frame.contentWindow.postMessage("", 'https://globaltravel-drinkiq.diageoplatform.com');
    }

  },[])

  return (
    
    <>
      <div>
        <iframe id={"frame-box"} src ={"https://globaltravel-drinkiq.diageoplatform.com/en-gb"} height={"500"} width={"1000"}/>
        
        
      </div>
    </>
  )
}

export default App
