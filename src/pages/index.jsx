import React, { useEffect, useState } from "react";

const Project = () => {
  const [count,setCount] = useState(0)
  const [timerId,setTimerId] = useState()
  const [reset,setReset] = useState(false)
  

  useEffect(()=>{
    if(reset == true) return
     
   let timerId = setTimeout(()=>{
        setCount(count+1)
    },1000)

    setTimerId(timerId)
    
    return ()=>{
      clearTimeout(timerId)
    }
   
  },[count ,reset])

  const replay = () => {
    setCount(count+1)
    setReset(false)
  }

  const handleReset = () => {
    setReset(true)
    setCount(0)
    clearTimeout(timerId)
    
  }
  return(
    <>
    <h1>count : {count} </h1>

    <button onClick={()=>clearTimeout(timerId)}>stop</button>
    <button onClick={replay}>replay</button>
    <button onClick={handleReset}>reset</button>
    </>
  )
}

export default Project