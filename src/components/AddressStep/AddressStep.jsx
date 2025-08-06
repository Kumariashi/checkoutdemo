import React from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import './AddressStep.css';

const AddressStep = ({ onContinue, onAddAddress, onViewCoupons }) => {
  return (
    <div className='details-section'>
      <div className='coupon-section'>
        <div className='coupon-input'>
          <div className='input-box'>
            <input placeholder='ENTER COUPON CODE' type='text' />
          </div>
        </div>
        <div className='available'>
          <span>6 Coupons Available</span>
          <span>
            View Coupons 
            <KeyboardArrowRightIcon 
              onClick={onViewCoupons} 
              style={{ cursor: 'pointer' }} 
            />
          </span>
        </div>
      </div>

      {/* User Info */}
      <div className="user-info">
        Hey! Welcome Back <strong>+91 6001258489</strong>
      </div>

      {/* Shipping Address */}
      <div className="section-header">
        Shipping Address 
        <span className="add-address" onClick={onAddAddress}>
          + Add Address
        </span>
      </div>

      {/* Address Cards */}
      {[1, 2].map((_, index) => (
        <div className="address-card" key={index}>
          <div className='address-header'>
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
      ))}

      {/* Shipping Method */}
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

     
    </div>
  );
};

export default AddressStep;