export default function Card ({ platform }) {
  // console.log(platform);
  return (
    <div className="mx-auto mb-3 xl:mx-auto">
      <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <a href="/">
          <img src={ platform.image }
            alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
          <div className="px-4 py-3 w-72">
            <span className="text-gray-400 mr-3 uppercase text-xs">plataforma</span>
            <p className="text-lg font-bold text-black truncate block capitalize">{ platform.nombre }</p>
            <div className="flex items-center">
              <p className="text-lg font-semibold text-black cursor-auto my-3">Nº juegos</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}