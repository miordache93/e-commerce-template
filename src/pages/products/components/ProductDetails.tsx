import React from 'react'
import { useSelector } from 'react-redux'
import { getProduct } from '../../../store/selectors/products.selector'

function ProductDetails() {
  const { product, loading, error } = useSelector(getProduct);

  if (error) {
    return <p>Sorry an error occured...</p>
  }

  return (
    <div className="ProductDetails">
      {
        loading ? <p>Loading...</p> :
        <h2>{ product.name }</h2>
      }
    </div>
  )
}

export default ProductDetails
