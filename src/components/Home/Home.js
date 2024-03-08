import Card from "../Card"
// import './Container.scss'
export default function Home () {

  return (
    // seccion Responsive en tailwindcss centrada en la pantalla, 3 elementos por linea

    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}