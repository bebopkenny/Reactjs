import React from 'react';
import { useNavigate } from 'react-router-dom';
import globeLanding from '../images/globe_landing.jpg';
import './LandingPage.css'


const LandingPage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/globe');
  };

  return (
    <>
      <div className="title-container">
        <h1>Global Crisis</h1>
        <p>Track the crisis. Spread the awareness. Change the outcome.</p>
        <button onClick={handleNavigate}>Track the climate crisis</button>
        <button>How to use the model</button>
        <button>Ways to help</button>
        <img src={globeLanding} alt="Earth globe" />
      </div>
    </>
  );
};

export default LandingPage;
