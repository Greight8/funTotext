import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    const [activeItem, setActiveItem] = useState("home");

    const handleClick = (item) => {
        setActiveItem(item);
    };

    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className={`nav-item ${activeItem === "home" ? "active" : ""}`}>
                            <Link className="nav-link" id="home"
                                onClick={() => handleClick("home")} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className={`nav-item ${activeItem === "about" ? "active" : ""}`}>
                            <Link className="nav-link" onClick={() => handleClick("about")} to="/about">{props.aboutText}</Link>
                        </li>
                    </ul>
                </div>
                <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.modeText}</label>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

// default props :- we can set default value of our prop here
Navbar.defaultProps = {
    title: "Set title here",
    aboutText: "Set about here"
}