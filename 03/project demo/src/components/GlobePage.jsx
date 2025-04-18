import React, { useState } from 'react';
import earthbackground from '../images/earthbackground.png';
import './GlobePage.css';
import stats from '../images/stats.png';
import { useNavigate } from 'react-router-dom';

const GlobePage = () => {
      const navigate = useNavigate();
    
      const handleNavigate = () => {
        navigate('/landing');
      };

  const [selected, setSelected] = useState({
    earthquakes: false,
    floods: false,
    wildfires: false,
  });

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setSelected((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Selected crises:', selected);
  };

  return (
    <div className="globe-page">
      {/* Left Sidebar */}
      <div className="left-sidebar">
        <p>Select the climate crisis</p>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="checkbox"
              name="earthquakes"
              checked={selected.earthquakes}
              onChange={handleChange}
            />
            Earthquakes
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="floods"
              checked={selected.floods}
              onChange={handleChange}
            />
            Floods
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="wildfires"
              checked={selected.wildfires}
              onChange={handleChange}
            />
            Wildfires
          </label>
          <br />
          <button type="submit">Apply Filters</button>
          <button type="button" onClick={handleNavigate}>Home Page</button>
        </form>
      </div>

      {/* Center Globe */}
      <div className="center-content">
        <div className="globe-section">
          <img src={earthbackground} alt="Earth Globe" />
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="right-sidebar">
        <p>Crisis Stats</p>
        <img className="stats-img" src={stats} />
      </div>
    </div>
  );
};

export default GlobePage;
