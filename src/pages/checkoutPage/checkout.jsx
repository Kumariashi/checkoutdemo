import React from 'react';
import './checkout.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const CheckoutPage = () => {
  return (
    <div className="checkout-container">
      {/* Top Navigation */}
      <div className="top-nav">
        <ArrowBackIcon className="back-icon" />
        <span className="step active">Login</span>
        <span className="step">Mobile</span>
        <span className="step">Address</span>
        <span className="step">Pay</span>
      </div>

      {/* Banner */}
      <div className="banner">
        Free Shipping | Ultra-Fast Delivery
      </div>

      
      {/* Order Summary */}
      <div className="order-summary">
        <div className="summary-header">
          <span>Order Summary</span>
          <span className="price-group">
            <s>₹699</s>
            <strong>₹399</strong>
          </span>
        </div>

        <input
          type="text"
          className="coupon-input"
          placeholder="ENTER COUPON CODE"
        />

        <div className="coupons-section">
          <span>6 Coupons Available</span>
          <span className="view-coupons">View Coupons &gt;</span>
        </div>
      </div>

      {/* User Info */}
      <div className="user-info">
        Hey! Welcome Back <strong>+91 6001258489</strong>
      </div>

      {/* Shipping Address */}
      <div className="section-header">
        Shipping Address <span className="add-address">+ Add Address</span>
      </div>

      {/* Address Cards */}
      <div className="address-card">
      <div className='adress-header'>
      <div className="address-name">Abhishek Maurya</div>
        <div className="address-actions"> 
        <button>Edit</button>
          <button>Delete</button>        
        </div>
      </div>  
      
        <div className="address-details">
          70 Washington Square South, New York University, Manhattan, New York City, NY 10012, United States Of America
        </div>
        <div className="address-email">abcde987356@gmail.com</div>
              </div>

      <div className="address-card">
      <div className='adress-header'>
      <div className="address-name">Abhishek Maurya</div>
        <div className="address-actions"> 
        <button>Edit</button>
          <button>Delete</button>        
        </div>
      </div>  
      
        <div className="address-details">
          70 Washington Square South, New York University, Manhattan, New York City, NY 10012, United States Of America
        </div>
        <div className="address-email">abcde987356@gmail.com</div>
              </div>

      <div className="shipping-method-section">
  <p className="section-title">Shipping method</p>
  
  <div className="shipping-option">
    <div className="shipping-badge">
      <span>Free Shipping</span>
      <span className="shipping-price">₹0</span>
    </div>
    <p className="delivery-estimate">
      Earliest Delivery by <strong>21 Jun, 5 pm</strong>
    </p>
  </div>
</div>




      {/* Continue Button */}
      <button className="continue-btn">Continue →</button>

      {/* Footer */}
      <div className="footer">
        T&C | Privacy 95784b9b • PCI DSS Certified • Secured Checkout • Verified Payment
      </div>
    </div>
  );
};

export default CheckoutPage;