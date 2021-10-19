import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {

    console.log(props.services);
    const {image , name , id } = props.service ;

    return (
        <div className="mb-5">
            <div  className="col">
                <div className="card h-100 shadow-lg border-1">
                <img height="200px" src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <Link to={`/service/${id}`}>
                <button className="btn btn-danger">Read More</button>
                </Link>
                </div>
                </div>

            </div>
        </div>
    );
};

export default Card;