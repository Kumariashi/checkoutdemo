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
      <div className="payment-section-title">Payment Offers</div>
      <div className="login-offer-box">➤ Complete Login To Get More Offers</div>

      {/* UPI Offers */}
      <div className="offer-category">UPI</div>
      <div className="offers-scroll-container">
        <div className="offer-box">
          <div className="offer-box-header">
            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJ4PSI0IiBmaWxsPSIjNjM2N0Y4Ii8+PHBhdGggZD0iTTcgMTJIMTdNMTIgN1YxNyIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L3N2Zz4=" alt="SuperMoney" />
            <div className="offer-title">Upto ₹50 cashback via SuperMoney UPI</div>
          </div>
          <div className="offer-footer">
            <div className="offer-subtitle">Upto ₹50 cashback via SuperMoney UPI</div>
            <div className="view-more">View more</div>
          </div>
        </div>

        <div className="offer-box">
          <div className="offer-box-header">
            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJ4PSI0IiBmaWxsPSIjMDAyQjhFIi8+PHBhdGggZD0iTTYuNSAxMkgxNy41TTEyIDYuNVYxNy41IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPg==" alt="Paytm" />
            <div className="offer-title">Assured Cashback Up To ₹100 On Using Paytm UPI</div>
          </div>
          <div className="offer-footer">
            <div className="offer-subtitle">Upto ₹50 cashback via SuperMoney UPI</div>
            <div className="view-more">View more</div>
          </div>
        </div>

        <div className="offer-box">
          <div className="offer-box-header">
            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJ4PSI0IiBmaWxsPSIjMDBCOUY1Ii8+PHBhdGggZD0iTTYuNSAxMkgxNy41TTEyIDYuNVYxNy41IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPg==" alt="Mobikwik" />
            <div className="offer-title">Upto ₹50 cashback via Mobikwik UPI</div>
          </div>
          <div className="offer-footer">
            <div className="offer-subtitle">Upto ₹50 cashback via Mobikwik UPI</div>
            <div className="view-more">View more</div>
          </div>
        </div>

        <div className="offer-box">
          <div className="offer-box-header">
            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJ4PSI0IiBmaWxsPSIjRkY5OTAwIi8+PHBhdGggZD0iTTYuNSAxMkgxNy41TTEyIDYuNVYxNy41IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPg==" alt="Amazon Pay" />
            <div className="offer-title">Upto ₹50 cashback via Amazon Pay UPI</div>
          </div>
          <div className="offer-footer">
            <div className="offer-subtitle">Upto ₹50 cashback via Amazon Pay UPI</div>
            <div className="view-more">View more</div>
          </div>
        </div>
      </div>

      {/* Wallet Offers */}
      <div className="offer-category">Wallets</div>
      <div className="offers-scroll-container">
        <div className="offer-box">
          <div className="offer-box-header">
            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJ4PSI0IiBmaWxsPSIjNjM2N0Y4Ii8+PHBhdGggZD0iTTcgMTJIMTdNMTIgN1YxNyIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L3N2Zz4=" alt="SuperMoney" />
            <div className="offer-title">Upto ₹50 cashback via SuperMoney Wallet</div>
          </div>
          <div className="offer-footer">
            <div className="offer-subtitle">Upto ₹50 cashback via SuperMoney Wallet</div>
            <div className="view-more">View more</div>
          </div>
        </div>

        <div className="offer-box">
          <div className="offer-box-header">
            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJ4PSI0IiBmaWxsPSIjMDAyQjhFIi8+PHBhdGggZD0iTTYuNSAxMkgxNy41TTEyIDYuNVYxNy41IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPg==" alt="Paytm" />
            <div className="offer-title">Assured Cashback Up To ₹100 On Using Paytm Wallet</div>
          </div>
          <div className="offer-footer">
            <div className="offer-subtitle">Upto ₹50 cashback via Paytm Wallet</div>
            <div className="view-more">View more</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        T&C | Privacy 95784b9b • PCI DSS Certified • Secured Checkout • Verified Payment
      </div>
    </div>
  );
};

export default Offers;