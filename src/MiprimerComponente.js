import React from "react";

const MiprimerComponente = ()=>{
   
     let nombre = 'Antonio';
     let apellido = 'Heredia'

     let usuario ={
        nombre : 'Marcos',
        apellido: 'Castro'
     };
    
    
    
    return (
        <div className="micomponente">
           <hr></hr>
           <p>Mi primer componente</p>
            <hr></hr>
            <p>Datos atraves de un objeto</p>
            <span>------------------</span>
            <ul>
                <li>El nombre del usuario es  :  {usuario.nombre}</li>
                <li>EL apellido del usuario es : {usuario.apellido}</li>
           
            </ul>
            
            <hr></hr>
            <p> Nombre con variables</p>
            <span>------------------</span>
             <ul>
                <li>EL nombre es  : <strong>{nombre}</strong></li>
                <li>EL apellido es :  <strong>{apellido}</strong></li>
             </ul>
            <hr></hr>
            <p>Listado de programas</p>
            <span>------------------</span>
            <ul>
                <li>REACT</li>
                <li>VITE</li>
                <li>Angular</li>
            </ul>
        </div>
        
    ); 
       
}

export default MiprimerComponente