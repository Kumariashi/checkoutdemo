import React from 'react';
import './offers.css';
import CloseIcon from '@mui/icons-material/Close';

const Offers = () => {
  return (
    <div className="offers-container">
      {/* Header */}
      
      <div className="header">
      <div className='header in'>
        <span>Offers & Benefits</span>
       
        </div>
         <CloseIcon className="close-icon" />
      </div>

      

      {/* Login Prompt */}
      <div className="login-banner">
      <div className='login-text'>
        ➤ Complete Login To Get More Offers
      </div>
      </div>

      {/* Coupon Input */}
      <input
        className="coupon-input"
        type="text"
        placeholder="ENTER COUPON CODE"
      />

      {/* Tabs */}
      <div className="tab-buttons">
        <button>Active Coupons</button>
        <button>Payment Offers</button>
      </div>

      {/* Payment Offers Section */}
      <div className="payment-section-title"><p>Payment Offers</p></div>
      <div className="login-offer-box">➤ Complete Login To Get More Offers</div>

      {/* UPI Offers */}
      <div className="offer-category">UPI</div>
     

      <div className="offers-scroll-container">

  

         <div className="offer-box">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/SuperMoney_logo.png/320px-SuperMoney_logo.png" alt="SuperMoney"  />
        <div className="offer-details">
          <div className="offer-title">Upto ₹50 cashback via SuperMoney UPI</div>
          
          <div className="offer-subtitle">Upto ₹50 cashback via SuperMoney UPI</div>
        </div>
        <div className="view-more">View more</div>
       
      </div>
        
      

      <div className="offer-box">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Paytm_Logo.png" alt="Paytm" />
        <div className="offer-details">
          <div className="offer-title">Assured Cashback Up To ₹100 On Using Paytm UPI</div>
          <div className="offer-subtitle">Upto ₹50 cashback via SuperMoney UPI</div>
        </div>
        <div className="view-more">View more</div>
      </div>

      <div className="offer-box">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Mobikwik_Logo.png/320px-Mobikwik_Logo.png" alt="Mobikwik" />
        <div className="offer-details">
          <div className="offer-title">Upto ₹50 cashback via Mobikwik UPI</div>
          <div className="offer-subtitle">Upto ₹50 cashback via Mobikwik UPI</div>
        </div>
        <div className="view-more">View more</div>
      </div>

      <div className="offer-box">
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Amazon_Pay_logo.svg" alt="Amazon Pay" />
        <div className="offer-details">
          <div className="offer-title">Upto ₹50 cashback via Amazon Pay UPI</div>
          <div className="offer-subtitle">Upto ₹50 cashback via Amazon Pay UPI</div>
        </div>
        <div className="view-more">View more</div>
      </div>
     
       <div className="offer-box">
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Amazon_Pay_logo.svg" alt="Amazon Pay" />
        <div className="offer-details">
          <div className="offer-title">Upto ₹50 cashback via Amazon Pay UPI</div>
          <div className="offer-subtitle">Upto ₹50 cashback via Amazon Pay UPI</div>
        </div>
        <div className="view-more">View more</div>
      </div>
     
       <div className="offer-box">
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Amazon_Pay_logo.svg" alt="Amazon Pay" />
        <div className="offer-details">
          <div className="offer-title">Upto ₹50 cashback via Amazon Pay UPI</div>
          <div className="offer-subtitle">Upto ₹50 cashback via Amazon Pay UPI</div>
        </div>
        <div className="view-more">View more</div>
      </div>
      </div>
     

      {/* Wallet Offers */}
      <div className="offer-category">Wallets</div>

      <div className="offers-wallet-scroll-container">

      <div className="offer-box">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/SuperMoney_logo.png/320px-SuperMoney_logo.png" alt="SuperMoney" />
        <div className="offer-details">
          <div className="offer-title">Upto ₹50 cashback via SuperMoney UPI</div>
          <div className="offer-subtitle">Upto ₹50 cashback via SuperMoney UPI</div>
        </div>
        <div className="view-more">View more</div>
      </div>

      <div className="offer-box">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Paytm_Logo.png" alt="Paytm" />
        <div className="offer-details">
          <div className="offer-title">Assured Cashback Up To ₹100 On Using Paytm UPI</div>
          <div className="offer-subtitle">Upto ₹50 cashback via SuperMoney UPI</div>
        </div>
        <div className="view-more">View more</div>
      </div>

      <div className="offer-box">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/SuperMoney_logo.png/320px-SuperMoney_logo.png" alt="SuperMoney" />
        <div className="offer-details">
          <div className="offer-title">Upto ₹50 cashback via SuperMoney UPI</div>
          <div className="offer-subtitle">Upto ₹50 cashback via SuperMoney UPI</div>
        </div>
        <div className="view-more">View more</div>
      </div>

      <div className="offer-box">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Paytm_Logo.png" alt="Paytm" />
        <div className="offer-details">
          <div className="offer-title">Assured Cashback Up To ₹100 On Using Paytm UPI</div>
          <div className="offer-subtitle">Upto ₹50 cashback via SuperMoney UPI</div>
        </div>
        <div className="view-more">View more</div>
      </div>

      </div>

      {/* Footer */}
      <div className="footer">
        T&C | Privacy 95784b9b • PCI DSS Certified • Secured Checkout • Verified Payment
      </div>
    </div>
  );
};

export default Offers