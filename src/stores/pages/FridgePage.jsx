import React, { useState } from "react";
import { fridgeData } from "../data/fridge";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import "../../styles/FridgeDataPage.css"; 

const FridgeData = () => {
  const addItems = fridgeData.slice(0, 15);

  const [selectedBrands, setSelectedBrands] = useState([]);

  const handleChange = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter(b => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  const filteredFridges =
    selectedBrands.length === 0
      ? addItems
      : addItems.filter(fridge => selectedBrands.includes(fridge.brand));

  const brands = [...new Set(addItems.map(item => item.brand))];

  return (
    <div className="fridge-page-wrapper">
      <NavBar />

      <h2 className="fridge-heading">Fridges</h2>

      <div className="fridge-page-content">
        <aside className="fridge-filter">
          <h3>Filter by Brand</h3>
          {brands.map(brand => (
            <label className="fridge-checkbox" key={brand}>
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => handleChange(brand)}
              />
              {brand}
            </label>
          ))}
        </aside>

        <div className="fridge-products">
          {filteredFridges.map(fridge => (
            <div className="fridge-card" key={fridge.id}>
              <Link to={`/fridge/${fridge.id}`} className="fridge-image-link">
                <img src={fridge.image} alt={fridge.model} className="fridge-image" />
              </Link>
              <p className="fridge-description">{fridge.description}</p>
              <p className="fridge-brand">Brand: {fridge.brand}</p>
              <p className="fridge-price">₹{fridge.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FridgeData;
