import React, {useState} from 'react';
import './App.css';
import { AgregarCategoria } from './componentes/AgregarCategoria';
import {ColeccionGif} from './componentes/ColeccionGif'

function App() {

  const [categorias, setCategorias] = useState(['Allegra'])

 /*  const add = () =>{
    setCategorias([...categorias,'Macarena'])
  } */    // agrega macarena a la lista

  return (
    <div className="App">
      <h1>Gif App</h1>
      <AgregarCategoria setCategorias={setCategorias} />
       {/* <button onClick={add}>Agregar</button> //al dispararse el evento se agrega a la lista */} 
        <ol>
          {
            categorias.map(categoria=> (
              <ColeccionGif 
              key={categoria}
              categoria={categoria} />
             
            )
            )
          }
        </ol>

 
    </div>
  );
}

export default App;
