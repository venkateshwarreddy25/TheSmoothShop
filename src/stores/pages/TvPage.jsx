import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { tvData } from "../data/tv";
import { Link } from "react-router-dom";
import "../../styles/TvDataPage.css"; 

const TvData = () => {
  const addItems = tvData.slice(0, 15);
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

  const tvBrands = [...new Set(addItems.map((item) => item.brand))];

  return (
    <div className="tv-page">
      <NavBar />

      <div className="tv-content">
        <aside className="tv-filters">
          <h3>Filter by Brand</h3>
          {tvBrands.map((brand) => (
            <label key={brand} className="tv-filter-label">
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => handleChange(brand)}
              />
              {brand}
            </label>
          ))}
        </aside>

        <main className="tv-grid">
          {filteredItems.map((item) => (
            <div key={item.id} className="tv-card">
              <Link to={`/tv/${item.id}`}>
                <img
                  src={item.image}
                  alt={item.model}
                  className="tv-image"
                  loading="lazy"
                />
              </Link>
              <div className="tv-info">
                <div className="tv-model">{item.model}</div>
                <div className="tv-price">
                  ₹{Number(item.price).toLocaleString("en-IN")}
                </div>
                <div className="tv-brand">{item.brand}</div>
                <div className="tv-description">{item.description}</div>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default TvData;
