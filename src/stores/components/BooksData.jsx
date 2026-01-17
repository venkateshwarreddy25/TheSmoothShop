import React from "react";
import { booksData } from "../data/books";

const BooksData = () => {
  const displayBooks = booksData.slice(0, 4);

  return (
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-4 text-primary">
        Books Store
      </h2>

      <div className="row g-4">
        {displayBooks.map((book) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl" key={book.id}>
            <div className="card shadow-sm border-0 h-100 hover-card">

              <div className="position-relative bg-light p-3 d-flex align-items-center justify-content-center" style={{ height: '240px' }}>
                <img 
                  src={book.image} 
                  alt={book.title}
                  className="img-fluid"
                  style={{ maxHeight: '220px', objectFit: 'contain' }}
                />
                {book.isNew && (
                  <span className="position-absolute top-0 end-0 m-2 badge bg-success px-3 py-2" style={{ fontSize: '0.75rem', fontWeight: '600' }}>
                    New
                  </span>
                )}
              </div>

              <div className="card-body d-flex flex-column">
                <h6 className="card-title text-dark fw-semibold mb-3" style={{ minHeight: '48px', lineHeight: '1.3', fontSize: '0.95rem' }}>
                  {book.title}
                </h6>

                {book.description && (
                  <p className="card-text text-muted small flex-grow-1 mb-3" style={{ lineHeight: '1.4', minHeight: '60px' }}>
                    {book.description}
                  </p>
                )}

                <div className="mt-auto">
                  <p className="text-success fw-bold fs-5 mb-3">
                    ₹{Number(book.price).toLocaleString("en-IN")}
                  </p>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksData;