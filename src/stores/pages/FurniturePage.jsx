import React, { useState } from "react";
import { furnitureData } from "../data/furniture";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import "../../styles/FurnitureDataPage.css"; 

const FurnitureData = () => {
  const addItems = furnitureData.slice(0, 15);
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

  const furnitureTypes = [...new Set(addItems.map((item) => item.type))];

  return (
    <div className="furniture-page">
      <NavBar />

    

      <div className="furniture-content">
        <aside className="furniture-filters">
          <h3>Filter by Type</h3>
          {furnitureTypes.map((type) => (
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
              <Link to={`/furniture/${item.id}`}>
                <img
                  src={item.image}
                  alt={item.model}
                  className="furniture-image"
                  loading="lazy"
                />
              </Link>
              <div className="furniture-info">
                <h4 className="furniture-model">{item.model}</h4>
                <p className="furniture-description">{item.description}</p>
                  <div className="furniture-price">₹{Number(item.price).toLocaleString("en-IN")}</div>
                <span className="furniture-type">{item.type}</span>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default FurnitureData;
