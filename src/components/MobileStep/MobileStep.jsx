import React from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import './MobileStep.css';

const MobileStep = ({ onContinue, onViewCoupons }) => {
  return (
    <div className='details-section'>
      <div className='coupon-section'>
        
          <div className='input-box'>
            <input placeholder='ENTER COUPON CODE' type='text' />
          </div>
        
        <div className='available'>
          <span>6 Coupons Available</span>
          <span>
            View Coupons 
            <KeyboardArrowRightIcon 
              onClick={onViewCoupons} 
              style={{ cursor: 'pointer' }} 
            />
          </span>
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
      
     
    </div>
  );
};

export default MobileStep;