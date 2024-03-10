import Card from "../Card"
import React, { useEffect, useState } from 'react';
// import './Container.scss'
export default function Home () {

  // Peticion a la api para sacar las plataformas de videojuegos asincrona
  const [plataformas, setPlataformas] = useState(null)
  useEffect(() => {
    async function fetchPlataformas () {
      const response = await fetch(process.env.REACT_APP_API_URL + '/plataformas/4')
      const data = await response.json()
      setPlataformas(data)
    }
    fetchPlataformas()
  }
    , [])


  return (

    // Mapeo de las plataformas de videojuegos
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 content-between">
        { plataformas ? plataformas[0].map((plataforma) => {
          // console.log(plataforma.id);
          return <Card platform={ plataforma } key={ plataforma.id } />
        }) : <p>Cargando...</p> }

      </div>
    </div>
  )
}