import "./Header.scss";

export default function Header () {

    // ver localStorage
    const userS = localStorage.getItem('user');
    const user = userS ? JSON.parse(userS) : null;

    // console.log(user);

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={ 0 } role="button" className="btn btn-ghost lg:hidden">
                        <img className="img-responsive" src="https://via.placeholder.com/150" alt="logo" />
                    </div>
                    <ul tabIndex={ 0 } className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a href="/">Item 1</a></li>
                        <li>
                            <a href="/">Parent</a>
                            <ul className="p-2">
                                <li><a href="/">Submenu 1</a></li>
                                <li><a href="/">Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a href="/">Item 3</a></li>
                    </ul>
                </div>
                <a href="/" className="btn btn-ghost text-xl">
                    <img className="img-responsive" src="./img/kvl/kvl_img.jpg" alt="logo" />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a href="/home">Home</a></li>
                    <li>
                        <details>
                            <summary>Plataformas</summary>
                            <ul className="p-2">
                                <li><a href="/plataformas">Ver todas</a></li>
                                <li><a href="/">Nueva plataforma</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a href="/">Item 3</a></li>
                </ul>
            </div>

            { (() => {
                if (user === null) {
                    return (
                        <div className="navbar-end">
                            <a href="/registro" className="btn">Registro</a>
                            <a href="/login" className="btn btn-primary">login</a>
                        </div>
                    )
                } else {
                    return (
                        <div className="navbar-end">
                            <a href="/logout" className="btn btn-primary">{ user.username }</a>
                        </div>
                    )
                }
            })() }


        </div>
    )

}