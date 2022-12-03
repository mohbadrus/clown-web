import React from 'react'
import './service.css'

const service = () => {
    return (
        <section class="service-section d-flex align-items-center d-flex justify-content-center" id="services">
            <div class="container">
                <div class="row mb-3">
                    <div class="col-lg-12 text-center">
                        <h2 class="section-heading text-uppercase fst-italic mb-4">Services</h2>
                        </div>
                    </div>
                <div class="container-fluid d-flex-justify-content-center">
                    <div class="row">
                        <div class="col-md-3">
                        <div class="card text-center">
                            <div class="overflow">
                                <img src="Image/img-hierarchy/clown-project.jpg" class="card-img-top img-service" alt="..." /></div>
                            <div class="card-body">
                                <h5 class="card-title"></h5>
                                <p class="card-text">CUSTOMIZE SERVICES OF TOOLS, DEVICE, MACHINERY AND TECHNOLOGY</p></div></div></div>
                        <div class="col-md-3"><div class="card text-center">
                            <div class="overflow">
                                <img src="Image/img-hierarchy/clown-store.jpg" class="card-img-top img-service" alt="..." /></div>
                            <div class="card-body">
                                <h5 class="card-title"></h5>
                                <p class="card-text">ROBOTIK AND ELECTRONIC STORE</p>
                            </div>
                        </div>
                        </div>
                        <div class="col-md-3">
                            <div class="card text-center">
                                <div class="overflow"><img src="Image/img-hierarchy/clown-elec.jpg" class="card-img-top img-service" alt="..." /></div>
                                <div class="card-body">
                                    <h5 class="card-title"></h5>
                                    <p class="card-text">PCB DESIGN AND PRINTING SERVICES</p></div></div></div>
                        <div class="col-md-3">
                            <div class="card text-center">
                                <div class="overflow">
                                    <img src="Image/img-hierarchy/clown-edu.jpg" class="card-img-top img-service" alt="..." /></div>
                                <div class="card-body">
                                    <h5 class="card-title"></h5>
                                    <p class="card-text">TUTORING A ROBOTIC SYSTEM FOR ALL STUDENT STAGE CLASS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default service