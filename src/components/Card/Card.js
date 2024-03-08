export default function Card () {
  return (
    <div className="m-3">
      <div class="relative grid h-[40rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
        <div
          class="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://via.placeholder.com/400')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
          <div class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
        </div>
        <div class="relative p-6 px-6 py-14 md:px-12">
          <h2 class="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
            Plataforma
          </h2>
          <h5 class="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
            Contenido
          </h5>
          <a href="/" class="btn btn-primary">ver mas</a>
        </div>
      </div>
    </div>
  )
}