import Swal from "sweetalert2";
export default function Registro ({ children, bg }) {

  const handleInputChange = async (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === '' || password === '' || username === '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Todos los campos son obligatorios',
      })
      return;
    }

    if (password.length < 6) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'La contraseña debe tener al menos 6 caracteres',
      })
      return;
    }

    const data = {
      username,
      email,
      password
    }

    // Datos enviados
    // console.log(data);

    const response = await fetch('http://localhost:3002/user', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    // Respuesta server
    console.log('Respuesta server');
    const json = await response.json()

    console.log(json);

    if (response.status === 400) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El usuario ya existe',
      })
    } else if (response.status === 201) {
      Swal.fire({
        icon: 'success',
        title: 'Usuario registrado',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        window.location.href = '/login'
      })
    }
  }

  return (
    <>
      <section className="">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a href="/" className="flex items-center mb-6 text-2xl font-semibold text-slate-50">
            <img className="w-8 h-8 mr-2 rounded-full"
              src="https://pbs.twimg.com/profile_images/1722570264070758400/KRIYpU2v_400x400.jpg" alt="logo" />
            KVL
          </a>

          <div
            className="w-fullrounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 w-1/2">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-slate-50">
                Crear cuenta
              </h1>
              <form className="space-y-4 md:space-y-6" action="#" method="post" id="form">
                <div>
                  <label className="block mb-2 text-sm font-medium text-slate-50">
                    Nickname
                  </label>
                  <input type="text" name="username" id="username"
                    className=" sm:text-sm rounded-lg block w-full p-2.5 "
                    placeholder="Forcenfire#123" />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-slate-50">
                    Tu correo
                  </label>
                  <input type="email" name="email" id="email"
                    className=" sm:text-sm rounded-lg block w-full p-2.5 "
                    placeholder="name@company.com" />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-slate-50">
                    Tu contraseña
                  </label>
                  <input type="password" name="password" id="password" placeholder="••••••••"
                    className="sm:text-sm rounded-lg block w-full p-2.5 " />
                </div>
                <button onClick={ handleInputChange }
                  className="btn w-full text-slate-300">
                  A la guardilla</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}