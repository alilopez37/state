import { useState, useEffect} from "react";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import '@sweetalert2/theme-bulma'

function Home() {
  const [characters, setCharacters] = useState([])
  //const [i, setI] = useState(0)
  let i = 0
  const handleClick = (e) => {
    Swal.fire({
      
      title: "Good job!",
      text: "Upppss!!! Ocurrio un error",
      icon: "warning"
    });
  };

  useEffect(()=> {
    fetch("https://rickandmortyapi.com/api/character")
    .then(response => {
      if (response.ok)
        return response.json()
      else
        alert('No fue posible establer comunicación con el server')
    })
    .then(data => {
      setCharacters(data.results)
      console.log(data.results);
    })
    .catch(error =>{
      console.log(error);
    })  
  },[i])

  return (
    <>
      <Helmet>
        <title>App Ventus - Login</title>
      </Helmet>
      <button onClick={handleClick}>Cargar datos</button>
      <p>{i}</p>
      <div>
        <ol>
          {characters.map(item => <li>{item.name}</li>)}
        </ol>
      </div>
    </>
  );
}

export default Home;
