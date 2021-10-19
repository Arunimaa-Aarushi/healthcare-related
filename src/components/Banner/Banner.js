import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-4 col-md-4 col-sm-12 text-light">
                        <div className="intro">
                            <h1>WELCOME TO OUR 
                                <h1 className="span"> CITY GENERAL HOSPITAL!</h1></h1>
                            <p>The hospital that feeds you refined sugar, white bread, canned soup, bouillon cubes, and frozen vegetables should be closed by the health department as a menace to the public health.!</p>
                            
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12"></div>
                </div>
            </div>
        </div>
    );
};
export default Banner;