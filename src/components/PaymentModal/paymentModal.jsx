import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import './paymentModal.css';
 
import ProgressHeader from '../ProgressHeader/progressHeader.jsx';
import OrderSummary from '../OrderSummary/OrderSummary';
import MobileStep from '../MobileStep/MobileStep';
import AddressStep from '../AddressStep/AddressStep';
import AddAddressStep from '../AddAddressStep/AddAddressStep';
import CouponStep from '../CouponStep/CouponStep';
import PayStep from '../PayStep/PayStep';
import Footer from '../Footer/Footer';
import Banner from '../Banner/Banner.jsx';
import CardPayment from '../CardPayment/CardPayment';
import NetBankingPayment from '../NetBankingPayment/NetBankingPayment';
import WalletPayment from '../WalletPayment/WalletPayment';
import CODPayment from '../CODPayment/CODPayment';
 
// Import payment method components (create these if they don't exist)
// import UPIPayment from '../UPIPayment/UPIPayment';
// import CardPayment from '../CardPayment/CardPayment';
// import NetBankingPayment from '../NetBankingPayment/NetBankingPayment';
// import WalletPayment from '../WalletPayment/WalletPayment';
// import CODPayment from '../CODPayment/CODPayment';
 
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
  padding: 0,
  borderRadius: '8px',
};
 
const STEPS = {
  MOBILE: 'MOBILE',
  ADDRESS: 'ADDRESS',
  PAY: 'PAY',
  ADDADDRESS: 'ADDADDRESS',
  COUPON: 'COUPON',
  // Payment method steps
  UPI_PAYMENT: 'UPI_PAYMENT',
  CARD_PAYMENT: 'CARD_PAYMENT',
  NETBANKING_PAYMENT: 'NETBANKING_PAYMENT',
  WALLET_PAYMENT: 'WALLET_PAYMENT',
  COD_PAYMENT: 'COD_PAYMENT',
  PAYMENT_SUCCESS: 'PAYMENT_SUCCESS'
};
 
