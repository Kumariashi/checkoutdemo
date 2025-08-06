import React from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import './AddAddressStep.css';

const AddAddressStep = ({ formData, handleInputChange, handleContinue, onViewCoupons }) => {
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
                <span>View Coupons <KeyboardArrowRightIcon onClick={onViewCoupons}  style={{ cursor: 'pointer' }} /></span>
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
</div>
</div>
  );
};

export default AddAddressStep;