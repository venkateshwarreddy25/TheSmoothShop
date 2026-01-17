import React from 'react';
import { useParams } from "react-router-dom";
import NavBar from "../stores/components/NavBar";
import { usecart } from "../stores/context/CartContext";
import { tvData } from '../stores/data/tv';
import "../styles/TvView.css";

const TvView = () => {
  const { id } = useParams();
  const { cart, addtocart } = usecart();

  const findi = tvData.find(item => item.id === id);

  if (!findi) {
    return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Product not found</h2>;
  }

  return (
    <div className="tv-page">
      <NavBar />

      <div className="tv-container">
        <div className="tv-image">
          <img src={findi.image} alt={findi.model} />
        </div>

        <div className="tv-info">
          <h2 className="tv-model">{findi.model}</h2>
          <p className="tv-brand">Brand: {findi.brand}</p>
          <p className="tv-category">Category: {findi.category}</p>
          <p className="tv-price">₹{Number(findi.price).toLocaleString("en-IN")}</p>
          <p className="tv-description">{findi.description}</p>
          <button className="add-to-cart" onClick={() => addtocart(findi)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default TvView;
