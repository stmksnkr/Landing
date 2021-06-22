import React from 'react'
import logo from "../assets/logo.png"
export default function navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <a><img className="img-reponsive logo" src={logo} alt="logo"></img></a>
            <div className="collapse navbar-collapse navbaritems" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                    <a className="navbar-brand" to="#">About</a>
                    <li className="nav-item dropdown">
                        <a className="nav-link active dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Artificial Intelligence
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" to="#">Chat Bot</a></li>
                            <li><a className="dropdown-item" to="#">Another action</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" to="#">Something else here</a></li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link active dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Services
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" to="#">Chat Bot</a></li>
                            <li><a className="dropdown-item" to="#">Another action</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" to="#">Something else here</a></li>
                        </ul>
                    </li>

                   <li className="nav-item"> <a className="navbar-brand" to="#">Contact</a> </li>
                   <li className="nav-item"> <a className="navbar-brand" to="#">Login</a>    </li>
                   <li className="nav-item"> <a className="navbar-brand" to="#">Sign in</a>  </li>
                    {/* <a className="navbar-brand"to="#">Document Capture</a> */}
                </ul>
                {/* <input className="control" type="search" placeholder="Search" aria-label="Search"/> */}
            </div>
        </nav>
    )
}
