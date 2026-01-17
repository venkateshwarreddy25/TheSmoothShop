import React from 'react';
import { useParams } from "react-router-dom";
import NavBar from "../stores/components/NavBar";
import { usecart } from "../stores/context/CartContext";
import { fridgeData } from '../stores/data/fridge';
import "../styles/FridgeView.css";

const FridgeView = () => {
  const { id } = useParams();
  const { cart, addtocart } = usecart();

  const findi = fridgeData.find(item => item.id === id);

  if (!findi) {
    return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Product not found</h2>;
  }

  return (
    <div className="fridge-page">
      <NavBar />

      <div className="fridge-container">
        <div className="fridge-image">
          <img src={findi.image} alt={findi.model} />
        </div>

        <div className="fridge-info">
          <h2 className="fridge-model">{findi.model}</h2>
          <p className="fridge-brand">Brand: {findi.brand}</p>
          <p className="fridge-category">Category: {findi.category}</p>
          <p className="fridge-price">₹{Number(findi.price).toLocaleString("en-IN")}</p>
          <p className="fridge-description">{findi.description}</p>
          <button className="add-to-cart" onClick={() => addtocart(findi)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default FridgeView;
