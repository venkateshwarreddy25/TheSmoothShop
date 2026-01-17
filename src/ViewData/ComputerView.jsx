import React from 'react';
import { useParams } from "react-router-dom";
import NavBar from "../stores/components/NavBar";
import { usecart } from "../stores/context/CartContext";
import { computerData } from '../stores/data/computers';
import "../styles/ComputerView.css";

const ComputerView = () => {
  const { id } = useParams();
  const { cart, addtocart } = usecart();

  const findi = computerData.find(item => item.id === id);

  if (!findi) {
    return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Product not found</h2>;
  }

  return (
    <div className="computer-page">
      <NavBar />

      <div className="computer-container">
        <div className="computer-image">
          <img src={findi.image} alt={findi.model} />
        </div>

        <div className="computer-info">
          <h2 className="computer-model">{findi.model}</h2>
          <p className="computer-company">Company: {findi.company}</p>
          <p className="computer-category">Category: {findi.category}</p>
          <p className="computer-price">₹{Number(findi.price).toLocaleString("en-IN")}</p>
          <p className="computer-description">{findi.description}</p>
          <button className="add-to-cart" onClick={() => addtocart(findi)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComputerView;
