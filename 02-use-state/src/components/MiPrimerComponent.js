import React,{useState} from 'react'

export const MiPrimerComponent = () => {
  
  const[nombre,setNombre]=useState('Antonio Heredia');

  const cambiarNombre = (e, nombrefijo) =>{
    setNombre(nombrefijo)
  }
  
  return (
    <div>
      <h3>Mi primer useState</h3>
      <hr/>
      <strong className='label'>{nombre}</strong>
      &nbsp;
      <button onClick={e =>cambiarNombre(e,'Antonio Heredia Morante')}>agregar segundo apellido</button>
      <input onChange={e => cambiarNombre(e, e.target.value)} placeholder='escribe'></input>
    </div>
  )
}




