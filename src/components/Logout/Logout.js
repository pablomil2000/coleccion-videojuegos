import Swal from "sweetalert2";
export default function Logout () {
  localStorage.removeItem('user');

  return (
    Swal.fire({
      title: 'Login!',
      text: 'Do you want to continue',
      icon: 'success',
      confirmButtonText: 'Conticuar'
    }
    ).then(function () { return window.location.href = '/' })
  )


}