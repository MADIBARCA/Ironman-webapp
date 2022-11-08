import React from 'react'

import './ProceedButton.css';

const ProceedButton = ({disabled, text}) => {
  return (
    <button className={disabled? "proceedBtn disabled" : "proceedBtn active"}>{text}</button>
  )
}

export default ProceedButton
