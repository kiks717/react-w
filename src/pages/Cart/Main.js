import React from 'react'
import Product from './Product'
function Main(props) {
    const {products, onAdd }= props;
  return (
    <main>
        <h2>Products</h2>
        <div>
            {products.map((product) => (
                <Product key={product.id} product={product} onAdd={onAdd}></Product>
            ))}
        </div>

    </main>
  )
}

export default Main
