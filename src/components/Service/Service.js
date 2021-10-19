import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Service = () => {

    const [service, setService] = useState([]);

    useEffect(() => {
        fetch('./fakedata.JSON')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    const Service = service.slice(0, 6);

    return (
        <div  className=" p-5">
             <h2 className="text-center mb-4 text-danger">Our Services</h2>
             <div className="container">
                 <div className="row row-cols-lg-3">
                 {
                        Service?.map(service => <Card service={service}></Card>)
                    }
                 </div>
             </div>
            
        </div>
    );
};

export default Service;