import React, { useState } from 'react';
import './WalletPayment.css';

const WalletPayment = ({ formData, handleInputChange, onPaymentSuccess }) => {
  const [selectedWallet, setSelectedWallet] = useState('');

  const wallets = [
    {
      id: 'paytm',
      name: 'Paytm',
      offer: 'free facewash+ gift worth 160 + prepaid off   100',
      icon: '💙',
      color: '#002970'
    },
    {
      id: 'phonepe',
      name: 'PhonePe',
      offer: 'free facewash+ gift worth 160 + prepaid off   100',
      icon: '📱',
      color: '#5f259f'
    },
    {
      id: 'amazonpay',
      name: 'Amazon',
      offer: 'free facewash+ gift worth 160 + prepaid off    100 & upto    300 cashback on amzan pay',
      icon: '📦',
      color: '#ff9900'
    },
    {
      id: 'phonepe2',
      name: 'PhonePe',
      offer: 'upto    150+ cashback on super money',
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
                  
                  >
                    {wallet.icon}
                  </div>
                  <div className="wallet-info">
                    <h3 className="wallet-name">{wallet.name}</h3>
                    <p className="wallet-offer">{wallet.offer}</p>
                  </div>
                </div>
                 <img src='/angle-right.svg' className='angle-right-icon' />
              </div>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default WalletPayment;