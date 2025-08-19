import React from 'react';
import { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './OrderSummary.css';
import { ShoppingCart, ChevronDown, ChevronUp } from 'lucide-react';

const OrderSummary = () => {
   const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="order-summary-container">
    <div className='content-heading' onClick={() => setIsExpanded(!isExpanded)}>
      <div className='dropdown-container'>
        <span><ShoppingCartIcon /></span>
        <span>Order Summary</span>
         <span>{isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}</span>
      </div>
      <div className='price-container'>
        <span className='original'>₹ 699</span>
        <span className='discounted'>₹ 399</span>
      </div>
    </div>
    {isExpanded && (
        <div className="order-details">
          {/* Product Item */}
          <div className="product-item">
            <div className="product-image">
              <img src="/image(4).svg" alt="Morse Code Necklace" />
            </div>
            <div className="product-info">
              <h3 className="product-name">Morse Code Necklace</h3>
              <div className="product-price">
                <span className="price-label">Price:</span>
                <span className="original-price">₹ 699</span>
                <span className="current-price">₹ 399</span>
              </div>
              <div className="product-quantity">
                <span>Quantity: 1</span>
              </div>
            </div>
          </div>

          {/* Price Breakdown */}
          <div className="price-breakdown">
            <div className="price-row">
              <span className="price-label">MRP TOTAL</span>
              <span className="price-value">₹ 699</span>
            </div>
            <div className="price-row">
              <span className="price-label">Discount On MRP</span>
              <span className="price-value">₹ 300</span>
            </div>
            <div className="price-row">
              <span className="price-label">Subtotal</span>
              <span className="price-value">₹ 399</span>
            </div>
            <div className="price-row">
              <span className="price-label">Shipping</span>
              <span className="price-value">₹ 0</span>
            </div>
          </div>

          {/* Total */}
          <div className="total-section">
            <div className="total-row">
              <span className="total-label">To Pay</span>
              <span className="total-amount">₹ 399</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderSummary;