import React from "react";
import { menData } from "../data/men";

const MenData = () => {
  const displayMen = menData.slice(0, 5);

  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-4 text-primary">Men's Fashion</h2>

      <div className="row g-4">
        {displayMen.map((item) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl" key={item.id}>
            <div className="card shadow-sm border-0 h-100 hover-card overflow-hidden">

              <div className="position-relative bg-light d-flex align-items-center justify-content-center" style={{ height: '300px', overflow: 'hidden' }}>
                <img 
                  src={item.image} 
                  alt={item.description}
                  className="img-fluid w-100 h-100"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.3) 100%)' }}></div>
              </div>

              <div className="card-body d-flex flex-column">
                <p className="card-text text-dark mb-3" style={{ minHeight: '48px', lineHeight: '1.4', fontSize: '0.95rem' }}>
                  {item.description}
                </p>

                <div className="mt-auto">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="text-success fw-bold fs-4">
                      ₹{Number(item.price).toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenData;