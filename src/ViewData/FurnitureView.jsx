import React from 'react';
import { useParams } from "react-router-dom";
import NavBar from "../stores/components/NavBar";
import { usecart } from "../stores/context/CartContext";
import { furnitureData } from '../stores/data/furniture';
import "../styles/FurnitureView.css";

const FurnitureView = () => {
  const { id } = useParams();
  const { cart, addtocart } = usecart();

  const findi = furnitureData.find(item => item.id === id);

  if (!findi) {
    return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Product not found</h2>;
  }

  return (
    <div className="furniture-page">
      <NavBar />

      <div className="furniture-container">
        <div className="furniture-image">
          <img src={findi.image} alt={findi.model} />
        </div>

        <div className="furniture-info">
          <h2 className="furniture-model">{findi.model}</h2>
          <p className="furniture-company">Company: {findi.company}</p>
          <p className="furniture-category">Category: {findi.category}</p>
          <p className="furniture-price">₹{Number(findi.price).toLocaleString("en-IN")}</p>
          <p className="furniture-description">{findi.description}</p>
          <button className="add-to-cart" onClick={() => addtocart(findi)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default FurnitureView;
