import React from 'react';
import aboutSideImg from './hospital-building.jpeg';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const About = () => {
    return (
        <div>
            <Navbar />
            <div className="container p-5">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-6 col-md-5 col-sm-12">
                    <img className="w-100" src={aboutSideImg} alt="" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                    <h3>About Us</h3>
                    <p>City General Hospital Dhaka is part of City Group, present in over 25 cities, with 30+ hospitals, 15 clinics and 50+ diagnostic centers across 2 continents, in their mission to provide quality healthcare in emerging markets.Evercare Hospital Dhaka is the first and only hospital to be accredited by the Joint Commission International (JCI) 5 times in a row. The JCI Gold Seal of Approval is a globally recognized and reflects an organization’s commitment to best practices in quality and patient safety. City General Hospital Dhaka was first accredited by JCI in 2008 and till date remains the only hospital in Bangladesh to hold this international recognized standard. Accreditation by recognized international institutions such as JCI are crucial to drive compliance and improve quality and cost-effectiveness across the hospitals and has become a priority for healthcare organizations across the world.</p>

                    </div>

                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;