import { useParams } from "react-router-dom";
import NavBar from "../stores/components/NavBar";
import { usecart } from "../stores/context/CartContext";
import { booksData } from "../stores/data/books";
import "../styles/BooksView.css";

const BooksView = () => {
  const { id } = useParams();
  const { cart, addtocart } = usecart();

  const findi = booksData.find(item => item.id === id);

  if (!findi) {
    return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Product not found</h2>;
  }

  return (
    <div className="books-page">
      <NavBar />

      <div className="books-container">
        <div className="books-image">
          <img src={findi.image} alt={findi.title} />
        </div>

        <div className="books-info">
          <h2 className="books-title">{findi.title}</h2>
          <p className="books-author">Author: {findi.author}</p>
          <p className="books-category">Category: {findi.category}</p>
          <p className="books-price">₹{Number(findi.price).toLocaleString("en-IN")}</p>
          <p className="books-description">{findi.description}</p>
          <button className="add-to-cart" onClick={() => addtocart(findi)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default BooksView;
