import React, { useState } from 'react';
import "./cartProduct.css";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CircularProgress from '@mui/material/CircularProgress';

const CartProduct = ({ pricePerItem, onQuantityChange, onLoadingChange }) => {

  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleIncrement = () => {
    setLoading(true);
    onLoadingChange(true);
    setTimeout(() => {
      const newCount = count + 1;
      setCount(newCount);
      onQuantityChange(newCount * pricePerItem);
      setLoading(false);
       onLoadingChange(false); 
    }, 1500);
  };

  const handleDecrement = () => {
    if (count > 1) {
      const newCount = count - 1;
      setCount(newCount);
      onQuantityChange(newCount * pricePerItem);
    }
  };

  return (
    <div className='cart-item'>
      <img className='product-image' src='https://i.ibb.co/4ZtvgsH9/image-2.png' />
      <div className='product-details'>
        <div className='details'>
          <h3>Niacinamide Serum</h3>
          <p className="price">Rs. {pricePerItem}.00</p>
          <p className="engrave">Engrave: Abhishek</p>
        </div>
        <div className='actions'>
          <div className='quantity'>
            <span onClick={handleDecrement}>-</span>
            {loading ? <CircularProgress size={18} /> : <span>{count}</span>}
            <span onClick={handleIncrement}>+</span>
          </div>
          <DeleteOutlineIcon />
        </div>
      </div>
      <div className='total-price'>
        <span>Rs.<br />{count * pricePerItem}.00</span>
      </div>
    </div>
  );
};

export default CartProduct;
