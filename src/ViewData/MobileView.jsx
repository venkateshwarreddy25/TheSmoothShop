import { mobileData } from "../stores/data/mobiles";
import { useParams } from "react-router-dom";
import NavBar from "../stores/components/NavBar";
import { usecart } from "../stores/context/CartContext";
import "../styles/MobileView.css";

const MobileView = () => {
  const { id } = useParams();
  const { cart, addtocart } = usecart();

  const findi = mobileData.find(item => item.id === id);

  if (!findi) {
    return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Product not found</h2>;
  }

  return (
    <div className="mobile-page">
      <NavBar />

      <div className="mobile-container">
        <div className="mobile-image">
          <img src={findi.image} alt={findi.model} />
        </div>

        <div className="mobile-info">
          <h2 className="mobile-model">{findi.model}</h2>
          <p className="mobile-company">Company: {findi.company}</p>
          <p className="mobile-price">₹{Number(findi.price).toLocaleString("en-IN")}</p>
          <p className="mobile-category">Category: {findi.category}</p>
          <p className="mobile-description">{findi.description}</p>
          <button className="add-to-cart" onClick={() => addtocart(findi)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileView;
