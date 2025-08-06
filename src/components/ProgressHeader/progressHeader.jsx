import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckIcon from '@mui/icons-material/Check';
import './ProgressHeader.css';

const ProgressHeader = ({ step, STEPS, onBack }) => {
  return (
    <div className='progress-header'>
      <ArrowBackIcon onClick={onBack} style={{ cursor: 'pointer'}} />
      <span className='logo'>Logo</span>
      
      {step === STEPS.MOBILE && <CheckIcon sx={{ color: "#423434" }} />}
      <span className={`progress-tag ${step === STEPS.MOBILE ? 'active' : ''}`}>Mobile</span>
      <span className='progress-tag'>----</span>
      
      {step === STEPS.ADDRESS && <CheckIcon sx={{ color: "#423434" }} />}
      <span className={`progress-tag ${step === STEPS.ADDRESS ? 'active' : ''}`}>Address</span>
      <span className='progress-tag'>----</span>
      
      <span className={`progress-tag ${step === STEPS.PAY ? 'active' : ''}`}>Pay</span>
    </div>
  );
};

export default ProgressHeader;