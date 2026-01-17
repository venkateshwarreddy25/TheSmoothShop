import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { womanData } from "../data/woman";
import { Link } from "react-router-dom";
import "../../styles/WomanDataPage.css"; 

const WomanData = () => {
  const addItems = womanData.slice(0, 15);
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

  const brands = [...new Set(addItems.map((item) => item.brand))];

  return (
    <div className="woman-page">
      <NavBar />

      <div className="woman-content">
        <aside className="woman-filters">
          <h3>Filter by Brand</h3>
          {brands.map((brand) => (
            <label key={brand} className="woman-filter-label">
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => handleChange(brand)}
              />
              {brand}
            </label>
          ))}
        </aside>

        <main className="woman-grid">
          {filteredItems.map((item) => (
            <div key={item.id} className="woman-card">
              <Link to={`/womens/${item.id}`}>
                <img
                  src={item.image}
                  alt={item.model}
                  className="woman-image"
                  loading="lazy"
                />
              </Link>
              <div className="woman-info">
                <div className="woman-model">{item.model}</div>
                <div className="woman-price">
                  ₹{Number(item.price).toLocaleString("en-IN")}
                </div>
                <div className="woman-brand">{item.brand}</div>
                <div className="woman-description">{item.description}</div>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default WomanData;
