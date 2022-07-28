import React, { useState } from 'react'

export const AgregarCategoria = ({setCategorias}) => {                      
const[valorInput, setValor]=useState('');  //valor inicial en input

const manejadorCambioInput = (e) => {
    setValor(e.target.value)  //para manejar cuando hay un cambio en el input
}


const manejoSubmit = (e) =>{
    e.preventDefault()     // para prevenir el comportamiento por defecto del navegador
            //trim()Borra los espacios que pueda tener antes y despues
    if(valorInput.trim().length > 2){ //validacion para que se inserte en la lista solo si se escriben mas de 2 caracteres
    setCategorias(cate => [valorInput, ...cate]) //se inserta nuevo valor del input en la lista del componente app
    setValor(''); //Al hacer enter en el valor se borra para ingresar uno nuevo
}
    console.log('Submit listo')
}

  return (
    <form onSubmit={manejoSubmit}>
    {/* <h2>{valorInput}</h2> */}  {/* para ver el cambio al ultimo valor actualizado que se ingresa por input */}

    <input 
    type='text' 
    value={valorInput}
    onChange={manejadorCambioInput}
    />

</form>
  )

}
