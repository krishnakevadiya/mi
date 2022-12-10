import React from 'react'
import "../styles/ProductReviews.css"
import ProductReviewCard from "./ProductReviewCard.jsx"
const ProductReviews = ({ProductReviews}) => {
  return (
    <div className='ProductReviews'>
        {ProductReviews.map((item,index)=>(
            <ProductReviewCard price={item.price} name={item.name} image={item.image} index={index} key={item.image}/>
        ))}
      
    </div>
  )
}

export default ProductReviews
