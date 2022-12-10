import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/HotAccessoriesMenu.css"
const HotAccessoriesMenu = () => {
  return (
    <div className='HotAccessoriesMenu'>
        <Link className='HotAccessoriesLink' to="/music">Music Store</Link>
        <Link className='HotAccessoriesLink' to="/smartDevice">smartDevice</Link>
        <Link className='HotAccessoriesLink' to="/Home">Home</Link>
        <Link className='HotAccessoriesLink' to="/lifeStyle">Lifestyle</Link>
        <Link className='HotAccessoriesLink' to="/mobileAccessories">Mobile Accessories</Link>
        
    </div>
  )
}

export default HotAccessoriesMenu