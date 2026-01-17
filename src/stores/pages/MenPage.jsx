import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { menData } from "../data/men";
import { Link } from "react-router-dom";
import "../../styles/MenDataPage.css";

const MenData = () => {
  const addItems = menData.slice(0, 15);
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

  const menTypes = [...new Set(addItems.map((item) => item.type))];

  return (
    <div className="men-page">
      <NavBar />
      <div className="men-content">
        <aside className="men-filters">
          <h3>Filter by Type</h3>
          {menTypes.map((type) => (
            <label key={type} className="men-filter-label">
              <input
                type="checkbox"
                checked={selectedTypes.includes(type)}
                onChange={() => handleChange(type)}
              />
              {type}
            </label>
          ))}
        </aside>

        <main className="men-grid">
          {filteredItems.map((item) => (
            <div key={item.id} className="men-card">
              <Link to={`/mens/${item.id}`}>
                <img
                  src={item.image}
                  alt={item.model}
                  className="men-image"
                  loading="lazy"
                />
              </Link>
              <div className="men-info">
                <div className="men-model">{item.model}</div>
                <div className="men-price">
                  ₹{Number(item.price).toLocaleString("en-IN")}
                </div>
                <div className="men-type">{item.type}</div>
                <div className="men-description">{item.description}</div>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default MenData;
