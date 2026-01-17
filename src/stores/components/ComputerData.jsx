import React from "react";
import { computerData } from "../data/computers";

const ComputerData = () => {
  const displayComputers = computerData?.slice(0, 8) || [];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 fw-bold text-primary">Computers & Laptops</h2>

      <div className="row g-4">
        {displayComputers.map((comp) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={comp.id}>
            <div className="card h-100 shadow-sm border-0 hover-card">
              <div className="card-img-top bg-light p-3 d-flex align-items-center justify-content-center" style={{ height: '220px' }}>
                <img
                  src={comp.image}
                  alt={comp.model}
                  loading="lazy"
                  className="img-fluid"
                  style={{ maxHeight: '200px', objectFit: 'contain' }}
                />
              </div>
              
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-dark fw-semibold mb-3" style={{ minHeight: '48px' }}>
                  {comp.model}
                </h5>

                <p className="card-text text-success fw-bold fs-5 mb-3">
                  ₹{Number(comp.price).toLocaleString("en-IN")}
                </p>

                <p className="card-text text-muted small flex-grow-1 mb-3">
                  {comp.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComputerData;