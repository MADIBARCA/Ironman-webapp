import React from 'react';

import '../AssetPageRightPart.css';

const PriceBox = ({currentPrice, oldPrice}) => {
  return (
    <div className='priceBox'>
      <div className='priceBoxTop'>
        <h3>${currentPrice}</h3>
        <p>${oldPrice}</p>
      </div>
      <div className='priceBoxBtm'>
        You save ${`oldPrice-currentPrice`}
      </div>
    </div>
  )
}

export default PriceBox
