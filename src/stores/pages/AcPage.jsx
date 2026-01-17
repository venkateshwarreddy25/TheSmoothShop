import React, { useState } from 'react';
import { acData } from '../data/ac';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';
import '../../styles/AcDataPage.css';

const AcDataPage = () => {
  const addItems = acData.slice(0, 5);
  const [selectedCompanies, setSelectedCompanies] = useState([]);

  const handleChange = (company) => {
    if (selectedCompanies.includes(company)) {
      setSelectedCompanies(selectedCompanies.filter(c => c !== company));
    } else {
      setSelectedCompanies([...selectedCompanies, company]);
    }
  };

  const getProducts = selectedCompanies.length === 0
    ? addItems
    : addItems.filter(ac => selectedCompanies.includes(ac.company));

  const allCompanies = [...new Set(addItems.map(ac => ac.company))];

  return (
    <div className="ac-page-wrapper">
      <NavBar />

      <h2 className="ac-heading">Air Conditioners</h2>

      <div className="ac-page-content">
        <aside className="ac-filter">
          <h3>Filter by Company</h3>
          {allCompanies.map(company => (
            <label className="ac-checkbox" key={company}>
              <input
                type="checkbox"
                checked={selectedCompanies.includes(company)}
                onChange={() => handleChange(company)}
              />
              {company}
            </label>
          ))}
        </aside>

        <div className="ac-products">
          {getProducts.map(ac => (
            <div className="ac-card" key={ac.id}>
              <Link to={`/Ac/${ac.id}`} className="ac-image-link">
                <img src={ac.image} alt={ac.model} className="ac-image" />
              </Link>
              <p className="ac-model">{ac.model}</p>
              <p className="ac-company">{ac.company}</p>
              <p className="ac-description">{ac.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AcDataPage;
