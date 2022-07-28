import React,{useState,useEffect} from 'react'
import {GifItem} from './GifItem'

export const ColeccionGif = ({categoria}) => {

  const [imagenes, setImagenes] = useState([])

 /*  const [contador,setContador] = useState(0) // para setear el boton y probar el useEffect */

  useEffect(()=>{
    getGif() // que se ejecute esta funcion cuando el componente es renderizado por primera vez
  },[]) // se agrega un array de dependencias, para que el useEffect se ejecute solo una unica vez

  const getGif = async() =>{
  const url ='https://api.giphy.com/v1/gifs/search?api_key=011mrI2NiF8x2BdKKwy7NQWAsn3KaAGn&q=$cats&limit=10'
  const resp = await fetch(url);
  const { data } = await resp.json();
       //desestructuracion para acceder a la data que esta dentro de data
  const gifs = data.map(img=>{
    return{//transforma cada una de los elementos del array
      id:img.id,                  //retorno un nuevo objeto con la info que me interesa
      title:img.title,
      url:img.images?.downsized_medium.url
                 // utilizo ? y pregunto si vienen la imagenes las muestro, por las dudas para asegurarse
    }
  })

  console.log(gifs)

  setImagenes(gifs) //llamo a setImagenes y el nuevo estado es gifs

  }

  return (
    <div>
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

    </div>
  )
}
