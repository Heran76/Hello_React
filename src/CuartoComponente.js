import React from 'react'

export const CuartoComponente = () => {
  
     const mostraboton =(e,nombre)=>{
        alert("Has dado click"+" "+nombre);
     }

     function dobleclick(e,nombre){
        alert("has hecho doble click "+nombre);
     }

     const hasEntrado = (e, accion)=>{
      alert(`has ${accion} a la caja con el mousse!!!`);
     }

     const estadentro = e =>{
      alert("Estas dentro del input, mete tu nombre")
     }
  
    return (
    
    <div>
     <hr/>
     <h2>Eventos botonos</h2>
     <p>
     {/*Evento doble click */}
     <button onClick={e =>(mostraboton(e,"Antonio"))}>haz un click</button>
    </p> 
    <p>
        <button onDoubleClick={e=>(dobleclick(e,"Antonio"))}>Haz doble click</button>
    </p>
    <hr/>
      <div id="caja"
          onMouseEnter={e =>hasEntrado(e,"Entrado")}
          onMouseLeave={e =>hasEntrado(e,"salido")}
      
      >Pasa por encima
      </div>
      <p>
         <input onFocus={estadentro} placeholder='Mete tu nombre'></input>
      </p>
    
   </div>
  )
}
