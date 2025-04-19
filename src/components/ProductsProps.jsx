import React from 'react'

const ProductProps = (props) => {
  return (
    <div>ProductsProps
        <h1>{props.name}</h1>
        <p>{props.price}</p>
        <p>{props.description}</p>
        <p>{props.inStock ? "In Stock" : "Out of Stock"}</p>
    </div>
  )
}

export default ProductProps