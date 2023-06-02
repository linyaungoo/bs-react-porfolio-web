import React from 'react'
import myLogo from '../diamond.png'
const Navbar = () => {
  return (
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className='container'>
        <div className="container-fluid ">
            <a className="navbar-brand text-light" href="#"><img className="logo" src={myLogo}/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link text-light" href="#">Link</a>
                </li>                         
            </ul>
            
            </div>
        </div>
        </div>
        </nav>
  )
}

export default Navbar

