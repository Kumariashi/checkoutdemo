import * as React from 'react';
import Box from '@mui/material/Box';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Modal from '@mui/material/Modal';
import './paymentModal.css'
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
  p: 4,
  padding: 0
};

export default function PaymentModal({ open, setOpen }) {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className='progress-header'>
            <ArrowBackIcon />
            <span className='logo' >Logo</span>
            <CheckIcon sx={{ color: "#423434" }} />
            <span className='progress-tag active' >Mobile</span>
            <span className='progress-tag' >----</span>
            <span className='progress-tag' >Address</span>
            <span className='progress-tag' >----</span>
            <span className='progress-tag' >Pay</span>
          </div>
          <div className='banner-modal'>
            <span>Free Shipping |  Ultra-Fast Delivery</span>
          </div>
          <div className='dynamic-content'>
            <div className='content-heading'>
              <div className='dropdown-container'>
                <span><ShoppingCartIcon sx={{ color: '' }} /></span>
                <span>Order Summary</span>
                <span><KeyboardArrowDownIcon /></span>
              </div>
              <div className='price-container'>
                <span className='original'>₹ 699</span>
                <span className='discounted'>₹ 399</span>
              </div>
            </div>
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
              {/* <div className='mobile-section'>
                <h2>Enter Mobile Number</h2>
                <div className='mobile-input-box'>
                  <div><span>+91</span></div>
                  <input placeholder='ENTER NUMBER' type='text'></input>
                </div>
                <p>Notify Me For Orders, Updates & Offers</p>
              </div>
              <div className='continue-section'>
                <button className='cta-continue'>Continue </button>
                <p>By Proceeding, I Accept That I Have Read And Understood<br></br>The Services <span>Privacy Policy</span> And <span>T&C</span></p>
              </div> */ }
              

       

      {/* User Info */}
      <div className="user-info">
        Hey! Welcome Back <strong>+91 6001258489</strong>
      </div>

      {/* Shipping Address */}
      <div className="section-header">
        Shipping Address <span className="add-address">+ Add Address</span>
      </div>

      {/* Address Cards */}
      <div className="address-card">
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

      <div className="address-card">
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
      <button className="continue-btn">Continue →</button>
      
              <div className='footer'>
                <span>T&C | Privacy<br></br>957a8g8b</span>
                <img src='https://i.postimg.cc/nsYsPv2S/Frame-49.png' alt='image' />
                <img src='https://i.postimg.cc/9wzr0shs/Frame-50.png' alt='image' />
                <img src='https://i.postimg.cc/JGfG7Tdd/Frame-51.png' alt='image' />
              </div>
            </div>
          </div>{/*</Box></div>*/}
        </Box >
        
      </Modal>
    </div>
  );
}