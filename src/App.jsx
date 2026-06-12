import React, { useEffect,useState } from 'react'

const App = () => {
  const [time,setTime]=useState(new Date());
  useEffect(()=>{
const timer=setInterval(()=>{
  setTime(new Date());
},1000)
return()=>clearInterval(timer);
  },[])
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <div style={{width:"300px",height:"300px", display:"flex", alignContent:"center",
    justifyContent:"center",alignItems:"center",flexDirection:"column",border:"2px solid orange"}}>
      <h1 >Digital Watch </h1>
      <p style={{padding:"20px",fontSize:"32px"}}>{time.toLocaleTimeString()}</p>
      </div>
    </div>
  )
}

export default App
