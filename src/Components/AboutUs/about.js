import React from 'react'
import './about.css'

const about = () => {
    return (
        <section id="AboutUs">
            <div className="backgound_about d-flex align-items-center d-flex justify-content-center">
                <div className="container_background col-12 col-sm-9 col-lg-7 col-xl-6 text-center mx-auto">
                    <div className="text no-transform wow fadeInUp animated">
                        <div className="row mb-3">
                            <div className="col-lg-12 text-center">
                                <h2 className="section-heading text-uppercase fst-italic mb-5">ABOUT US</h2>
                            </div>
                        </div>
                        <div className="row">
                        <p className="fsAbout"><em className='emWord'>Clown Technology Company </em>is a technology company that focuses on electronics, 
                        programming and mechanical services. We provide four service priorities starting from customizing technology devices, 
                        machines and robots, 
                        PCB design and printing services, electronic and 
                        robotic component store and technology education.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default about