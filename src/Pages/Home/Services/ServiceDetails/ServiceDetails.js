import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './ServiceDetails.css';

const ServiceDetails = () => {
  const service = useLoaderData() || {};
  const { _id, serviceName, price, imageURL, description } = service;
  console.log(service);

  return (
    <div className="container pt-5">
      <div className="service-details-card card mb-3">
        <img src={imageURL} className=" card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{serviceName}</h5>
          <p className="card-text">{description}</p>
          <h3 className="py-3">
            Price: <span>{price}</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
