import React, {useState} from 'react';
import './App.css';
import { AgregarCategoria } from './componentes/AgregarCategoria';

function App() {

  const [categorias, setCategorias] = useState(['Allegra','Bruno','Emmanuel'])

  const add = () =>{
    setCategorias([...categorias,'Macarena'])
  }

  return (
    <div className="App">
      <h1>Gif App</h1>
      <AgregarCategoria setCategorias={setCategorias} />
      <button onClick={add}>Agregar</button>
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
