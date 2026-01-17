import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { kitchenData } from "../data/kitchen";
import { Link } from "react-router-dom";
import "../../styles/KitchenDatapage.css";

const KitchenData = () => {
  const addItems = kitchenData.slice(0, 15);
  const [selectedTypes, setSelectedTypes] = useState([]);

  const handleChange = (type) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter((t) => t !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  const filteredItems =
    selectedTypes.length === 0
      ? addItems
      : addItems.filter((item) => selectedTypes.includes(item.type));

  const kitchenTypes = [...new Set(addItems.map((item) => item.type))];

  return (
    <div className="furniture-page">
      <NavBar />

      <div className="furniture-content">
        <aside className="furniture-filters">
          <h3>Filter by Type</h3>
          {kitchenTypes.map((type) => (
            <label key={type} className="filter-label">
              <input
                type="checkbox"
                checked={selectedTypes.includes(type)}
                onChange={() => handleChange(type)}
              />
              {type}
            </label>
          ))}
        </aside>

        <main className="furniture-grid">
          {filteredItems.map((item) => (
            <div key={item.id} className="furniture-card">
              <Link to={`/kitchen/${item.id}`}>
                <img
                  src={item.image}
                  alt={item.model}
                  className="furniture-image"
                  loading="lazy"
                />
              </Link>
              <div className="furniture-info">
                <div className="furniture-model">{item.model}</div>
                <div className="furniture-price">
                  ₹{Number(item.price).toLocaleString("en-IN")}
                </div>
                <div className="furniture-type">{item.type}</div>
                <div className="furniture-description">{item.description}</div>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default KitchenData;
