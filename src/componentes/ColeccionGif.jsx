import React,{useState,useEffect} from 'react'
import { getGif } from './funcionFetch'
import {GifItem} from './GifItem'

export const ColeccionGif = ({categoria}) => {

  const [imagenes, setImagenes] = useState([])

 /*  const [contador,setContador] = useState(0) // para setear el boton y probar el useEffect */

  useEffect(()=>{
   getGif(categoria)
   .then(setImagenes)     /* getGif() */ // que se ejecute esta funcion cuando el componente es renderizado por primera vez
  },[categoria]) // se agrega un array de dependencias, para que el useEffect se ejecute solo una unica vez
//si la categoria cambia que la vuelva a ejecutar 
  

  return (
    <>
        <h3>{categoria}</h3>
{/*         <h3>{contador}</h3>
        <button onClick={()=>setContador(contador+1)}></button> //para probar el useEffect que ese ejecute la funcion una sola vez por mas que se siga haciendo click en el boton */}
        <div className='cardContainer'>
              {                //desestructuracion         
                /* imagenes.map(({ id,title })=>(  //return implicito ya que no pongo llaves, solo parentesis para retornar objeto
                  <li key={id} >{title}</li> //muestra titulos en pantalla
                )) */
                 //remplazo el elemento li por un componente

                imagenes.map(img=>(
                  <GifItem 
                  key={img.id} 
                  {...img} /> // spread operator del img
                ))
                
              }
        </div>

    </>
  )
}
