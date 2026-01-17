import { usecart } from "../stores/context/CartContext";
import { Link } from "react-router-dom";

const UserCart = () => {
  const { cart, removefromcart } = usecart();

  const totalPrice = cart.reduce((total, item) => total + Number(item.price), 0);

  return (
    
    <div className="container my-5">
      <h2 className="text-center fw-bold mb-4 text-primary">Your Shopping Cart</h2>
      <Link to="/" className="nav-link px-3 py-2 text-dark fw-semibold" style={{ fontSize: '0.9rem' }}>
           <h1>Back To Menu</h1>
       </Link>
      {cart.length === 0 ? (
        <div className="text-center py-5">
          <div className="mb-4" style={{ fontSize: '4rem' }}>🛒</div>
          <h4 className="text-muted mb-3">Your cart is empty</h4>
          <p className="text-muted mb-4">Add some products to get started!</p>
          <Link to="/" className="btn btn-primary btn-lg">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="card shadow-sm border-0 mb-4">
              <div className="card-body p-4">
                <h5 className="fw-bold mb-4">Cart Items ({cart.length})</h5>
                
                
                {cart.map((item) => (
                  <div key={item.id} className="row g-3 mb-4 pb-4 border-bottom">
                    <div className="col-md-3">
                      <div className="bg-light p-3 rounded d-flex align-items-center justify-content-center" style={{ height: '150px' }}>
                        <img
                          src={item.image}
                          alt={item.model}
                          className="img-fluid"
                          style={{ maxHeight: '130px', objectFit: 'contain' }}
                          loading="lazy"
                        />
                      </div>
                    </div>

                    <div className="col-md-9">
                      <div className="d-flex flex-column h-100">
                        <h6 className="fw-semibold text-dark mb-2">{item.model}</h6>
                        
                        {item.description && (
                          <p className="text-muted small mb-3" style={{ lineHeight: '1.5' }}>
                            {item.description}
                          </p>
                        )}

                        <div className="mt-auto d-flex justify-content-between align-items-center">
                          <h5 className="text-success fw-bold mb-0">
                            ₹{Number(item.price).toLocaleString("en-IN")}
                          </h5>
                          <button
                            className="btn btn-outline-danger btn-sm"
                            onClick={() => removefromcart(item.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserCart;