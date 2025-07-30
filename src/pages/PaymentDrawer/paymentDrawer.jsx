import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import "./paymentDrawer.css";
import CloseIcon from '@mui/icons-material/Close';
import CartProduct from '../../components/CartProduct/cartProduct';
import PaymentModal from '../../components/PaymentModal/paymentModal';
import CircularProgress from '@mui/material/CircularProgress';

export default function PaymentDrawer() {
  const [open, setOpen] = useState(true);
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  const pricePerItem = 999;

  const [estimatedTotal, setEstimatedTotal] = useState(pricePerItem);
  const [loading, setLoading] = useState(false);

  const handleQuantityChange = (newTotal) => {
    setEstimatedTotal(newTotal);
  };

  const handleLoadingChange = (isLoading) => {
    setLoading(isLoading);
  };

  return (
    <div>
      <PaymentModal open={paymentModalOpen} setOpen={setPaymentModalOpen} />
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <div className='drawer-container'>
          <div className='cart-header'>
            <h2 className='cart-heading'>Your Cart</h2>
            <CloseIcon />
          </div>
          <div className='banner'>
            <p>Flat 100% OFF + Free face wash & Gift Worth 399 on<br />all prepaid Orders</p>
          </div>
          <div className='item-header'>
            <span>PRODUCT</span>
            <span>TOTAL</span>
          </div>
          <div className='items'>
            <CartProduct
              pricePerItem={pricePerItem}
              onQuantityChange={handleQuantityChange}
              onLoadingChange={handleLoadingChange}
            />
          </div>
          <div className='checkout-details'>
            <div className='info'>
              <p className='gift-text'><input type='checkbox' />🎁 Is it a Gift? Make it special</p>
              <div className='total-info'>
                <span>Estimated Total</span>
                {loading ? (
                  <CircularProgress size={18} />
                ) : (
                  <span>Rs. {estimatedTotal}.00</span>
                )}
              </div>
              <p className='tax-text'>Taxes, Discounts and shipping calculated at checkout</p>
            </div>
            <button
              onClick={() => !loading && setPaymentModalOpen(true)}
              className='checkout-btn'
              disabled={loading}
              style={{ opacity: loading ? 0.7 : 1 }}
            >
              {loading ? (
                <CircularProgress size={18} sx={{ color: 'white' }} />
              ) : (
                <>
                  <span>Checkout</span>
                  <img src='https://i.ibb.co/35fWgwk0/Frame-27.png' alt='checkout' />
                </>
              )}
            </button>
          </div>
        </div>
      </Drawer>
    </div>
  );
}
