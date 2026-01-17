import React from "react";
import { fridgeData } from "../data/fridge";

const FridgeData = () => {
  const displayFridges = fridgeData.slice(0, 5);

  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-4 text-primary">Refrigerators</h2>

      <div className="row g-4">
        {displayFridges.map((fridge) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl" key={fridge.id}>
            <div className="card shadow-sm border-0 h-100 hover-card">
              
              <div className="bg-light p-3 d-flex align-items-center justify-content-center" style={{ height: '240px' }}>
                <img 
                  src={fridge.image} 
                  alt={fridge.model}
                  className="img-fluid"
                  style={{ maxHeight: '220px', objectFit: 'contain' }}
                />
              </div>

              <div className="card-body d-flex flex-column">
                <h6 className="card-title text-dark fw-semibold mb-3" style={{ minHeight: '48px', lineHeight: '1.3' }}>
                  {fridge.model}
                </h6>

                <p className="text-success fw-bold fs-5 mb-3">
                  ₹{Number(fridge.price).toLocaleString("en-IN")}
                </p>

                <p className="card-text text-muted small flex-grow-1 mb-3" style={{ lineHeight: '1.4' }}>
                  {fridge.description}
                </p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FridgeData;