import React from 'react'
import './Child.css'

export default function Child({coin}) {
  return (
    <div className='child'>
        <div className="left">
            <p className='sno'>{coin.market_cap_rank}. </p>
            <img src={coin.image} alt="" />
            <p className='name'>{coin.name}</p>
            <p className='symbol'>{coin.symbol}</p>
        </div>

        <div className="right">
            <p className='price'>${coin.current_price.toLocaleString()}</p>
            <p className='volume'>${coin.total_volume.toLocaleString()}</p>
            {
                coin.price_change_percentage_24h < 0 ? 
                <p className='red percentage'>{coin.price_change_percentage_24h.toFixed(2)}%</p> : 
                <p className='blue percentage'>{coin.price_change_percentage_24h.toFixed(2)}%</p>
            }
            <p className='mktcap'>${coin.market_cap.toLocaleString()}</p>
        </div>
    </div>
  )
}
