import React, { useState } from 'react';
import './NetBankingPayment.css';

const NetBankingPayment = ({ formData, handleInputChange, onPaymentSuccess }) => {
  const [selectedBank, setSelectedBank] = useState('');

  const banks = [
    { 
      id: 'hdfc', 
      name: 'HDFC Bank', 
      icon: '🏦',
      color: '#004c8f'
    },
    { 
      id: 'sbi', 
      name: 'State Bank Of India', 
      icon: '🏛️',
      color: '#1e3a8a'
    },
    { 
      id: 'icici', 
      name: 'ICICI Bank', 
      icon: '🏦',
      color: '#f97316'
    },
    { 
      id: 'kotak', 
      name: 'Kotak Mahindra Bank', 
      icon: '🏦',
      color: '#dc2626'
    },
    { 
      id: 'axis', 
      name: 'AU Small Finance Bank', 
      icon: '🏦',
      color: '#f59e0b'
    },
    { 
      id: 'icici2', 
      name: 'ICICI Bank', 
      icon: '🏦',
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
      <div className="netbanking-payment-header">
        <span className="back-arrow">←</span>
        <h2 className="payment-title">Select Bank</h2>
      </div>

      <div className="banks-container">
        <div className="banks-grid">
          {banks.map((bank) => (
            <div
              key={bank.id}
              className={`bank-item ${selectedBank === bank.id ? 'selected' : ''}`}
              onClick={() => handleBankSelect(bank.id)}
            >
              <div className="bank-icon-container">
                <div 
                  className="bank-icon"
                  style={{ backgroundColor: bank.color }}
                >
                  {bank.icon}
                </div>
              </div>
              <span className="bank-name">{bank.name}</span>
            </div>
          ))}
        </div>

        <div className="other-banks-section">
          <button className="other-banks-button">
            Select Different Bank
          </button>
        </div>
      </div>

      <div className="netbanking-payment-footer">
        <button 
          className="continue-button"
          onClick={handleContinue}
          disabled={!selectedBank}
        >
          Continue →
        </button>
      </div>
    </div>
  );
};

export default NetBankingPayment;