import { useParams } from "react-router-dom";
import { acData } from "../stores/data/ac"; 
import NavBar from "../stores/components/NavBar";
import { usecart } from "../stores/context/CartContext";
import "../styles/AcView.css"; 

const AcView = () => {
  const { id } = useParams();
  const { cart, addtocart } = usecart();

  const findi = acData.find((item) => item.id === id);

  if (!findi) {
    return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Product not found</h2>;
  }

  return (
    <div className="product-page">
      <NavBar />

      <div className="product-container">
        <div className="product-image">
          <img src={findi.image} alt={findi.model} />
        </div>

        <div className="product-info">
          <h2 className="product-model">{findi.model}</h2>
          <p className="product-company">Company: {findi.company}</p>
          <p className="product-category">Category: {findi.category}</p>
          <p className="product-price">₹{Number(findi.price).toLocaleString("en-IN")}</p>
          <p className="product-description">{findi.description}</p>
          <button className="add-to-cart" onClick={() => addtocart(findi)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default AcView;
