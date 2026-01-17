import React from 'react';
import { useParams } from "react-router-dom";
import NavBar from "../stores/components/NavBar";
import { usecart } from "../stores/context/CartContext";
import { speakerData } from '../stores/data/speaker';

const SpeakerView = () => {
  const { id } = useParams();
  const { cart, addtocart } = usecart();

  const findi = speakerData.find(item => item.id === id);

  if (!findi) {
    return (
      <div>
        <NavBar />
        <div className="container text-center py-5">
          <h2 className="text-muted">Product not found</h2>
          <p className="text-muted">The product you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <NavBar />

      <div className="container my-5">
        <div className="row g-4">
          <div className="col-lg-6">
            <div className="card shadow-sm border-0">
              <div className="card-body bg-light p-4 d-flex align-items-center justify-content-center" style={{ minHeight: '400px' }}>
                <img 
                  src={findi.image} 
                  alt={findi.model} 
                  className="img-fluid"
                  style={{ maxHeight: '500px', objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body p-4">
                <h2 className="fw-bold text-dark mb-3">{findi.model}</h2>
                
                {findi.brand && (
                  <p className="text-muted mb-3" style={{ fontSize: '1.1rem' }}>
                    <span className="fw-semibold">Brand:</span> {findi.brand}
                  </p>
                )}

                <h3 className="text-success fw-bold mb-4">
                  ₹{Number(findi.price).toLocaleString("en-IN")}
                </h3>

                {findi.category && (
                  <div className="mb-3">
                    <span className="badge bg-primary px-3 py-2" style={{ fontSize: '0.9rem' }}>
                      {findi.category}
                    </span>
                  </div>
                )}

                {findi.description && (
                  <div className="mb-4">
                    <h5 className="fw-semibold mb-2">Description</h5>
                    <p className="text-muted" style={{ lineHeight: '1.6' }}>
                      {findi.description}
                    </p>
                  </div>
                )}

                <div className="d-grid gap-2 mt-4">
                  <button 
                    className="btn btn-success btn-lg fw-semibold py-3"
                    onClick={() => addtocart(findi)}
                  >
                    Add to Cart
                  </button>
                </div>

                <div className="mt-4 pt-4 border-top">
                  <h6 className="fw-semibold mb-3">Product Details</h6>
                  <ul className="list-unstyled text-muted">
                    <li className="mb-2">✓ Secure checkout</li>
                    <li className="mb-2">✓ Fast delivery available</li>
                    <li className="mb-2">✓ Easy returns within 30 days</li>
                    <li className="mb-2">✓ Warranty included</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpeakerView;