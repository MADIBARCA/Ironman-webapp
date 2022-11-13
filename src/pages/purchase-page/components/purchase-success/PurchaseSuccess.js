import React from 'react'
import ProceedButton from '../../../../buttons/proceed-button/ProceedButton'
import { useNavigate } from 'react-router-dom';
import './PurchaseSuccess.css';

const PurchaseSuccess = () => {

  const navigate = useNavigate();

  return (
    <div className='purchaseSuccess'>
    <ProceedButton text={"Dismiss"} onClick={()=>navigate('/asset')}/>
    </div>

  )
}

export default PurchaseSuccess
