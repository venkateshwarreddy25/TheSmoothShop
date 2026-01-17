import React from 'react';
import { useParams } from "react-router-dom";
import NavBar from "../stores/components/NavBar";
import { usecart } from "../stores/context/CartContext";
import { womanData } from '../stores/data/woman';
import '../styles/WomenView.css';
const WomenView = () => {
  const { id } = useParams();
  const { addtocart } = usecart();

  const findi = womanData.find(item => item.id === id);

  if (!findi) {
    return <h2 className="women-notfound">Product not found</h2>;
  }

  return (
    <div className="women-page">
      <NavBar />

      <div className="women-content">
        <div className="women-card">
          <img src={findi.image} alt={findi.model} className="women-image" />

          <div className="women-info">
            <h2 className="women-model">{findi.model}</h2>
            <p className="women-brand"><strong>Brand:</strong> {findi.brand}</p>
            <p className="women-price"><strong>Price:</strong> ₹{findi.price}</p>
            <p className="women-category"><strong>Category:</strong> {findi.category}</p>
            <p className="women-description">{findi.description}</p>
            <button className="women-add-btn" onClick={() => addtocart(findi)}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WomenView;
