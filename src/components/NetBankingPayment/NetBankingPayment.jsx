import React, { useState } from 'react';
import './NetBankingPayment.css';

const NetBankingPayment = ({ formData, handleInputChange, onPaymentSuccess }) => {
  const [selectedBank, setSelectedBank] = useState('');

  const banks = [
    { 
      id: 'hdfc', 
      name: 'HDFC Bank', 
      icon: '/image36.svg',
    
    },
    { 
      id: 'sbi', 
      name: 'State Bank Of India', 
      icon: '/image37.svg',
      
    },
    { 
      id: 'icici', 
      name: 'ICICI Bank', 
      icon: '/image38.svg',
     
    },
    { 
      id: 'kotak', 
      name: 'Kotak Mahindra Bank', 
      icon: '/image39.svg',
      color: '#dc2626'
    },
    { 
      id: 'axis', 
      name: 'AU Small Finance Bank', 
      icon: '/image41.svg',
      color: '#f59e0b'
    },
    { 
      id: 'icici2', 
      name: 'ICICI Bank', 
      icon: '/image38.svg',
      color: '#f97316'
    }
  ];

  const handleBankSelect = (bankId) => {
    setSelectedBank(bankId);
    if (handleInputChange) {
      handleInputChange('netBankingBank', bankId);
    }
  };

  const handleContinue = () => {
    if (!selectedBank) {
      alert('Please select a bank');
      return;
    }
    if (onPaymentSuccess) {
      onPaymentSuccess();
    }
  };

  return (
    <div className="netbanking-payment">

    <div className='delivery-info-section'>
        <img src='/image18.svg' className='delivery-icon' />
        <span className='delivery-text'>Earliest Delivery By 21 Jun, 5 Pm</span>
      </div>
      
      <div className="netbanking-payment-header">
        <span className="back-arrow">←</span>
        <h2 className="payment-title">Select Bank</h2>
      </div>

     

      <div className="banks-container">
        <div className="banks1-grid">
          {banks.map((bank) => (
            <div
              key={bank.id}
              className={`bank1-item ${selectedBank === bank.id ? 'selected' : ''}`}
              onClick={() => handleBankSelect(bank.id)}
            >
              <div className="bank-icon-container">
                <div 
                  className="bank1-icon"
                  
                >
                 <img src= {bank.icon} />
                </div>
              </div>
              
              <span className="bank1-name">{bank.name}</span>
            </div>
          ))}
        </div>

        <div className="other-banks1-section">
          <button className="other-banks1-button">
            Select Different Bank
          </button>
        </div>
      </div>

      
    </div>
  );
};

export default NetBankingPayment;