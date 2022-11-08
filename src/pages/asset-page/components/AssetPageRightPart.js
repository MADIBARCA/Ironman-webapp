import React from 'react'
import PriceBox from './price-box/PriceBox'

const AssetPageRightPart = () => {
  return (
    <div className='assetPageRightPart'>
      <p className='assetPageSubtitle'>Ironman Israel</p>
      <h1 className='assetPageTitle'>70.3 Finisher NFT</h1>

      <div className='assetPriceDetails'>
        <PriceBox currentPrice={'75'} oldPrice={'95.00'}/>

      </div>

    </div>
  )
}

export default AssetPageRightPar
