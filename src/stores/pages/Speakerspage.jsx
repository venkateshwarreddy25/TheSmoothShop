import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { speakerData } from "../data/speaker";
import { Link } from "react-router-dom";
import "../../styles/SpeakerDataPage.css"; 

const SpeakerData = () => {
  const addItems = speakerData.slice(0, 15);
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

  const speakerBrands = [...new Set(addItems.map((item) => item.brand))];

  return (
    <div className="speaker-page">
      <NavBar />

      <div className="speaker-content">
        <aside className="speaker-filters">
          <h3>Filter by Brand</h3>
          {speakerBrands.map((brand) => (
            <label key={brand} className="speaker-filter-label">
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => handleChange(brand)}
              />
              {brand}
            </label>
          ))}
        </aside>

        <main className="speaker-grid">
          {filteredItems.map((item) => (
            <div key={item.id} className="speaker-card">
              <Link to={`/speakers/${item.id}`}>
                <img
                  src={item.image}
                  alt={item.model}
                  className="speaker-image"
                  loading="lazy"
                />
              </Link>
              <div className="speaker-info">
                <div className="speaker-model">{item.model}</div>
                <div className="speaker-price">
                  ₹{Number(item.price).toLocaleString("en-IN")}
                </div>
                <div className="speaker-brand">{item.brand}</div>
                <div className="speaker-description">{item.description}</div>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default SpeakerData;
