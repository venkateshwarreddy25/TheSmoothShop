import React from "react";
import { tvData } from "../data/tv";
import "../../styles/TvData.css";

const TvData = () => {
  const displayTv = tvData?.slice(0, 5) || [];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 fw-bold text-primary">Televisions</h2>

      <div className="row g-4">
        {displayTv.map((item) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl" key={item.id}>
            <div className="card h-100 shadow-sm border-0 hover-card">
              <div className="card-img-top bg-light p-3 d-flex align-items-center justify-content-center" style={{ height: '220px' }}>
                <img
                  src={item.image}
                  alt={item.model}
                  loading="lazy"
                  className="img-fluid"
                  style={{ maxHeight: '200px', objectFit: 'contain' }}
                />
              </div>
              
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-dark fw-semibold mb-2" style={{ minHeight: '48px' }}>
                  {item.model}
                </h5>

                <p className="card-text text-muted small mb-3">
                  {item.brand}
                </p>

                <p className="card-text text-success fw-bold fs-5 mb-3">
                  ₹{Number(item.price).toLocaleString("en-IN")}
                </p>
                <p className="card-text text-muted small flex-grow-1 mb-3">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TvData;