import React, { useState } from 'react';
import './CODPayment.css';

const CODPayment = ({ formData, handleInputChange, onPaymentSuccess }) => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirmation = (confirmed) => {
    setIsConfirmed(confirmed);
    if (handleInputChange) {
      handleInputChange('codConfirmed', confirmed);
    }
  };

  const handleContinue = () => {
    if (!isConfirmed) {
      alert('Please confirm your Cash on Delivery order');
      return;
    }
    if (onPaymentSuccess) {
      onPaymentSuccess();
    }
  };

  return (
    <div className="cod-payment">
      <div className="cod-payment-header">
        <span className="back-arrow">←</span>
        <h2 className="payment-title">Cash on Delivery</h2>
      </div>

      <div className="cod-content">
        <div className="cod-info-card">
          <div className="cod-icon">
            💰
          </div>
          <div className="cod-details">
            <h3 className="cod-title">Cash on Delivery</h3>
            <p className="cod-description">
              Pay ₹449 in cash when your order is delivered to your doorstep. 
              Please keep the exact amount ready for a smooth delivery experience.
            </p>
          </div>
        </div>

        <div className="cod-charges-info">
          <div className="charges-card">
            <div className="charges-header">
              <span className="info-icon">ℹ️</span>
              <h4>Additional Charges</h4>
            </div>
            <div className="charges-details">
              <p>COD charges: ₹50 extra</p>
              <p className="save-money">💡 Save ₹50 by paying online!</p>
            </div>
          </div>
        </div>

        <div className="cod-terms">
          <div className="terms-section">
            <h4>Terms & Conditions:</h4>
            <ul className="terms-list">
              <li>Payment to be made in cash only</li>
              <li>Please keep exact change ready</li>
              <li>COD available for orders up to ₹50,000</li>
              <li>Delivery person will provide receipt</li>
            </ul>
          </div>
        </div>

        <div className="cod-confirmation">
          <div className="confirmation-checkbox">
            <input
              type="checkbox"
              id="cod-confirm"
              checked={isConfirmed}
              onChange={(e) => handleConfirmation(e.target.checked)}
              className="checkbox-input"
            />
            <label htmlFor="cod-confirm" className="checkbox-label">
              I confirm that I will pay ₹449 in cash upon delivery
            </label>
          </div>
        </div>
      </div>

      <div className="cod-payment-footer">
        <div className="order-summary">
          <div className="summary-row">
            <span>Order Total:</span>
            <span>₹399</span>
          </div>
          <div className="summary-row">
            <span>COD Charges:</span>
            <span>₹50</span>
          </div>
          <div className="summary-row total">
            <span>Total Amount:</span>
            <span>₹449</span>
          </div>
        </div>
        
        <button 
          className={`continue-button ${isConfirmed ? 'enabled' : 'disabled'}`}
          onClick={handleContinue}
          disabled={!isConfirmed}
        >
          Confirm Order →
        </button>
      </div>
    </div>
  );
};

export default CODPayment;