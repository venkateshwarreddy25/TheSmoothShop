import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import { useState } from "react";
import { booksData } from "../data/books";
import "../../styles/BooksDataPage.css"; 

const BooksData = () => {
  const addItems = booksData.slice(0, 15);

  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const filteredBooks =
    selectedCategories.length === 0
      ? addItems
      : addItems.filter(book => selectedCategories.includes(book.category));

  const categories = [...new Set(addItems.map(book => book.category))];

  return (
    <div className="books-page-wrapper">
      <NavBar />

      <h2 className="books-heading">Books</h2>

      <div className="books-page-content">
        <aside className="books-filter">
          <h3>Filter by Category</h3>
          {categories.map(category => (
            <label className="books-checkbox" key={category}>
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => handleChange(category)}
              />
              {category}
            </label>
          ))}
        </aside>

        <div className="books-products">
          {filteredBooks.map(book => (
            <div className="book-card" key={book.id}>
              <Link to={`/Books/${book.id}`} className="book-image-link">
                <img src={book.image} alt={book.model} className="book-image" />
              </Link>
              <p className="book-description">{book.description}</p>
              <p className="book-author">Author: {book.author}</p>
              <p className="book-category">Category: {book.category}</p>
              <p className="book-price">₹{book.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BooksData;
