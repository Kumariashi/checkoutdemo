import React, { useState } from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import './PayStep.css';

const PayStep = ({ onContinue, onViewCoupons, formData, onPaymentMethodChange, onNavigateToPayment }) => {
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('upi'); // Default to UPI
    const [selectedUPI, setSelectedUPI] = useState('');

    const paymentMethods = [
        {
            id: 'card',
            name: 'Debit/Credit Cards',
            subtitle: 'Visa, MasterCard, Rupay',
            icon: '/cardimg.png',
            original: '699',
            discounted: '₹ 399'
        },
        {
            id: 'wallet',
            name: 'Wallets',
            subtitle: 'PhonePe, Amazon, Airtel',
            icon: '/wallet.png',
            original: '699',
            discounted: '₹ 399'
        },
        {
            id: 'netbanking',
            name: 'Netbanking',
            subtitle: 'SBI, HDFC, ICICI, Axis',
            icon: '/netbanking.png',
            original: '699',
            discounted: '₹ 399'
        },
        {
            id: 'cod',
            name: 'Cash On Delivery',
            subtitle: 'Pay Online To Save Rs. 50',
            icon: '/cod.png',
            original: '699',
            discounted: '₹ 399'
        }
    ];

    const upiOptions = [
        { id: 'paytm', name: 'Paytm', icon: "/image21.svg" },
        { id: 'phonepe', name: 'PhonePe', icon: "/image22.svg" },
        { id: 'gpay', name: 'G Pay', icon: "/image23.svg" },
        { id: 'amazonpay', name: 'Amazon Pay', icon: "/amazonpay.png" },
        { id: 'anyupi', name: 'Any UPI', icon: "img25.png" }
    ];

    const handlePaymentMethodSelect = (methodId) => {
        setSelectedPaymentMethod(methodId);
        if (onPaymentMethodChange) {
            onPaymentMethodChange(methodId, selectedUPI);
        }
        if (methodId !== 'upi') {
            setSelectedUPI('');
        }
    };

    const handleUPISelect = (upiId) => {
        setSelectedUPI(upiId);
        if (onPaymentMethodChange) {
            onPaymentMethodChange('upi', upiId);
        }
    };

    // ✅ NEW ADDITION: Handle payment method navigation
    const handlePaymentMethodNavigation = (methodId) => {
        // First select the payment method
        handlePaymentMethodSelect(methodId);

        // Then navigate to the corresponding payment page
        if (onNavigateToPayment) {
            onNavigateToPayment(methodId);
        }
    };

    // ✅ NEW ADDITION: Handle UPI payment navigation
    const handleUPIPayment = () => {
        if (selectedUPI || document.querySelector('.upi-input').value) {
            if (onNavigateToPayment) {
                onNavigateToPayment('upi');
            }
        } else {
            alert('Please select a UPI app or enter UPI ID');
        }
    };

    return (
        <div className="pay-step">
            <div className='details-section'>
                {/* Coupons Section */}
                <div className='coupon-section'>
                    <div className='coupon-input'>
                        <div className='input-box'>
                            <input placeholder='ENTER COUPON CODE' type='text' />
                        </div>
                    </div>
                    <div className='available'>
                        <span>6 Coupons Available</span>
                        <span>View Coupons <KeyboardArrowRightIcon onClick={onViewCoupons} style={{ cursor: 'pointer' }} /></span>
                    </div>
                </div>

                {/* Delivery Info */}
                <div className='delivery-info-section'>
                    <img src='/image18.svg' className='delivery-icon' />
                    <span className='delivery-text'>Earliest Delivery By 21 Jun, 5 Pm</span>
                </div>

                {/* Payment Options */}
                <div className='payment-options-section'>
                    <h3 className='payment-title'>Payment Option</h3>
                    <p className='payment-subtitle'>Extra Discount + Offers Available on Prepaid Payments</p>

                    <div className='gift'><div className='gift-card-out'></div><div className='gift-card'>free scrub + gift worth 399 + prepaid off 100 + cashback</div></div>
                    {/* UPI Section */}
                    <div className={`payment-method-card ${selectedPaymentMethod === 'upi' ? 'selected' : ''}`}
                        onClick={() => handlePaymentMethodSelect('upi')}>
                        <div className='payment-method-header'>
                            <div className='payment-method-left'>
                                <img src='/Group34.svg' className='payment-icon' />
                                <span className='payment-name'>UPI</span>
                            </div>
                            <div className='price-container'>
                                <span className='original'>₹ 699</span>
                                <span className='discounted'>₹ 399</span>
                            </div>
                        </div>


                        {/* UPI Apps Horizontal Scroller */}
                        {selectedPaymentMethod === 'upi' && (
                            <>
                                <div className='upi-apps-container'>
                                    <div className='upi-apps-scroller'>
                                        {upiOptions.map(upi => (
                                            <div
                                                key={upi.id}
                                                className={`upi-app-item ${selectedUPI === upi.id ? 'selected' : ''}`}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleUPISelect(upi.id);
                                                }}
                                            >
                                                <div className='upi-app-icon'>
                                                    <img src={upi.icon} alt={upi.name} />
                                                </div>
                                                <span className='upi-app-name'>{upi.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* ✅ MODIFIED: UPI Apps Button with navigation */}
                                <div className='all-upi-apps-btn' onClick={() => handlePaymentMethodNavigation('upi')}>
                                    <span>AL UPI Apps</span>
                                    <span>4 Deal Available</span>
                                    <img src='/angle-right.svg' className='angle-right-icon' />
                                </div>
                            </>
                        )}
                    </div>

                    {/* UPI ID Input */}
                    {selectedPaymentMethod === 'upi' && (
                        <div className='upi-id-section'>
                            <label className='upi-label'>Pay Via UPI ID</label>
                            <div className='upi-input-container'>
                                <input
                                    type='text'
                                    placeholder='Enter Your UPI ID'
                                    className='upi-input'
                                />
                                {/* ✅ MODIFIED: PAY button with navigation functionality */}
                                <button className='pay-button' onClick={handleUPIPayment}>PAY</button>
                            </div>
                        </div>
                    )}

                   

                    {/* ✅ MODIFIED: Other Payment Methods with navigation */}
                    {paymentMethods.map(method => (
                        <div
                            key={method.id}
                            className={`payment-method-card1 ${selectedPaymentMethod === method.id ? 'selected' : ''}`}
                            onClick={() => handlePaymentMethodNavigation(method.id)} // ✅ CHANGED: Now navigates instead of just selecting
                        >
                          <div className='gift1'><div className='gift-card-out'></div><div className='gift-card'>free scrub + gift worth 399 + prepaid off 100 + cashback</div></div>
                    {/* UPI Section */}
                            <div className='payment-method-header'>
                                <div className='payment-method-left'>
                                    <img src={method.icon} className='payment-icon'/>
                                    <div className='payment-method-info'>
                                        <span className='payment-name1'>{method.name}</span>
                                        <span className='payment-subtitle1'>{method.subtitle}</span>
                                    </div>
                                </div>
                                <div className='price-container1'>
                                    <span className='original1'>₹ {method.original}</span>
                                    <span className='discounted1'>{method.discounted}</span>
                                    </div>
                                

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PayStep;