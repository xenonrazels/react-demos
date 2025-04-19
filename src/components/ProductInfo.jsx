import React from 'react'

const ProductInfo = () => {
    const product = {
        name: "Laptop",
        price: 999.99,
        description: "A high-performance laptop for all your computing needs.",
        inStock: 0,
    };
  return (
    <div>
        <h1>Product Info</h1>
        <h2>Name:{product.name}</h2>
        <p>Price: ${product.price}</p>\
        <p>Description: {product.description}</p>
        <p>In Stock: {product.inStock ? "Yes" : "No"}</p>

        <button>{product.inStock ? "Add to Cart" : "Out of Stock"}</button>


    </div>
  )
}

export default ProductInfo