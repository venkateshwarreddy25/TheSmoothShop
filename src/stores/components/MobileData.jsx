import { mobileData } from "../data/mobiles";

const Mobiles = () => {
  const addItems = mobileData.slice(0, 8);

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 fw-bold text-primary">Mobiles</h2>

      <div className="row g-4">
        {addItems.map((item) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={item.id}>
            <div className="card h-100 shadow-sm border-0 hover-card">
              <div className="card-img-top bg-light p-3 d-flex align-items-center justify-content-center" style={{ height: '200px' }}>
                <img 
                  src={item.image} 
                  alt={item.model}
                  className="img-fluid"
                  style={{ maxHeight: '180px', objectFit: 'contain' }}
                />
              </div>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-secondary fw-semibold mb-2">
                  {item.company}
                </h5>
                <p className="card-text text-success fw-bold fs-5 mb-2">
                  ₹{item.price.toLocaleString('en-IN')}
                </p>
                <p className="card-text text-muted small flex-grow-1">
                  {item.description}
                </p>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mobiles;