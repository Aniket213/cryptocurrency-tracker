import React from 'react'
import './Head.css'
export default function Head() {
  return (
    <div className='head'>
        <div className="left-h">
            <p className='sno-h'>#</p>
            <img src="" alt="" />
            <p className='name-h'>Name</p>
            <p className='symbol-h'>Symbol</p>
        </div>

        <div className="right-h">
            <p className='price-h'>Price</p>
            <p className='volume-h'>Volume</p> 
            <p className='percentage-h'>24h</p>
            <p className='mktcap-h'>MktCap</p>
        </div>
    </div>
  )
}
