
import React from 'react';
import { useParams } from "react-router-dom";
import NavBar from "../stores/components/NavBar";
import { usecart } from "../stores/context/CartContext";
import { watchData } from '../stores/data/watch';
import '../styles/WatchView.css'; 

const WatchView = () => {
  const { id } = useParams();
  const { addtocart } = usecart();

  const findi = watchData.find(item => item.id === id);

  if (!findi) {
    return <h2 className="watch-notfound">Product not found</h2>;
  }

  return (
    <div className="watch-page">
      <NavBar />

      <div className="watch-content">
        <div className="watch-card">
          <img src={findi.image} alt={findi.model} className="watch-image" />

          <div className="watch-info">
            <h2 className="watch-model">{findi.model}</h2>
            <p className="watch-brand"><strong>Brand:</strong> {findi.brand}</p>
            <p className="watch-price"><strong>Price:</strong> ₹{findi.price}</p>
            <p className="watch-category"><strong>Category:</strong> {findi.category}</p>
            <p className="watch-description">{findi.description}</p>
            <button className="watch-add-btn" onClick={() => addtocart(findi)}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WatchView;

