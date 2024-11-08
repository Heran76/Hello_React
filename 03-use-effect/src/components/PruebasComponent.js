import React, { useEffect, useState } from 'react'

export const PruebasComponent = () => {
  
  const [nombre, setNombre]= useState("Antonio")

  const cambiar = e =>{
    setNombre(e.target.value)
  }

  useEffect(()=>{
    console.log("has introducido un cambio");
  },[])
  
  return (
    <div>
      useState - useEffect
      <hr></hr>
      <strong className='label'>{nombre}</strong>
      <form>

      
      <input
           type='text'
           onChange={cambiar}
           placeholder='escribe'
      ></input>

      </form>
      <hr></hr>
    </div>
  )
}
