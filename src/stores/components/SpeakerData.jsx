import React from "react";
import { speakerData } from "../data/speaker";

const SpeakerData = () => {
  const displaySpeakers = speakerData.slice(0, 5);

  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-4 text-primary">Speakers</h2>

      <div className="row g-4">
        {displaySpeakers.map((item) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl" key={item.id}>
            <div className="card shadow-sm border-0 h-100 hover-card">

              <div className="bg-dark p-4 d-flex align-items-center justify-content-center" style={{ height: '260px' }}>
                <img 
                  src={item.image} 
                  alt={item.model}
                  className="img-fluid"
                  style={{ maxHeight: '240px', objectFit: 'contain', filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' }}
                />
              </div>

              <div className="card-body d-flex flex-column">
                <div className="mb-2">
                  <span className="badge bg-info text-dark mb-2" style={{ fontSize: '0.7rem', fontWeight: '600' }}>
                    {item.brand}
                  </span>
                </div>

                <h6 className="card-title text-dark fw-semibold mb-3" style={{ minHeight: '48px', lineHeight: '1.3', fontSize: '0.95rem' }}>
                  {item.model}
                </h6>

                <div className="mt-auto">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="text-success fw-bold fs-4">
                      ₹{Number(item.price).toLocaleString("en-IN")}
                    </span>
                  </div>
                  <p className="text-muted small flex-grow-1 mb-3" style={{ fontSize: '0.85rem' }}>
                  {item.description}
                </p>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpeakerData;