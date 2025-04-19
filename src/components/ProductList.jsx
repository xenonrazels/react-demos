import React from 'react'

const ProductList = () => {
    const products = [
        {id: 1, name: "Laptop", price: 999.99, description: "A high-performance laptop for all your computing needs.", inStock: true},
        {id: 2, name: "Smartphone", price: 699.99, description: "A latest model smartphone with advanced features.", inStock: false},
        {id: 3, name: "Headphones", price: 199.99, description: "Noise-cancelling over-ear headphones.", inStock: true},
    ];
  return (
    <div>
        <h1>Learning About List Rendering with Product Array containg products objects</h1>
        {products.map((product) => (
            <div key={product.id}>
                <h2>{product.name}</h2>
                <p>Price: ${product.price}</p>
                <p>Description: {product.description}</p>
                <p>In Stock: {product.inStock ? "Yes" : "No"}</p>
                <button>{product.inStock ? "Add to Cart" : "Out of Stock"}</button>
            </div>
        ))}
    </div>
  )
}

export default ProductList;