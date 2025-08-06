import React, { useState } from 'react';
import './CardPayment.css';

const CardPayment = ({ form1Data, handleInputChange, onPaymentSuccess }) => {
  const [cardDetails, setCardDetails] = useState({
    fullName: form1Data?.cardDetails?.cardholderName || '',
    cardNumber: form1Data?.cardDetails?.cardNumber || '',
    expiryDate: form1Data?.cardDetails?.expiryDate || '',
    cvv: form1Data?.cardDetails?.cvv || ''
  });

  const [showCvv, setShowCvv] = useState(false);

  const handleCardInputChange = (field, value) => {
    let form1attedValue = value;
    
    // form1at card number with spaces
    if (field === 'cardNumber') {
      form1attedValue = value.replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim();
      if (form1attedValue.length > 19) return; // Limit to 16 digits + 3 spaces
    }
    
    // form1at expiry date
    if (field === 'expiryDate') {
      form1attedValue = value.replace(/\D/g, '').replace(/(\d{2})(\d)/, '$1/$2');
      if (form1attedValue.length > 5) return; // Limit to MM/YY
    }
    
    // Limit CVV to 3 digits
    if (field === 'cvv') {
      form1attedValue = value.replace(/\D/g, '');
      if (form1attedValue.length > 3) return;
    }

    setCardDetails(prev => ({
      ...prev,
      [field]: form1attedValue
    }));

    // Update parent component
    if (handleInputChange) {
      handleInputChange('cardDetails', {
        ...cardDetails,
        [field === 'fullName' ? 'cardholderName' : field]: form1attedValue
      });
    }
  };

  const getCardType = (cardNumber) => {
    const cleanNumber = cardNumber.replace(/\s/g, '');
    if (cleanNumber.startsWith('4')) return 'visa';
    if (cleanNumber.startsWith('5') || cleanNumber.startsWith('2')) return 'mastercard';
    if (cleanNumber.startsWith('6')) return 'rupay';
    return '';
  };

  const handleContinue = () => {
    if (!cardDetails.fullName || !cardDetails.cardNumber || !cardDetails.expiryDate || !cardDetails.cvv) {
      alert('Please fill all card details');
      return;
    }
    if (onPaymentSuccess) {
      onPaymentSuccess();
    }
  };

  return (
    <div className="card-payment">
      <div className="card-payment-header">
        <span className="back-arrow">←</span>
        <h2 className="payment-title">Credit/Debit Cards</h2>
      </div>

      <div className="card-form1">
        <div className="form11-group">
        <div className='form1-label'>Full Name</div>

          
          
          {/*<label className="form1-label">Full Name</label>*/}
          <input
            type="text"
            placeholder="Full Name"
            value={cardDetails.fullName}
            onChange={(e) => handleCardInputChange('fullName', e.target.value)}
            className="form11-input"
          />
          

        </div>

        <div className="form11-group">
          <label className="form1-label">Card Number</label>
          <div className="card-input-container">
            <input
              type="text"
              placeholder="XXXX XXXX XXXX XXXX"
              value={cardDetails.cardNumber}
              onChange={(e) => handleCardInputChange('cardNumber', e.target.value)}
              className="form11-input card-number-input"
            />
            <div className="card-icons">
              {getCardType(cardDetails.cardNumber) === 'visa' && (
                <div className="card-icon visa-icon">VISA</div>
              )}
              {getCardType(cardDetails.cardNumber) === 'mastercard' && (
                <div className="card-icon mastercard-icon">MC</div>
              )}
              {getCardType(cardDetails.cardNumber) === 'rupay' && (
                <div className="card-icon rupay-icon">RUPAY</div>
              )}
            </div>
          </div>
        </div>

        <div className="form1-row">
          <div className="form11-group half-width">
            <label className="form1-label">Expiry Date</label>
            <input
              type="text"
              placeholder="MM/YY"
              value={cardDetails.expiryDate}
              onChange={(e) => handleCardInputChange('expiryDate', e.target.value)}
              className="form11-input"
            />
          </div>
          
          <div className="form11-group half-width">
            <label className="form1-label">Enter CVV</label>
            <div className="cvv-input-container">
              <input
                type={showCvv ? "text" : "password"}
                placeholder="***"
                value={cardDetails.cvv}
                onChange={(e) => handleCardInputChange('cvv', e.target.value)}
                className="form11-input cvv-input"
              />
              <div className="cvv-icons">
                <button
                  type="button"
                  onClick={() => setShowCvv(!showCvv)}
                  className="cvv-toggle"
                >
                  {showCvv ? '👁️' : '👁️‍🗨️'}
                </button>
                <span className="cvv-info">ℹ️</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card-payment-footer">
        <button 
          className="continue-button"
          onClick={handleContinue}
        >
          Continue →
        </button>
      </div>
    </div>
  );
};

export default CardPayment;