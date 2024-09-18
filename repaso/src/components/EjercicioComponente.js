import React, {useState} from 'react'
import PropTypes from "prop-types";
export const EjercicioComponente = ({year}) => {
  
 const [yearNow, setYearNow] = useState(year);

 const next = e =>{
  setYearNow(yearNow+1)
 }

 const after = e =>{
  setYearNow(yearNow-1);
 }
 
 const changeYear = e =>{
  let dato = parseInt(e.target.value);
  
  if(Number.isInteger(dato)){
    setYearNow(dato);
  }else{
    setYearNow(year);
  }
 }
  
  return (
    <div>
        <h2 className='label'>Ejercicio con Eventos y Estado</h2>
        <p className='label'>
         {yearNow}
        </p>
        <button onClick={next}>Siguiente</button>
        &nbsp;
        <button onClick={after}>Anterior</button>
        <p>
          <input
           onChange={changeYear}
           type='text'
           placeholder='cambia año'
          >

          </input>
        </p>
    </div>
  )
}

EjercicioComponente.prototype ={
  year:PropTypes.number.isRequired
}
