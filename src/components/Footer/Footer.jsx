import React from 'react';
import './Footer.css';
 
const Footer = ({step, STEPS, onContinue}) => {
  const renderFooterContent = () => {
    switch (step) {
      case STEPS.MOBILE|| step === STEPS.ADDADDRESS:
        return (
          <p>
            By Proceeding, I Accept That I Have Read And Understood<br />
            The Services <span>Privacy Policy</span> And <span>T&C</span>
          </p>
        );
      case STEPS.ADDRESS:
      case STEPS.ADDADDRESS:
         case STEPS.PAY:
          case STEPS.CARD_PAYMENT:
        return null; // No extra content for these steps
      default:
        return null;
    }
  };
 
  const shouldShowButton = () => {
    return step === STEPS.MOBILE || step === STEPS.ADDRESS || step === STEPS.ADDADDRESS||step === STEPS.CARD_PAYMENT||step === STEPS.PAYMENT_SUCCESS;
  };
 
  return (
    <div className='footer'>
      {/* Continue button - AT THE TOP */}
      {shouldShowButton() && (
        <button className="continue-btn" onClick={onContinue}>
         Continue →
        </button>
      )}
      
      {/* Footer content (privacy policy text) - MIDDLE */}
      <div className='footer-content'>
        {renderFooterContent()}
      </div>
      
      {/* Footer images - AT THE BOTTOM */}
      <div className='footer-imgs' style={{ 
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-evenly', 
        gap: '46px',
        padding: '5px 16px'
      }}>
        <div style={{ whiteSpace: 'nowrap' }}>T&C | Privacy<br />957a8g8b</div>
        <img src='/frame49.svg' alt='image' className='img-1'/>
        <img src='/frame50.svg' alt='image' className='img-1'/>
        <img src='/frame51.svg' alt='image' className='img-1' />
      </div>
    </div>
  );
};
 
export default Footer;