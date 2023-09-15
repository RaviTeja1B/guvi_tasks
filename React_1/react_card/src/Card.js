import React from 'react';
import './Card.css';

function Card() {
  return (
    <div className="cards-container">
      <div className="card free">
        <div className="card-header">
          <h2>FREE</h2>
          <p>$0/month</p>
          <p>Single User</p>
        </div>
        <div className="card-content">
          <ul>
            <li>50GB Storage ✔</li>
            <li>Unlimited Public Projects ✔</li>
            <li>Community Access ✔</li>
            <li>Unlimited Private Projects ✘</li>
            <li>Dedicated Phone Support ✘</li>
            <li>Free Subdomain ✘</li>
            <li>Monthly Status Reports ✘</li>
          </ul>
        </div>
        <div className="card-footer">
          <button className="card-button">BUTTON</button>
        </div>
      </div>
      <div className="card plus">
        <div className="card-header">
          <h2>PLUS</h2>
          <p>$9/month</p>
          <p>5 Users</p>
        </div>
        <div className="card-content">
          <ul>
            <li>50GB Storage ✔</li>
            <li>Unlimited Public Projects ✔</li>
            <li>Community Access ✔</li>
            <li>Unlimited Private Projects ✘</li>
            <li>Dedicated Phone Support ✘</li>
            <li>Free Subdomain ✘</li>
            <li>Monthly Status Reports ✘</li>
          </ul>
        </div>
        <div className="card-footer">
          <button className="card-button">BUTTON</button>
        </div>
      </div>
      <div className="card pro">
        <div className="card-header">
          <h2>PRO</h2>
          <p>$49/month</p>
          <p>Unlimited Users</p>
        </div>
        <div className="card-content">
          <ul>
            <li>50GB Storage ✔</li>
            <li>Unlimited Public Projects ✔</li>
            <li>Community Access ✔</li>
            <li>Unlimited Private Projects ✔</li>
            <li>Dedicated Phone Support ✔</li>
            <li>Free Subdomain ✔</li>
            <li>Monthly Status Reports ✔</li>
          </ul>
        </div>
        <div className="card-footer">
          <button className="card-button">BUTTON</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
