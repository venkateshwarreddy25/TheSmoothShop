import React from "react";
import { furnitureData } from "../data/furniture";

const FurnitureData = () => {
  const displayFurniture = furnitureData.slice(0, 5);

  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-4 text-primary">Furniture</h2>

      <div className="row g-4">
        {displayFurniture.map((item) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl" key={item.id}>
            <div className="card shadow-sm border-0 h-100 hover-card">

              <div className="position-relative bg-light p-3 d-flex align-items-center justify-content-center" style={{ height: '240px' }}>
                <img 
                  src={item.image} 
                  alt={item.type}
                  className="img-fluid"
                  style={{ maxHeight: '220px', objectFit: 'contain' }}
                />
                {item.isNew && (
                  <span className="position-absolute top-0 end-0 m-2 badge bg-danger px-3 py-2" style={{ fontSize: '0.75rem' }}>
                    New
                  </span>
                )}
              </div>

              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-dark fw-semibold mb-3" style={{ minHeight: '48px', fontSize: '1rem', lineHeight: '1.3' }}>
                  {item.type}
                </h5>

                <p className="card-text text-muted small flex-grow-1 mb-3" style={{ lineHeight: '1.4', minHeight: '60px' }}>
                  {item.description}
                </p>

                <p className="text-success fw-bold fs-5 mb-3">
                  ₹{Number(item.price).toLocaleString("en-IN")}
                </p>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FurnitureData;