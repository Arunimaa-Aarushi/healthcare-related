import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Navbar from '../Navbar/Navbar';

const ServiceDetails = () => {

    const {id} = useParams();

    const [service, setService] = useState([]);

    useEffect(() => {
        fetch('/fakedata.JSON')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    const serviceDetail = service.find(s => s.id == id);

    return (
       <div>
           <Navbar />
            <div className="container p-5">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-6 col-md-5 col-sm-12">
                    <img className="w-100" src={serviceDetail?.image} alt="" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                    <h1 className="text-danger">{serviceDetail?.name}</h1>
                    <p>{serviceDetail?.description}</p>

                    </div>

                </div>

            </div>
       </div>
    );
};

export default ServiceDetails;