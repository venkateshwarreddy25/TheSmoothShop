import React from "react";
import { womanData } from "../data/woman";
import "../../styles/WomanData.css";

const WomanData = () => {
  const displayWomen = womanData?.slice(0, 5) || [];

  return (
    <div className="woman-wrapper bg-light-pink">
      <div className="woman-header-section text-center mb-5">
        <h2 className="woman-heading display-4 fw-bold text-uppercase mb-3">
          Women's Fashion
        </h2>
      </div>
      <div className="woman-container container-fluid px-3">
        <div className="row g-4 justify-content-center">
          {displayWomen.map((item) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl woman-col" key={item.id}>
              <div className="woman-card card h-100 border-0 shadow-hover">
                
                <div className="woman-image-wrapper position-relative overflow-hidden">
                  <div className="woman-image card-img-top">
                    <img 
                      src={item.image} 
                      alt={item.description}
                      className="woman-img w-100 h-100 object-fit-cover"
                      loading="lazy"
                    />
                    <div className="woman-overlay position-absolute top-0 start-0 w-100 h-100"></div>
                  </div>
                  <div className="woman-badge position-absolute top-0 end-0 m-3">
                    <span className="badge bg-danger rounded-pill px-3 py-2">New</span>
                  </div>
                </div>

                <div className="woman-content card-body d-flex flex-column p-4">
                  <div className="woman-text-section flex-grow-1">
                    
                    <p className="woman-brand text-uppercase text-muted small fw-bold letter-spacing-wide mb-3">
                      {item.brand}
                    </p>
                    <p className="woman-brand text-uppercase text-muted small fw-bold letter-spacing-wide mb-3">
                      {item.model}
                    </p>
                  </div>

                  <div className="woman-footer border-top pt-3 mt-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="woman-price text-gradient-pink fs-3 fw-bold">
                        ₹{Number(item.price).toLocaleString("en-IN")}
                      </span>
                    </div>
                    <p className="card-text text-muted small flex-grow-1 mb-3">
                      {item.description}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WomanData;