export default function PaymentModal({ open, setOpen }) {
  const [step, setStep] = React.useState(STEPS.MOBILE);
  const [previousStep, setPreviousStep] = React.useState(STEPS.MOBILE);
  
  const [formData, setFormData] = React.useState({
    pincode: '110059',
    city: 'WEST',
    state: 'DELHI',
    fullName: '',
    email: '',
    couponCode: '',
    // ✅ ADD THESE: Payment data
    selectedPaymentMethod: '',
    selectedUPI: '',
    cardDetails: {
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      cardholderName: ''
    },
    netBankingBank: '',
    selectedWallet: '',
    codConfirmed: false
  });
 
  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };
 
  // ✅ ADD THIS FUNCTION: Handle payment method changes
  const handlePaymentMethodChange = (method, subMethod = '') => {
    setFormData(prev => ({
      ...prev,
      selectedPaymentMethod: method,
      selectedUPI: method === 'upi' ? subMethod : prev.selectedUPI,
      netBankingBank: method === 'netbanking' ? subMethod : prev.netBankingBank,
      selectedWallet: method === 'wallet' ? subMethod : prev.selectedWallet
    }));
  };
 
  // ✅ ADD THIS FUNCTION: Handle payment method navigation
  const handlePaymentContinue = (methodOverride = null) => {
    const method = methodOverride || formData.selectedPaymentMethod;
    
    switch (method) {
      case 'upi':
        setStep(STEPS.UPI_PAYMENT);
        break;
      case 'card':
        setStep(STEPS.CARD_PAYMENT);
        break;
      case 'netbanking':
        setStep(STEPS.NETBANKING_PAYMENT);
        break;
      case 'wallet':
        setStep(STEPS.WALLET_PAYMENT);
        break;
      case 'cod':
        setStep(STEPS.COD_PAYMENT);
        break;
      default:
        alert('Please select a payment method');
    }
  };
 
  const handleContinue = () => {
    if (step === STEPS.ADDADDRESS) {
      setStep(STEPS.ADDRESS);
    }
  };
 
  // ✅ ADD THIS FUNCTION: Handle payment success
  const handlePaymentSuccess = () => {
    setStep(STEPS.PAYMENT_SUCCESS);
    // Handle successful payment logic here
    setTimeout(() => {
      setOpen(false); // Close modal after success
    }, 3000);
  };
 
  const handleClose = () => setOpen(false);
  
  const goBack = () => {
    if (step === STEPS.ADDRESS) setStep(STEPS.MOBILE);
    else if (step === STEPS.PAY) setStep(STEPS.ADDRESS);
    // ✅ ADD THIS: Handle back navigation from payment steps
    else if ([STEPS.UPI_PAYMENT, STEPS.CARD_PAYMENT, STEPS.NETBANKING_PAYMENT, STEPS.WALLET_PAYMENT, STEPS.COD_PAYMENT].includes(step)) {
      setStep(STEPS.PAY);
    }
  };
 
  const goToCoupon = () => {
    setPreviousStep(step);
    setStep(STEPS.COUPON);
  };
 
  const goToAddAddress = () => setStep(STEPS.ADDADDRESS);
 
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {/* MOBILE STEP */}
        {step === STEPS.MOBILE && (
          <>
            <ProgressHeader 
              step={step} 
              STEPS={STEPS} 
              onBack={handleClose} 
            />
            <Banner />
            <div className='scroll-container'>
              <div className='dynamic-content'>
                <OrderSummary />
                <MobileStep 
                  onContinue={() => setStep(STEPS.ADDRESS)}
                  onViewCoupons={goToCoupon}
                />
              </div>
              <Footer
                step={step} 
                STEPS={STEPS} 
                onContinue={() => setStep(STEPS.ADDRESS)}
              />
            </div>
          </>
        )}
 
        {/* ADDRESS STEP */}
        {step === STEPS.ADDRESS && (
          <>
            <ProgressHeader 
              step={step} 
              STEPS={STEPS} 
              onBack={goBack} 
            />
            <Banner />
            <div className='scroll-container'>
              <div className='dynamic-content'>
                <OrderSummary />
                <AddressStep 
                  onContinue={() => setStep(STEPS.ADDADDRESS)}
                  onAddAddress={goToAddAddress}
                  onViewCoupons={goToCoupon}
                />
              </div>
              <Footer 
                step={step} 
                STEPS={STEPS} 
                onContinue={() => setStep(STEPS.PAY)}
              />
            </div>
          </>
        )}
 
        {/* ADD ADDRESS STEP */}
        {step === STEPS.ADDADDRESS && (
          <>
            <ProgressHeader 
              step={STEPS.ADDRESS} 
              STEPS={STEPS} 
              onBack={() => setStep(STEPS.ADDRESS)} 
            />
            <Banner />
            <div className='scroll-container'>
              <div className='dynamic-content'>
                <OrderSummary />
                <AddAddressStep 
                  formData={formData}
                  handleInputChange={handleInputChange}
                  handleContinue={handleContinue}
                  onViewCoupons={goToCoupon}
                />
              </div>
              <Footer
                step={step} 
                STEPS={STEPS} 
                onContinue={handleContinue}
              />
            </div>
          </>
        )}
 
        {/* ✅ UPDATED: PAY STEP with all required props */}
        {step === STEPS.PAY && (
          <>
            <ProgressHeader 
              step={STEPS.PAY} 
              STEPS={STEPS} 
              onBack={() => setStep(STEPS.ADDRESS)} 
            />
            <Banner />
            <div className='scroll-container'>
              <div className='dynamic-content'>
                <OrderSummary />
                <PayStep 
                  formData={formData}
                  onViewCoupons={goToCoupon}
                  handleContinue={handleContinue}
                  handleInputChange={handleInputChange}
                  onPaymentMethodChange={handlePaymentMethodChange} // ✅ NOW DEFINED
                  onNavigateToPayment={handlePaymentContinue} // ✅ NOW DEFINED
                />
              </div>
              <Footer
                step={step} 
                STEPS={STEPS} 
                onContinue={() => {
                  // ✅ FIXED: Check if payment method is selected before continuing
                  if (formData.selectedPaymentMethod) {
                    handlePaymentContinue(); // ✅ NOW DEFINED
                  } else {
                    alert('Please select a payment method');
                  }
                }}
              />
            </div>
          </>
        )}
 
        {/* ✅ ADD THESE: Payment method steps (create placeholder components for now) */}
        {step === STEPS.UPI_PAYMENT && (
          <>
            <ProgressHeader 
              step={STEPS.PAY} 
              STEPS={STEPS} 
              onBack={goBack} 
            />
            <Banner />
            <div className='scroll-container'>
              <div className='dynamic-content'>
                <OrderSummary />
                <div style={{ padding: '20px', textAlign: 'center' }}>
                  <h2>UPI Payment</h2>
                  <p>UPI Payment component will be implemented here</p>
                  <button onClick={handlePaymentSuccess} style={{ padding: '10px 20px', marginTop: '20px' }}>
                    Complete Payment
                  </button>
                </div>
              </div>
              <Footer
                step={step} 
                STEPS={STEPS} 
                onContinue={handlePaymentSuccess}
              />
            </div>
          </>
        )}
 
       {/* CARD PAYMENT STEP */}
{step === STEPS.CARD_PAYMENT && (
  <>
    <ProgressHeader 
      step={STEPS.PAY} 
      STEPS={STEPS} 
      onBack={goBack} 
    />
    <Banner />
    <div className='scroll-container'>
      <div className='dynamic-content'>
        <OrderSummary />
        <CardPayment 
          formData={formData}
          handleInputChange={handleInputChange}
          onPaymentSuccess={handlePaymentSuccess}
        />
      </div>
      <Footer
        step={step} 
        STEPS={STEPS} 
        onContinue={handlePaymentSuccess}
      />
    </div>
  </>
)}

