import React from 'react';
import Swal from 'sweetalert2'

export default function Home () {

  // Si estoy logeado no puedo entrar en esta rutas
  const user = JSON.parse(localStorage.getItem('user'))
  if (user) {
    window.location.replace('/home')
    return false;
  }

  // console.log(users);
  const handleInputChange = async (e) => {
    e.preventDefault()
    // proceso de login

    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    const data = {
      email,
      password
    }

    const response = await fetch('http://localhost:3002/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    // recibir json de la api
    const json = await response.json()

    if (response.status === 200) {
      // guardar usuario en localStorage
      localStorage.setItem('user', JSON.stringify(json.user[0]))
      Swal.fire({
        title: 'Login!',
        text: 'Do you want to continue',
        icon: 'success',
        confirmButtonText: 'Conticuar',
        timer: 2000
      }).then(() => {
        window.location.href = '/home'
      })

    } else if (response.status === 401) {
      Swal.fire({
        title: 'Error!',
        text: 'Usuario o contraseña incorrecta',
        icon: 'error',
        confirmButtonText: 'Intentar de nuevo',
      })
    }

  }

  return (
    <div className=''>
      <section className="">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
          <a href="/" className="flex items-center mb-6 text-2xl font-semibold text-slate-300	">
            <img className="w-8 h-8 mr-2 rounded-full"
              src="https://pbs.twimg.com/profile_images/1722570264070758400/KRIYpU2v_400x400.jpg" alt="logo" />
            KVL
          </a>
          <div
            className="w-fullrounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 w-1/2">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-slate-300">
                Idenificate con tu cuenta
              </h1>
              <form className="space-y-4 md:space-y-6" action="#" method="post" id="form">
                <div>
                  <label className="block mb-2 text-sm font-medium text-slate-300">
                    Tu correo
                  </label>
                  <input type="email" name="email" id="email"
                    className=" sm:text-sm rounded-lg block w-full p-2.5 "
                    placeholder="name@company.com" required="" />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-slate-300">
                    Tu contraseña
                  </label>
                  <input type="password" name="password" id="password" placeholder="••••••••"
                    className="sm:text-sm rounded-lg block w-full p-2.5 " />
                </div>
                <button onClick={ handleInputChange }
                  className="btn w-full text-slate-300">
                  A la Buhardilla</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )

}
