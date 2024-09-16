import React from 'react'
import PropTypes from 'prop-types'

export const TercerComponente = ({nombre,apellido,ficha}) => {
  return (
    <div>
        <hr></hr>
        <ul>
            <li>{nombre}</li>
            <li>{apellido}</li>
            <li>{ficha.altura}</li>
            <li>{ficha.grupo}</li>
            <li>{ficha.salud}</li>
        </ul>
    </div>
  )
}

TercerComponente.propTypes={
    nombre : PropTypes.string.isRequired,
    apellido: PropTypes.string,
    ficha: PropTypes.object,
}

