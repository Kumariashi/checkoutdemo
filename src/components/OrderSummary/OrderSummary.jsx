import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './OrderSummary.css';

const OrderSummary = () => {
  return (
    <div className='content-heading'>
      <div className='dropdown-container'>
        <span><ShoppingCartIcon /></span>
        <span>Order Summary</span>
        <span><KeyboardArrowDownIcon /></span>
      </div>
      <div className='price-container'>
        <span className='original'>₹ 699</span>
        <span className='discounted'>₹ 399</span>
      </div>
    </div>
  );
};

export default OrderSummary;