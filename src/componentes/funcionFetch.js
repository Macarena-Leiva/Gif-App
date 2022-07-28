

export const getGif = async( categoria ) =>{                                                                    //encodeURI funcion de js para reemplazar espacios si los hubiera
    const url = `https://api.giphy.com/v1/gifs/search?api_key=011mrI2NiF8x2BdKKwy7NQWAsn3KaAGn&q=${encodeURI(categoria)}&limit=10`
  /* const url ='https://api.giphy.com/v1/gifs/search?api_key=011mrI2NiF8x2BdKKwy7NQWAsn3KaAGn&q=cats&limit=10' */ //Solo para traer cats
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

  return gifs

  

  }