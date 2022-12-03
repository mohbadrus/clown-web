import React from 'react'
import './footer.css'

const footer = () => {
    return (
        <footer className="text-white pt-5 pb-4">
            <div className="container text-md-left">
                <div className="row text-md-left">
                    <div className="col-md-3 col-lg-3 col-xl-3 ms-auto mt-3">
                        <h5 className="subtitle text-center text-uppercase mb-4 font-weight-bolt text-warning">Clown Technology</h5>
                        <p className='text-center'>technology company that focuses on electronics,
                            programming and mechanical services</p>
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-3 ms-auto mt-3">
                        <h5 className="subtitle text-center text-uppercase mb-4 font-weight-bolt text-warning">SERVICES</h5>
                        <p className='ms-5'><a href="" className='text-white ms-5'>Project</a></p>
                        <p className='ms-5'><a href="" className='text-white ms-5'>Store</a></p>
                        <p className='ms-5'><a href="" className='text-white ms-5'>Electronic</a></p>
                        <p className='ms-5'><a href="" className='text-white ms-5'>Education</a></p>
                    </div>
                    <div className="col-md-3 col-lg-3 col-xl-3 ms-auto mt-3">
                        <h5 className="subtitle text-center text-uppercase mb-4 font-weight-bolt text-warning">Contact</h5>
                        <p><i className="bi bi-house-door-fill me-3"></i>Jl. Kejawan Gebang IV No.19B, Surabaya, Jawa Timur</p>
                        <p><i className="bi bi-envelope-fill me-3"></i>itsclownproject@gmail.com</p>
                        <p><i className="bi bi-telephone-fill me-3"></i>+6285-4618-4422</p></div>
                    <div className="col-md-3 col-lg-3 col-xl-3 ms-auto mt-3">
                        <h5 className="subtitle text-center text-uppercase mb-4 font-weight-bolt text-warning">Social Media</h5>
                        <ul className="socials">
                            <li><a href=""><i className="bi bi-linkedin"></i></a></li>
                            <li><a href="https://www.instagram.com/itsclownproject/">
                                <i className="bi bi-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default footer