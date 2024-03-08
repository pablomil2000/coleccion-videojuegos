// import './Container.scss'
export default function Error ({ children, bg }) {
  return (
    <section class="bg-white dark:bg-gray-900 ">
      <div class="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
        <div class="wf-ull lg:w-1/2">
          <p class="text-xl font-bold text-blue-500 dark:text-blue-400">404 error</p>
          <h1 class="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">Pagina no encontrada</h1>
          <p class="mt-4 text-gray-500 dark:text-gray-400">Ups, esta pagina no existe, vuelve a intentarlo en otro momento:
          </p>

          <div class="flex items-center mt-6 gap-x-3">
            <a href="/home"
              class="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">

              🏠 Volver al Inicio
            </a>
          </div>
        </div>

        <div class="relative w-full mt-8 lg:w-1/2 lg:mt-0">
          <img class=" w-full lg:h-[32rem] h-80 md:h-96 rounded-lg object-cover "
            src="https://t3.ftcdn.net/jpg/02/61/08/76/360_F_261087622_8eRI0TAwDAyabS1b0Uifx1wKqHzA41r3.jpg" alt="" />
        </div>
      </div>
    </section>
  )
}