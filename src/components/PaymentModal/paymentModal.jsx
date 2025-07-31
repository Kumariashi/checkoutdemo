import * as React from 'react';
import Box from '@mui/material/Box';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Modal from '@mui/material/Modal';
import './paymentModal.css';
import CheckIcon from '@mui/icons-material/Check';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
 
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "90vw",
  maxWidth: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  padding: 0,
};
 
const STEPS = {
  MOBILE: 'MOBILE',
  ADDRESS: 'ADDRESS',
  PAY: 'PAY',
};
 
export default function PaymentModal({ open, setOpen }) {
  const [step, setStep] = React.useState(STEPS.MOBILE);
 
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
                <span>View Coupons <KeyboardArrowRightIcon /></span>
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
                     <span>View Coupons <KeyboardArrowRightIcon /></span>
                   </div>
                 </div>
                 {/* User Info */}
          <div className="user-info">
            Hey! Welcome Back <strong>+91 6001258489</strong>
          </div>

          {/* Shipping Address */}
          <div className="section-header">
            Shipping Address <span className="add-address">+ Add Address</span>
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

          {/* Continue Button */}
          <button className="continue-btn" onClick={() => setStep(STEPS.PAY)}>Continue →</button>
          </div>


              



        );
      /*case STEPS.PAY:
        return (
          <div className='details-section'>
            <h2>Payment Options</h2>
            <button className='cta-continue'>Pay with UPI</button>
            <button className='cta-continue'>Credit/Debit Card</button>
            <button className='back-btn' onClick={goBack}>Back</button>
          </div>
        );*/
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
        <div className='progress-header'>
          {step !== STEPS.MOBILE && (
            <ArrowBackIcon onClick={goBack} style={{ cursor: 'pointer' }} />
          )}
          <span className='logo'>Logo</span>
          <CheckIcon sx={{ color: "#423434" }} />
          <span className={`progress-tag ${step === STEPS.MOBILE ? 'active' : ''}`}>Mobile</span>
          <span className='progress-tag'>----</span>
          <span className={`progress-tag ${step === STEPS.ADDRESS ? 'active' : ''}`}>Address</span>
          <span className='progress-tag'>----</span>
          <span className={`progress-tag ${step === STEPS.PAY ? 'active' : ''}`}>Pay</span>
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
          <div className='footer'>
            <span>T&C | Privacy<br />957a8g8b</span>
            <img src='https://i.postimg.cc/nsYsPv2S/Frame-49.png' alt='image' />
            <img src='https://i.postimg.cc/9wzr0shs/Frame-50.png' alt='image' />
            <img src='https://i.postimg.cc/JGfG7Tdd/Frame-51.png' alt='image' />
          </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
}