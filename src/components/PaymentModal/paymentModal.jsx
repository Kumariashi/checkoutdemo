import * as React from 'react';
import Box from '@mui/material/Box';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Modal from '@mui/material/Modal';
import './paymentModal.css';
import CheckIcon from '@mui/icons-material/Check';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100vw',
  maxWidth: 412,
  height: '100vh',
  maxHeight: 912,
  bgcolor: 'background.paper',
  boxShadow: 24,
  //overflowY: 'auto',
  padding: 0,
  borderRadius: '8px',
};



const STEPS = {
  MOBILE: 'MOBILE',
  ADDRESS: 'ADDRESS',
  PAY: 'PAY',
  ADDADDRESS: 'ADDADDRESS',
  COUPON: 'COUPON',
};
// Add state management


export default function PaymentModal({ open, setOpen }) {
  const [step, setStep] = React.useState(STEPS.MOBILE);
  const [previousStep, setPreviousStep] = React.useState(STEPS.MOBILE);



  // ADD THESE LINES HERE:
  const [formData, setFormData] = React.useState({
    pincode: '110059',
    city: 'WEST',
    state: 'DELHI',
    fullName: '',
    email: '',
    couponCode: '',
    completeAddress: '',
    houseLandmark: '',
    addressType: 'Home'
  });

  // Add event handlers
  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleContinue = () => {
    if (step === STEPS.ADDADDRESS) {
      setStep(STEPS.ADDRESS); // or wherever you want to go after adding address
    }
  };




  const handleClose = () => setOpen(false);
  const goBack = () => {

    if (step === STEPS.ADDRESS) setStep(STEPS.MOBILE);
    else if (step === STEPS.PAY) setStep(STEPS.ADDRESS);
  };

  const renderStepContent = () => {
    switch (step) {
      case STEPS.MOBILE:
        return (
          <div className='details-section'>
            <div className='coupon-section'>
              <div className='coupon-input'>
                <div className='input-box'>
                  <input placeholder='ENTER COUPON CODE' type='text' />
                </div>
              </div>
              <div className='available'>
                <span>6 Coupons Available</span>
                <span>View Coupons <KeyboardArrowRightIcon onClick={() => { setPreviousStep(step); setStep(STEPS.COUPON); }} style={{ cursor: 'pointer' }} /></span>
              </div>
            </div>
            <div className='mobile-section'>
              <h2>Enter Mobile Number</h2>
              <div className='mobile-input-box'>
                <div><span>+91</span></div>
                <input placeholder='ENTER NUMBER' type='text' />
              </div>
              <p>Notify Me For Orders, Updates & Offers</p>
            </div>
            <div className='continue-section'>
              <button className='cta-continue' onClick={() => setStep(STEPS.ADDRESS)}>Continue</button>
              <p>
                By Proceeding, I Accept That I Have Read And Understood<br />
                The Services <span>Privacy Policy</span> And <span>T&C</span>
              </p>
            </div>
          </div>
        );
      case STEPS.ADDRESS:
        return (

          <div className='details-section'>
            <div className='coupon-section'>
              <div className='coupon-input'>
                <div className='input-box'>
                  <input placeholder='ENTER COUPON CODE' type='text' />
                </div>
              </div>
              <div className='available'>
                <span>6 Coupons Availble</span>
                <span>View Coupons <KeyboardArrowRightIcon onClick={() => { setPreviousStep(step); setStep(STEPS.COUPON); }} style={{ cursor: 'pointer' }} /></span>
              </div>
            </div>
            {/* User Info */}
            <div className="user-info">
              Hey! Welcome Back <strong>+91 6001258489</strong>
            </div>

            {/* Shipping Address */}
            <div className="section-header">
              Shipping Address <span className="add-address" onClick={() => setStep(STEPS.ADDADDRESS)}>+ Add Address</span>
            </div>

            {/* Address Cards */}
            {[1, 2].map((_, index) => (
              <div className="address-card" key={index}>
                <div className='adress-header'>
                  <div className="address-name">Abhishek Maurya</div>
                  <div className="address-actions">
                    <button>Edit</button>
                    <button>Delete</button>
                  </div>
                </div>
                <div className="address-details">
                  70 Washington Square South, New York University, Manhattan, New York City, NY 10012, United States Of America
                </div>
                <div className="address-email">abcde987356@gmail.com</div>
              </div>
            ))}

            {/* Shipping Method */}
            <div className="shipping-method-section">
              <p className="section-title">Shipping method</p>
              <div className="shipping-option">
                <div className="shipping-badge">
                  <span>Free Shipping</span>
                  <span className="shipping-price">₹0</span>
                </div>
                <p className="delivery-estimate">
                  Earliest Delivery by <strong>21 Jun, 5 pm</strong>
                </p>
              </div>
            </div>

          </div>








        );
      case STEPS.ADDADDRESS:
        return (
          <div className='details-section'>
            <div className='coupon-section'>
              <div className='coupon-input'>
                <div className='input-box'>
                  <input placeholder='ENTER COUPON CODE' type='text' />
                </div>
              </div>
              <div className='available'>
                <span>6 Coupons Availble</span>
                <span>View Coupons <KeyboardArrowRightIcon onClick={() => { setPreviousStep(step); setStep(STEPS.COUPON); }} style={{ cursor: 'pointer' }} /></span>
              </div>
            </div>
            {/* Add New Address Section - THIS IS MISSING */}
            <div style={{ width: '100%' }}>
              <div className='section-header'>
                Add New Address
                <span className="mandatory-fields">*Mandatory Fields</span>
              </div>

              <div className="form-container">
                {/* Pincode */}
                <div className="form-group">
                  <label className="form-label">Pincode*</label>
                  <input
                    type="text"
                    className="form-input"
                    value={formData.pincode}
                    onChange={(e) => handleInputChange('pincode', e.target.value)}
                  />
                </div>

                {/* City and State */}
                <div className="form-group-row">
                  <div className="form-group">
                    <label className="form-label">City*</label>
                    <input
                      type="text"
                      className="form-input"
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">State*</label>
                    <input
                      type="text"
                      className="form-input"
                      value={formData.state}
                      onChange={(e) => handleInputChange('state', e.target.value)}
                    />
                  </div>
                </div>

                {/* Full Name */}
                <div className="form-group">
                  <label className="form-label">Full Name*</label>
                  <input
                    type="text"
                    className="form-input"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                  />
                </div>

                {/* Email */}
                <div className="form-group">
                  <label className="form-label">Email Address*</label>
                  <input
                    type="email"
                    className="form-input"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                  />
                  <p className="email-notice">
                    You cannot edit this email as you are logged in using this on the website. Please login with an updated email on website to auto-update it.
                  </p>
                </div>


                {/* Complete Address */}
                <div className="form-group">
                  <label className="form-label">Complete Address *</label>
                  <textarea
                    className="form-textarea"
                    value={formData.completeAddress}
                    onChange={(e) => handleInputChange('completeAddress', e.target.value)}
                    rows="3"
                  />
                </div>

                {/* House/Floor/Landmark */}
                <div className="form-group">
                  <label className="form-label">House,Floor,Landmark *</label>
                  <input
                    type="text"
                    className="form-input"
                    value={formData.houseLandmark}
                    onChange={(e) => handleInputChange('houseLandmark', e.target.value)}
                  />
                </div>

                {/* Address Type */}
                <div className="form-group">
                  <label className="form-label">Address Type</label>
                  <div className="radio-group">
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="addressType"
                        value="Home"
                        checked={formData.addressType === 'Home'}
                        onChange={(e) => handleInputChange('addressType', e.target.value)}
                      />
                      <span className="radio-label">Home</span>
                    </label>
                    <label className="radio-option">
                      <input
                        type="radio"
                        name="addressType"
                        value="Work"
                        checked={formData.addressType === 'Work'}
                        onChange={(e) => handleInputChange('addressType', e.target.value)}
                      />
                      <span className="radio-label">Work</span>
                    </label>
                  </div>
                </div>

                {/* Shipping Method */}
                <div className="form-group">
                  <label className="form-label">Shipping method</label>
                  <div className="shipping-option-container">
                    <div className="shipping-option-selected">
                      <div className="shipping-icon">🚚</div>
                      <div className="shipping-details">
                        <span className="shipping-type">Free Shipping</span>
                        <span className="shipping-price">₹0</span>
                      </div>
                    </div>
                    <div className="delivery-info">
                      <span className="delivery-icon">✅</span>
                      <span className="delivery-text">Earliest Delivery by 21 Jun, 5 Pm</span>
                    </div>
                  </div>
                </div>



                {/* Continue Button */}
                <button onClick={handleContinue} className='cta-continue'>
                  Continue →
                </button>

                {/* Terms */}
                <div className='continue-section'>
                  <p>By Proceeding, I Accept That I Have Read And Understood</p>
                  <p>The Services <span>Privacy Policy</span> And <span>T&C</span></p>
                </div>
              </div>
            </div>

            {/* Continue Button */}

          </div>






        );
      case STEPS.PAY:
        return (
          <div className='details-section'>
            {/* Your existing coupon section */}
            <div className='coupon-section'>
              <div className='coupon-input'>
                <div className='input-box'>
                  <input placeholder='ENTER COUPON CODE' type='text' />
                </div>
              </div>
              <div className='available'>
                <span>6 Coupons Available</span>
                <span>View Coupons <KeyboardArrowRightIcon onClick={() => { setPreviousStep(step); setStep(STEPS.COUPON); }} style={{ cursor: 'pointer' }} /></span>
              </div>
            </div>



            {/* Delivery Info */}
            <div className='delivery-info-section'>
              <span className='delivery-icon'>🚚</span>
              <span className='delivery-text'>Earliest Delivery By 21 Jun, 5 Pm</span>
            </div>

            {/* Payment Options */}
            <div className='payment-options-section'>
              <h3 className='payment-title'>Payment Option</h3>
              <p className='payment-subtitle'>Extra Discount + Offers Available on Prepaid Payments</p>

              {/* UPI Section */}
              <div className='payment-method-card selected'>
                <div className='payment-method-header'>
                  <div className='payment-method-left'>
                    <span className='payment-icon'>▶</span>
                    <span className='payment-name'>UPI</span>
                  </div>
                  <span className='payment-price'>₹ 399.00</span>
                </div>

                {/* UPI Apps Horizontal Scroller */}
                <div className='upi-apps-container'>
                  <div className='upi-apps-scroller'>
                    <div className='upi-app-item'>
                      <div className='upi-app-icon paytm'>
                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJ4PSI0IiBmaWxsPSIjMDAyQjhFIi8+PC9zdmc+" alt="Paytm" />
                      </div>
                      <span className='upi-app-name'>Paytm</span>
                    </div>

                    <div className='upi-app-item'>
                      <div className='upi-app-icon phonePe'>
                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1zbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJ4PSI0IiBmaWxsPSIjNUYyNTlGIi8+PC9zdmc+" alt="PhonePe" />
                      </div>
                      <span className='upi-app-name'>PhonePe</span>
                    </div>

                    <div className='upi-app-item'>
                      <div className='upi-app-icon gpay'>
                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1zbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJ4PSI0IiBmaWxsPSIjNDI4NUY0Ii8+PC9zdmc+" alt="G Pay" />
                      </div>
                      <span className='upi-app-name'>G Pay</span>
                    </div>

                    <div className='upi-app-item'>
                      <div className='upi-app-icon amazon'>
                        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1zbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJ4PSI0IiBmaWxsPSIjRkY5OTAwIi8+PC9zdmc+" alt="Amazon Pay" />
                      </div>
                      <span className='upi-app-name'>Amazon Pay</span>
                    </div>
                  </div>
                </div>

                {/* UPI Apps Button */}
                <div className='all-upi-apps-btn'>
                  <span>ALL UPI Apps</span>
                  <span>4 more Available</span>
                  <span>▶</span>
                </div>
              </div>

              {/* UPI ID Input */}
              <div className='upi-id-section'>
                <label className='upi-label'>Pay Via UPI ID</label>
                <div className='upi-input-container'>
                  <input
                    type='text'
                    placeholder='Enter Your UPI ID'
                    className='upi-input'


                  />
                  <button className='pay-button'>PAY</button>
                </div>
              </div>

              {/* Other Payment Methods */}
              <div className='payment-method-card'>
              <div className="xyz"> hello world</div>
                <div className='payment-method-header'>
                  <div className='payment-method-left'>
                    <span className='payment-icon'>💳</span>
                    <div className='payment-method-info'>
                      <span className='payment-name'>Debit/Credit Cards</span>
                      <span className='payment-subtitle'>Visa, MasterCard, Rupay</span>
                    </div>
                  </div>
                  <span className='payment-price'>₹ 399</span>
                </div>
              </div>

              <div className='payment-method-card'>
                <div className='payment-method-header'>
                  <div className='payment-method-left'>
                    <span className='payment-icon'>👛</span>
                    <div className='payment-method-info'>
                      <span className='payment-name'>Wallets</span>
                      <span className='payment-subtitle'>PhonePe, Amazon, Airtel</span>
                    </div>
                  </div>
                  <span className='payment-price'>₹ 399</span>
                </div>
              </div>

              <div className='payment-method-card'>
                <div className='payment-method-header'>
                  <div className='payment-method-left'>
                    <span className='payment-icon'>🏦</span>
                    <div className='payment-method-info'>
                      <span className='payment-name'>Netbanking</span>
                      <span className='payment-subtitle'>SBI, HDFC, ICICI, Axis</span>
                    </div>
                  </div>
                  <span className='payment-price'>₹ 399</span>
                </div>
              </div>

              <div className='payment-method-card'>
                <div className='payment-method-header'>
                  <div className='payment-method-left'>
                    <span className='payment-icon'>💰</span>
                    <div className='payment-method-info'>
                      <span className='payment-name'>Cash On Delivery</span>
                      <span className='payment-subtitle'>Pay Online To Save Rs. 50</span>
                    </div>
                  </div>
                  <span className='payment-price'>₹ 449</span>
                </div>
              </div>
            </div>





          </div>
        );

      case STEPS.COUPON:
        return (
          <>
            {/* Login Prompt */}
            <div className="login-banner">
              <div className="login-text">
                ➤ Complete Login To Get More Offers
              </div>
            </div>

            {/* Coupon Input */}
            <div className="coup-input">
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

            {/* Offer boxes go here */}
            {/* ... all your <div className="offer-box"> for UPI ... */}
            <div className="offers-scroll-container">
              <div className="offers-list">
                <div className="offer-box">
                  <div className="offer-box-header">
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1zbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJ4PSI0IiBmaWxsPSIjNjM2N0Y4Ii8+PHBhdGggZD0iTTcgMTJIMTdNMTIgN1YxNyIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L3N2Zz4=" alt="SuperMoney" />
                    <div className="offer-title">Upto ₹50 cashback via SuperMoney UPI</div>
                  </div>
                  <div className="offer-footer">
                    <div className="offer-subtitle">Upto ₹50 cashback via SuperMoney UPI</div>
                    <div className="view-more">View more</div>
                  </div>
                </div>

                <div className="offer-box">
                  <div className="offer-box-header">
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1zbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJ4PSI0IiBmaWxsPSIjMDAyQjhFIi8+PHBhdGggZD0iTTYuNSAxMkgxNy41TTEyIDYuNVYxNy41IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPg==" alt="Paytm" />
                    <div className="offer-title">Assured Cashback Up To ₹100 On Using Paytm UPI</div>
                  </div>
                  <div className="offer-footer">
                    <div className="offer-subtitle">Upto ₹50 cashback via SuperMoney UPI</div>
                    <div className="view-more">View more</div>
                  </div>
                </div>

                <div className="offer-box">
                  <div className="offer-box-header">
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1zbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJ4PSI0IiBmaWxsPSIjMDBCOUY1Ii8+PHBhdGggZD0iTTYuNSAxMkgxNy41TTEyIDYuNVYxNy41IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPg==" alt="Mobikwik" />
                    <div className="offer-title">Upto ₹50 cashback via Mobikwik UPI</div>
                  </div>
                  <div className="offer-footer">
                    <div className="offer-subtitle">Upto ₹50 cashback via Mobikwik UPI</div>
                    <div className="view-more">View more</div>
                  </div>
                </div>

                <div className="offer-box">
                  <div className="offer-box-header">
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1zbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJ4PSI0IiBmaWxsPSIjRkY5OTAwIi8+PHBhdGggZD0iTTYuNSAxMkgxNy41TTEyIDYuNVYxNy41IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPg==" alt="Amazon Pay" />
                    <div className="offer-title">Upto ₹50 cashback via Amazon Pay UPI</div>
                  </div>
                  <div className="offer-footer">
                    <div className="offer-subtitle">Upto ₹50 cashback via Amazon Pay UPI</div>
                    <div className="view-more">View more</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Wallet Offers */}
            <div className="offer-category">Wallets</div>
            <div className="offers-scroll-container">

              {/* Offer boxes go here */}
              {/* ... all your <div className="offer-box"> for Wallets ... */}
              <div className="offer-box">
                <div className="offer-box-header">
                  <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1zbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJ4PSI0IiBmaWxsPSIjNjM2N0Y4Ii8+PHBhdGggZD0iTTcgMTJIMTdNMTIgN1YxNyIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L3N2Zz4=" alt="SuperMoney" />
                  <div className="offer-title">Upto ₹50 cashback via SuperMoney Wallet</div>
                </div>
                <div className="offer-footer">
                  <div className="offer-subtitle">Upto ₹50 cashback via SuperMoney Wallet</div>
                  <div className="view-more">View more</div>
                </div>
              </div>

              <div className="offer-box">
                <div className="offer-box-header">
                  <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1zbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHJ4PSI0IiBmaWxsPSIjMDAyQjhFIi8+PHBhdGggZD0iTTYuNSAxMkgxNy41TTEyIDYuNVYxNy41IiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPg==" alt="Paytm" />
                  <div className="offer-title">Assured Cashback Up To ₹100 On Using Paytm Wallet</div>
                </div>
                <div className="offer-footer">
                  <div className="offer-subtitle">Upto ₹50 cashback via Paytm Wallet</div>
                  <div className="view-more">View more</div>
                </div>
              </div>

            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>

        {/* STEP: MOBILE */}
        {step === STEPS.MOBILE && (
          <>
            <div className='progress-header'>
              <ArrowBackIcon onClick={handleClose} style={{ cursor: 'pointer' }} />
              <span className='logo'>Logo</span>
              <CheckIcon sx={{ color: "#423434" }} />
              <span className={`progress-tag ${step === STEPS.MOBILE ? 'active' : ''}`}>Mobile</span>
              <span className='progress-tag'>----</span>
              <span className={`progress-tag ${step === STEPS.ADDRESS ? 'active' : ''}`}>Address</span>
              <span className='progress-tag'>----</span>
              <span className={`progress-tag ${step === STEPS.COUPON ? 'active' : ''}`}>Coupon</span>
            </div>

            <div className='banner-modal'>
              <span>Free Shipping | Ultra-Fast Delivery</span>
            </div>

            <div className='scroll-container'>
              <div className='dynamic-content'>
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

                {renderStepContent()}
              </div>

              <div className='footer'>
                <span>T&C | Privacy<br />957a8g8b</span>
                <img src='https://i.postimg.cc/nsYsPv2S/Frame-49.png' alt='image' />
                <img src='https://i.postimg.cc/9wzr0shs/Frame-50.png' alt='image' />
                <img src='https://i.postimg.cc/JGfG7Tdd/Frame-51.png' alt='image' />
              </div>
            </div>

          </>
        )}

        {/* STEP: ADDRESS */}
        {step === STEPS.ADDRESS && (
          <>
            <div className='progress-header'>
              <ArrowBackIcon onClick={goBack} style={{ cursor: 'pointer' }} />
              <span className='logo'>Logo</span>

              <span className={`progress-tag ${step === STEPS.MOBILE ? 'active' : ''}`}>Mobile</span>
              <span className='progress-tag'>----</span>
              <CheckIcon sx={{ color: "#423434" }} />
              <span className={`progress-tag ${step === STEPS.ADDRESS ? 'active' : ''}`}>Address</span>
              <span className='progress-tag'>----</span>
              <span className={`progress-tag ${step === STEPS.COUPON ? 'active' : ''}`}>Coupon</span>
            </div>

            <div className='banner-modal'>
              <span>Free Shipping | Ultra-Fast Delivery</span>
            </div>

            <div className='scroll-container'>
              <div className='dynamic-content'>
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

                {renderStepContent()}
              </div>

              <div className='footer-address'>
                
                  <button className="continue-btn" onClick={() => setStep(STEPS.PAY)}>Continue →</button>
                
                <div className='footer-imgs' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', gap: '16px' }}>
                  <div style={{ whiteSpace: 'nowrap' }}>T&C | Privacy<br />957a8g8b</div>
                  <img src='/frame49.svg' alt='image' className='img-1'/>
                  <img src='/frame50.svg' alt='image' className='img-1'/>
                  <img src='/frame51.svg' alt='image' className='img-1' />
                </div>
              </div>
            </div>

          </>
        )}

        {step === STEPS.ADDADDRESS && (
          <>
            <div className='progress-header'>
              <ArrowBackIcon onClick={() => setStep(STEPS.ADDRESS)} style={{ cursor: 'pointer' }} />
              <span className='logo'>Logo</span>

              <span className={`progress-tag ${step === STEPS.MOBILE ? 'active' : ''}`}>Mobile</span>
              <span className='progress-tag'>----</span>
              <CheckIcon sx={{ color: "#423434" }} />
              <span className={`progress-tag ${step === STEPS.ADDRESS ? 'active' : ''}`}>Address</span>
              <span className='progress-tag'>----</span>
              <span className={`progress-tag ${step === STEPS.COUPON ? 'active' : ''}`}>Coupon</span>
            </div>

            <div className='banner-modal'>
              <span>Free Shipping | Ultra-Fast Delivery</span>
            </div>

            <div className='scroll-container'>
              <div className='dynamic-content'>
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

                {renderStepContent()}
              </div>

              <div className='footer'>
                <span>T&C | Privacy<br />957a8g8b</span>
                <img src='https://i.postimg.cc/nsYsPv2S/Frame-49.png' alt='image' />
                <img src='https://i.postimg.cc/9wzr0shs/Frame-50.png' alt='image' />
                <img src='https://i.postimg.cc/JGfG7Tdd/Frame-51.png' alt='image' />
              </div>
            </div>

          </>
        )}

        {step === STEPS.PAY && (
          <>
            <div className='progress-header'>
              <ArrowBackIcon onClick={goBack} style={{ cursor: 'pointer' }} />
              <span className='logo'>Logo</span>

              <span className={`progress-tag ${step === STEPS.MOBILE ? 'active' : ''}`}>Mobile</span>
              <span className='progress-tag'>----</span>
              <CheckIcon sx={{ color: "#423434" }} />
              <span className={`progress-tag ${step === STEPS.ADDRESS ? 'active' : ''}`}>Address</span>
              <span className='progress-tag'>----</span>
              <span className={`progress-tag ${step === STEPS.COUPON ? 'active' : ''}`}>Coupon</span>
            </div>

            <div className='banner-modal'>
              <span>Free Shipping | Ultra-Fast Delivery</span>
            </div>

            <div className='scroll-container'>
              <div className='dynamic-content'>
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

                {renderStepContent()}
              </div>

              <div className='footer'>
                <span>T&C | Privacy<br />957a8g8b</span>
                <img src='https://i.postimg.cc/nsYsPv2S/Frame-49.png' alt='image' />
                <img src='https://i.postimg.cc/9wzr0shs/Frame-50.png' alt='image' />
                <img src='https://i.postimg.cc/JGfG7Tdd/Frame-51.png' alt='image' />
              </div>
            </div>

          </>
        )}

        {step === STEPS.COUPON && (
          <>
            <div className="header">
              <div className="header-in">
                <span>Offers & Benefits</span>
              </div>
              <CloseIcon className="close-icon" onClick={() => setStep(previousStep)} style={{ cursor: 'pointer' }} />
            </div>

            <div className='scroll-container'>
              <div className='dynamic-content'>

                {renderStepContent()}
              </div>



              <div className='footer'>
                <span>T&C | Privacy<br />957a8g8b</span>
                <img src='https://i.postimg.cc/nsYsPv2S/Frame-49.png' alt='image' />
                <img src='https://i.postimg.cc/9wzr0shs/Frame-50.png' alt='image' />
                <img src='https://i.postimg.cc/JGfG7Tdd/Frame-51.png' alt='image' />
              </div>
            </div>


          </>

        )}

      </Box>
    </Modal>
  );

}