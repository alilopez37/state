import { useState } from "react";
import { Helmet } from "react-helmet-async";

function Home() {
  const [characters, setCharacters] = useState([])
  const handleClick = (e) => {
    fetch("https://rickandmortyapi.com/api/character")
    .then(response => {
      if (response.ok)
        return response.json()
      else
        alert('No fue posible establer comunicación con el server')
    })
    .then(data => {
      setCharacters(data.results)
    })
    .catch(error =>{
      console.log(error);
    })
  };
  return (
    <>
      <Helmet>
        <title>App Ventus - Login</title>
      </Helmet>
      <button onClick={handleClick}>Cargar datos</button>
      <div>
        <ol>
          {characters.map(item => <li>{item.name}</li>)}
        </ol>
      </div>
    </>
  );
}

export default Home;