{/* NETBANKING PAYMENT STEP */}
{step === STEPS.NETBANKING_PAYMENT && (
  <>
    <ProgressHeader 
      step={STEPS.PAY} 
      STEPS={STEPS} 
      onBack={goBack} 
    />
    <Banner />
    <div className='scroll-container'>
      <div className='dynamic-content'>
        <OrderSummary />
        <NetBankingPayment 
          formData={formData}
          handleInputChange={handleInputChange}
          onPaymentSuccess={handlePaymentSuccess}
        />
      </div>
      <Footer
        step={step} 
        STEPS={STEPS} 
        onContinue={handlePaymentSuccess}
      />
    </div>
  </>
)}

{/* WALLET PAYMENT STEP */}
{step === STEPS.WALLET_PAYMENT && (
  <>
    <ProgressHeader 
      step={STEPS.PAY} 
      STEPS={STEPS} 
      onBack={goBack} 
    />
    <Banner />
    <div className='scroll-container'>
      <div className='dynamic-content'>
        <OrderSummary />
        <WalletPayment 
          formData={formData}
          handleInputChange={handleInputChange}
          onPaymentSuccess={handlePaymentSuccess}
        />
      </div>
      <Footer
        step={step} 
        STEPS={STEPS} 
        onContinue={handlePaymentSuccess}
      />
    </div>
  </>
)}

{/* COD PAYMENT STEP */}
{step === STEPS.COD_PAYMENT && (
  <>
    <ProgressHeader 
      step={STEPS.PAY} 
      STEPS={STEPS} 
      onBack={goBack} 
    />
    <Banner />
    <div className='scroll-container'>
      <div className='dynamic-content'>
        <OrderSummary />
        <CODPayment 
          formData={formData}
          handleInputChange={handleInputChange}
          onPaymentSuccess={handlePaymentSuccess}
        />
      </div>
      <Footer
        step={step} 
        STEPS={STEPS} 
        onContinue={handlePaymentSuccess}
      />
    </div>
  </>
)}
 
        {/* COUPON STEP */}
        {step === STEPS.COUPON && (
          <>
            <CouponStep 
              onClose={() => setStep(previousStep)}
            />
            <div className='scroll-container'>
              <div className='dynamic-content'>
                {/* Coupon content is handled within CouponStep */}
              </div>
              <Footer 
                step={step} 
                STEPS={STEPS} 
                onContinue={() => setStep(previousStep)}
              />
            </div>
          </>
        )}
 
        {/* ✅ ADD THIS: Payment Success Step */}
        {step === STEPS.PAYMENT_SUCCESS && (
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            height: '100%', 
            padding: '40px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '60px', marginBottom: '20px' }}>✅</div>
            <h2 style={{ color: '#26BCA5', marginBottom: '10px' }}>Payment Successful!</h2>
            <p style={{ color: '#666', marginBottom: '10px' }}>Your order has been placed successfully.</p>
            <p style={{ color: '#666', fontSize: '14px' }}>Order ID: #ORD123456789</p>
          </div>
        )}
      </Box>
    </Modal>
  );
}