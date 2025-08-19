import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import './CouponStep.css';
 
const CouponStep = ({ onClose, offersData }) => {
  // Default data structure if no data is passed
  const defaultOffersData = {
    upiOffers: [
      {
        id: 1,
        icon: "/image.svg",
        title: "Upto ₹50 cashback via SuperMoney UPI",
        subtitle: "Upto ₹50 cashback via SuperMoney UPI",
        provider: "SuperMoney"
      },
      {
        id: 2,
        icon: "/image16.svg",
        title: "Assured Cashback Up To ₹100 On Using Paytm UPI",
        subtitle: "Upto ₹50 cashback via Paytm UPI",
        provider: "Paytm"
      },
      {
        id: 3,
        icon: "image16.svg",
        title: "Upto ₹50 cashback via SuperMoney UPI",
        subtitle: "Upto ₹50 cashback via SuperMoney UPI",
        provider: "SuperMoney"
      },
      {
        id: 4,
        icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJ4PSI0IiBmaWxsPSIjMDAyQjhFIi8+PHBhdGggZD0iTTYuNSAxMkgxNy41TTEyIDYuNVYxNy41IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPg==",
        title: "Upto Cashback Up To ₹100 On Using Paytm UPI",
        subtitle: "Upto ₹50 cashback via mobikwik UPI",
        provider: "mobikwik"
      },
      {
        id: 5,
        icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJ4PSI0IiBmaWxsPSIjNjM2N0Y4Ii8+PHBhdGggZD0iTTcgMTJIMTdNMTIgN1YxNyIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L3N2Zz4=",
        title: "Upto ₹50 cashback via SuperMoney UPI",
        subtitle: "Upto ₹50 cashback via SuperMoney UPI",
        provider: "SuperMoney"
      },
      {
        id: 6,
        icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJ4PSI0IiBmaWxsPSIjMDAyQjhFIi8+PHBhdGggZD0iTTYuNSAxMkgxNy41TTEyIDYuNVYxNy41IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPg==",
        title: "Assured Cashback Up To ₹100 On Using mobikwik UPI",
        subtitle: "Upto ₹50 cashback via mobikwik UPI",
        provider: "mobikwik"
      },
      {
        id: 7,
        icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJ4PSI0IiBmaWxsPSIjNjM2N0Y4Ii8+PHBhdGggZD0iTTcgMTJIMTdNMTIgN1YxNyIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L3N2Zz4=",
        title: "Upto ₹50 cashback via Paytm UPI",
        subtitle: "Upto ₹50 cashback via Paytm UPI",
        provider: "Paytm"
      },
      {
        id: 8,
        icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJ4PSI0IiBmaWxsPSIjMDAyQjhFIi8+PHBhdGggZD0iTTYuNSAxMkgxNy41TTEyIDYuNVYxNy41IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPg==",
        title: "Assured Cashback Up To ₹100 On Using Paytm UPI",
        subtitle: "Upto ₹50 cashback via Paytm UPI",
        provider: "Paytm"
      }
    ],
    walletOffers: [
      {
        id: 1,
        icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJ4PSI0IiBmaWxsPSIjNjM2N0Y4Ii8+PHBhdGggZD0iTTcgMTJIMTdNMTIgN1YxNyIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L3N2Zz4=",
        title: "Upto ₹50 cashback via SuperMoney Wallet",
        subtitle: "Upto ₹50 cashback via SuperMoney Wallet",
        provider: "SuperMoney"
      },
      {
        id: 2,
        icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJ4PSI0IiBmaWxsPSIjNjM2N0Y4Ii8+PHBhdGggZD0iTTcgMTJIMTdNMTIgN1YxNyIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L3N2Zz4=",
        title: "Upto ₹50 cashback via  Paytm Wallet",
        subtitle: "Upto ₹50 cashback via  Paytm Wallet",
        provider: " Paytm"
      },
      {
        id: 3,
        icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJ4PSI0IiBmaWxsPSIjNjM2N0Y4Ii8+PHBhdGggZD0iTTcgMTJIMTdNMTIgN1YxNyIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L3N2Zz4=",
        title: "Upto ₹50 cashback via SuperMoney Wallet",
        subtitle: "Upto ₹50 cashback via SuperMoney Wallet",
        provider: "SuperMoney"
      },
      {
        id: 4,
        icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJ4PSI0IiBmaWxsPSIjNjM2N0Y4Ii8+PHBhdGggZD0iTTcgMTJIMTdNMTIgN1YxNyIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L3N2Zz4=",
        title: "Upto ₹50 cashback via mobikwik Wallet",
        subtitle: "Upto ₹50 cashback via mobikwik Wallet",
        provider: "mobikwik"
      },
      {
        id: 5,
        icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJ4PSI0IiBmaWxsPSIjNjM2N0Y4Ii8+PHBhdGggZD0iTTcgMTJIMTdNMTIgN1YxNyIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L3N2Zz4=",
        title: "Upto ₹50 cashback via SuperMoney Wallet",
        subtitle: "Upto ₹50 cashback via SuperMoney Wallet",
        provider: "SuperMoney"
      },
      {
        id: 6,
        icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJ4PSI0IiBmaWxsPSIjNjM2N0Y4Ii8+PHBhdGggZD0iTTcgMTJIMTdNMTIgN1YxNyIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L3N2Zz4=",
        title: "Upto ₹50 cashback via  Paytm Wallet",
        subtitle: "Upto ₹50 cashback via  Paytm Wallet",
        provider: " Paytm"
      },
      {
        id: 7,
        icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJ4PSI0IiBmaWxsPSIjNjM2N0Y4Ii8+PHBhdGggZD0iTTcgMTJIMTdNMTIgN1YxNyIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L3N2Zz4=",
        title: "Upto ₹50 cashback via SuperMoney Wallet",
        subtitle: "Upto ₹50 cashback via SuperMoney Wallet",
        provider: "SuperMoney"
      },
      {
        id: 8,
        icon: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJ4PSI0IiBmaWxsPSIjNjM2N0Y4Ii8+PHBhdGggZD0iTTcgMTJIMTdNMTIgN1YxNyIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L3N2Zz4=",
        title: "Upto ₹50 cashback via SuperMoney Wallet",
        subtitle: "Upto ₹50 cashback via SuperMoney Wallet",
        provider: "SuperMoney"
      }
    ]
  };
 
  // Use passed data or default data
  const offers = offersData || defaultOffersData;
 
  // Render individual offer box
  const renderOfferBox = (offer) => (
    <div key={offer.id} className="offer-box">
      <div className="offer-box-header">
        <img src={offer.icon} alt={offer.provider} />
        <div className="offer-title">{offer.title}</div>
      </div>
      <div className="offer-footer">
        <div className="offer-subtitle">{offer.subtitle}</div>
        <div className="view-more">View more</div>
      </div>
    </div>
  );
 
  return (
    <>
      <div className="header1">
        <div className="header-in">
          <span>Offers & Benefits</span>
        </div>
        <CloseIcon className="close-icon1" onClick={onClose} style={{ cursor: 'pointer' }} />
      </div>

       <div className='scroll-container'>
              <div className='dynamic-content'>
      {/* Login Prompt */}
      <div className="login-banner">
        <div className="login-text">
          ➤ Complete Login To Get More Offers
        </div>
      </div>
 
      {/* Coupon Input */}
      <div className="coup-sec">
        <div className="in-box">
          <input
            className="coup-input"
            type="text"
            placeholder="ENTER COUPON CODE"
          />
        </div>
      </div>
 
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
      <div className="offers-scroll-container upi-offers">
        <div className="offers-list">
          {offers.upiOffers.map(offer => renderOfferBox(offer))}
        </div>
      </div>
 
      {/* Wallet Offers */}
      <div className="offer-category">Wallets</div>
       <div className="offers-scroll-container wallet-offers">
        <div className="offers-list">
          {offers.walletOffers.map(offer => renderOfferBox(offer))}
        </div>
      </div>
      </div>
      </div>
    </>
  );
};
 
export default CouponStep;