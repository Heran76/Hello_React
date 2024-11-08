import React, { useEffect, useState } from 'react'

export const UseAjax = () => {
  
  const[usuarios, setUsuarios]=useState([]);
  const getusuarios = ()=>{
    setUsuarios([
        {
            id: 1,
            email: "Marcos@gmail.com",
            first_name: "Marcos",
            last_name: "Casatro",
        },
        {
            id: 2,
            email: "Antonio@gmail.com",
            first_name: "Antonio",
            last_name: "Heredia",
        },
        {
            id: 3,
            email: "Jose@gmail.com",
            first_name: "Jose",
            last_name: "fernandez",
        },
    ])
  }

  const getusuariosAjaxPms = ()=>{
    fetch("https://reqres.in/api/users?page=1")
    .then(respuesta=>respuesta.json())
    .then(
        resultado_final =>{
          setUsuarios(resultado_final.data)
        },
        error =>{
          console.log(error);
        }
    );
  }
  
  
  useEffect(()=>{
    //getusuarios();
   getusuariosAjaxPms();
  },[]);
  
    return (
    <div>
        <h2>listado de usuarios</h2>
        <hr></hr>
        <ol className='usarios'>
            {
                usuarios.map(usuario =>{
                    return <li key={usuario.id}>{usuario.first_name}{usuario.last_name}</li>
                })
            }    
        </ol>
    </div>
  )
}

