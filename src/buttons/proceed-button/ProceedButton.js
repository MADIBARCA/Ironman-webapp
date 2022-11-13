import React from 'react'

import './ProceedButton.css';

const ProceedButton = ({disabled, text, onClick}) => {
  return (
    <button className={disabled? "proceedBtn disabled" : "proceedBtn active"} onClick={onClick}>{text}</button>
  )
}

export default ProceedButton
