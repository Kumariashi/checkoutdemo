import React, { useState } from 'react';
import './WalletPayment.css';

const WalletPayment = ({ formData, handleInputChange, onPaymentSuccess }) => {
  const [selectedWallet, setSelectedWallet] = useState('');

  const wallets = [
    {
      id: 'paytm',
      name: 'Paytm',
      offer: 'Flat 5% Instant Gift Upto Rs. 100 + Paytm OFFERS',
      icon: '💙',
      color: '#002970'
    },
    {
      id: 'phonepe',
      name: 'PhonePe',
      offer: 'Flat 5% Instant Gift Worth Up + Paytm OFFERS',
      icon: '📱',
      color: '#5f259f'
    },
    {
      id: 'amazonpay',
      name: 'Amazon Pay',
      offer: 'Flat 5% Instant Gift Worth 100 + Paytm OFFERS Flat 5% instant Gift Upto Cashback On Amazon Pay',
      icon: '📦',
      color: '#ff9900'
    },
    {
      id: 'phonepe2',
      name: 'PhonePe',
      offer: 'Upto 2.5% Cashback On Digital Money',
      icon: '📱',
      color: '#5f259f'
    }
  ];

  const handleWalletSelect = (walletId) => {
    setSelectedWallet(walletId);
    if (handleInputChange) {
      handleInputChange('selectedWallet', walletId);
    }
  };

  const handleContinue = () => {
    if (!selectedWallet) {
      alert('Please select a wallet');
      return;
    }
    if (onPaymentSuccess) {
      onPaymentSuccess();
    }
  };

  return (
    <div className="wallet-payment">
      <div className="wallet-payment-header">
        <span className="back-arrow">←</span>
        <h2 className="payment-title">Wallets</h2>
      </div>

      <div className="wallets-container">
        <div className="wallets-list">
          {wallets.map((wallet) => (
            <div
              key={`${wallet.id}-${wallet.offer}`}
              className={`wallet-item ${selectedWallet === wallet.id ? 'selected' : ''}`}
              onClick={() => handleWalletSelect(wallet.id)}
            >
              <div className="wallet-content">
                <div className="wallet-left">
                  <div 
                    className="wallet-icon"
                    style={{ backgroundColor: wallet.color }}
                  >
                    {wallet.icon}
                  </div>
                  <div className="wallet-info">
                    <h3 className="wallet-name">{wallet.name}</h3>
                    <p className="wallet-offer">{wallet.offer}</p>
                  </div>
                </div>
                <div className="wallet-arrow">
                  <span>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="wallet-payment-footer">
        <button 
          className="continue-button"
          onClick={handleContinue}
          disabled={!selectedWallet}
        >
          Continue →
        </button>
      </div>
    </div>
  );
};

export default WalletPayment;