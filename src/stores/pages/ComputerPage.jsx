import React, { useState } from "react";
import { computerData } from "../data/computers";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import "../../styles/ComputerDataPage.css";

const Computerdata = () => {
  const addItems = computerData.slice(0, 15);

  const [selectedCompanies, setSelectedCompanies] = useState([]);

  const handleChange = (company) => {
    if (selectedCompanies.includes(company)) {
      setSelectedCompanies(selectedCompanies.filter(c => c !== company));
    } else {
      setSelectedCompanies([...selectedCompanies, company]);
    }
  };

  const filteredComputers =
    selectedCompanies.length === 0
      ? addItems
      : addItems.filter(computer => selectedCompanies.includes(computer.company));

  const companies = [...new Set(addItems.map(item => item.company))];

  return (
    <div className="computers-page-wrapper">
      <NavBar />

      <h2 className="computers-heading">Computers</h2>

      <div className="computers-page-content">
        <aside className="computers-filter">
          <h3>Filter by Company</h3>
          {companies.map(company => (
            <label className="computers-checkbox" key={company}>
              <input
                type="checkbox"
                checked={selectedCompanies.includes(company)}
                onChange={() => handleChange(company)}
              />
              {company}
            </label>
          ))}
        </aside>

        <div className="computers-products">
          {filteredComputers.map(computer => (
            <div className="computer-card" key={computer.id}>
              <Link to={`/computer/${computer.id}`} className="computer-image-link">
                <img src={computer.image} alt={computer.model} className="computer-image" />
              </Link>
              <p className="computer-description">{computer.description}</p>
              <p className="computer-company">Company: {computer.company}</p>
              <p className="computer-price">₹{computer.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Computerdata;
