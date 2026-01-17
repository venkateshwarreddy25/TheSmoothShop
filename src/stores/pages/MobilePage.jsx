import React, { useState } from "react";
import { mobileData } from "../data/mobiles";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

const Mobiles = () => {
  const addItems = mobileData.slice(0, 15);
  const [selectedCompanies, setSelectedCompanies] = useState([]);

  const handleChange = (company) => {
    if (selectedCompanies.includes(company)) {
      setSelectedCompanies(selectedCompanies.filter((c) => c !== company));
    } else {
      setSelectedCompanies([...selectedCompanies, company]);
    }
  };

  const filteredItems =
    selectedCompanies.length === 0
      ? addItems
      : addItems.filter((item) => selectedCompanies.includes(item.company));

  const mobileCompanies = [...new Set(addItems.map((item) => item.company))];

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
                  {mobileCompanies.map((company) => (
                    <div key={company} className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id={`company-${company}`}
                        checked={selectedCompanies.includes(company)}
                        onChange={() => handleChange(company)}
                      />
                      <label 
                        className="form-check-label" 
                        htmlFor={`company-${company}`}
                        style={{ cursor: 'pointer' }}
                      >
                        {company}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <main className="col-lg-10 col-md-9">
            <h2 className="text-center fw-bold mb-4 text-primary">
              Mobile Phones
              {selectedCompanies.length > 0 && (
                <span className="text-muted fs-6 ms-2">
                  ({filteredItems.length} items)
                </span>
              )}
            </h2>

            <div className="row g-4">
              {filteredItems.map((item) => (
                <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={item.id}>
                  <div className="card shadow-sm border-0 h-100 hover-card">
                    <Link to={`/mobiles/${item.id}`} className="text-decoration-none">
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
                        {item.company}
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
                          to={`/mobiles/${item.id}`} 
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
                <h4 className="text-muted">No products found</h4>
                <p className="text-muted">Try adjusting your filters</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Mobiles;