import React from 'react'
import './navbar.css'

const navbar = () => {
    return (
        <>
            <div className='container'>
                <div className='menu-bar m-2 '>
                    <div className="navbar navbar-expand-lg">
                        <a className="navbar-brand" href="#">
                            <img src="Image/img-hierarchy/clown-logo.png" alt="" />
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <nav className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <ul className="navbar-nav ms-auto">
                                <li className='nav-item'>
                                    <a className="nav-link" href="#">Home</a>
                                </li>
                                <li className='nav-item'>
                                    <a className="nav-link" href="#">About</a>
                                </li>
                                <li className='nav-item'>
                                    <a className="nav-link" href="#">Services</a>
                                </li>
                                <li className='nav-item'>
                                    <a className="nav-link" href="#">Contact Us</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="hero row container">
                    <div>
                        <h2>Easily Technology for Everybody</h2>
                        <p className='fst-italic'>Prioritizing customer satisfication,
                            we provide the best technology services,
                            for unlimited use of technology for everybody</p>
                        <a href="" className="hero-button">See more</a>
                    </div>
                    <div className="row">
                        <img src="Image/img-add/industri-4.0.jpeg" alt="" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default navbar