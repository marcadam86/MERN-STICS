import React from 'react'
import logo from '../../assets/logo.png'
import './Header.css'
import { Link } from 'react-router-dom'
import { categories } from '../../data'

function Header() {
    return (
        <div className="header-wrapper">
            <div className="header-inner">
                <div className="item">
                    <Link to="/"><img src={logo} alt="" /></Link>
                </div>
                <div className="item">
                    <ul>
                        <a href=""></a>
                        <li><Link to="/page/location">Store Locator</Link></li>
                        <li><Link to="/account/login">Register/Login</Link></li>
                    </ul>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* <li className="nav-item">
                            <Link className="nav-link" to="/collection/everyday-value">Everyday Value</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/collection/make-it-a-meal">Make it a meal</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/collection/signature-box">Signature Box</Link>
                            </li> */}

                            {
                                categories.map((category) => <li className="nav-item">
                                <Link className="nav-link" to={`/collection/${category}`}> { category}</Link>
                                </li>)
                            }
                        </ul>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#">0</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
