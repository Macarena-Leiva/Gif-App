import React, {useState} from 'react';
import './App.css';
import { AgregarCategoria } from './componentes/AgregarCategoria';

function App() {

  const [categorias, setCategorias] = useState(['Allegra','Bruno','Emmanuel'])

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
            categorias.map(categoria=> {
              return <li key={categoria}>{categoria}</li>
            })
          }
        </ol>

 
    </div>
  );
}

export default App;
