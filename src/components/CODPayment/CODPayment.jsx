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
      <img src='/image46.svg' className='cod-payment-image' alt='COD Payment' />
    <div className='your-order'>your  order is successful</div>
    <div className='order-received'>We have receive your order. Click the button to track your order.</div>
    <button 
        className='order-track'>Order Track</button>
      </div>
  );
};

export default CODPayment;