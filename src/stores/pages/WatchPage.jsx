import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { watchData } from "../data/watch";
import { Link } from "react-router-dom";

const WatchData = () => {
  const addItems = watchData.slice(0, 15);
  const [selectedBrands, setSelectedBrands] = useState([]);

  const handleChange = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  const filteredItems =
    selectedBrands.length === 0
      ? addItems
      : addItems.filter((item) => selectedBrands.includes(item.brand));

  const watchBrands = [...new Set(addItems.map((item) => item.brand))];

  return (
    <div>
      <NavBar />

      <div className="container-fluid my-4">
        <div className="row">
          <aside className="col-lg-2 col-md-3 mb-4">
            <div className="card shadow-sm border-0 sticky-top" style={{ top: '20px' }}>
              <div className="card-body">
                <h5 className="fw-bold text-primary mb-3">Filter by Brand</h5>
                <div className="d-flex flex-column gap-2">
                  {watchBrands.map((brand) => (
                    <div key={brand} className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id={`brand-${brand}`}
                        checked={selectedBrands.includes(brand)}
                        onChange={() => handleChange(brand)}
                      />
                      <label 
                        className="form-check-label" 
                        htmlFor={`brand-${brand}`}
                        style={{ cursor: 'pointer' }}
                      >
                        {brand}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <main className="col-lg-10 col-md-9">
            <h2 className="text-center fw-bold mb-4 text-primary">
              {selectedBrands.length > 0 && (
                <span className="text-muted fs-6 ms-2">
                  ({filteredItems.length} items)
                </span>
              )}
            </h2>

            <div className="row g-4">
              {filteredItems.map((item) => (
                <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={item.id}>
                  <div className="card shadow-sm border-0 h-100 hover-card">
                    <Link to={`/watch/${item.id}`} className="text-decoration-none">
                      <div className="position-relative bg-light p-3 d-flex align-items-center justify-content-center" style={{ height: '240px' }}>
                        <img 
                          src={item.image} 
                          alt={item.model}
                          className="img-fluid"
                          style={{ maxHeight: '220px', objectFit: 'contain' }}
                          loading="lazy"
                        />
                        {item.isNew && (
                          <span className="position-absolute top-0 end-0 m-2 badge bg-success px-3 py-2" style={{ fontSize: '0.75rem', fontWeight: '600' }}>
                            New
                          </span>
                        )}
                      </div>
                    </Link>

                    <div className="card-body d-flex flex-column">
                      <h6 className="card-title text-dark fw-semibold mb-2" style={{ minHeight: '48px', lineHeight: '1.3', fontSize: '0.95rem' }}>
                        {item.model}
                      </h6>

                      <p className="text-muted small mb-2" style={{ fontSize: '0.85rem' }}>
                        {item.brand}
                      </p>

                      {item.description && (
                        <p className="card-text text-muted small flex-grow-1 mb-3" style={{ lineHeight: '1.4', minHeight: '60px', fontSize: '0.85rem' }}>
                          {item.description}
                        </p>
                      )}

                      <div className="mt-auto">
                        <p className="text-success fw-bold fs-5 mb-3">
                          ₹{Number(item.price).toLocaleString("en-IN")}
                        </p>
                        <Link 
                          to={`/watch/${item.id}`} 
                          className="btn btn-primary w-100"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredItems.length === 0 && (
              <div className="text-center py-5">
                <h4 className="text-muted">No watches found</h4>
                <p className="text-muted">Try adjusting your filters</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default WatchData;