import React from 'react'

export const SegundoComponente = () => {
  
  //let libros = ["Harry Porter", "Juegos de Tronos","Clear Code"]

  let libros=[]
  return (
    <div>
       {libros.length >=1 ?
       (<ul>
          {libros.map((libros,indice)=>{
            return <li key={indice}>{libros}</li>
          })}
       </ul>)
        :(<p>No Hay libros</p>)
       }
    </div>
  )
}

