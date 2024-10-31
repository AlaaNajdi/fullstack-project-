import React from 'react'

const Product = ({ product }) => {
  return (
    <div>
      <li key={product.id}>
        <img src={product.imageUrl} alt="pro1 " />
        <h3>{product.name}</h3>
        <p>Prics: {product.price} SAR</p>
        <button>Show deatils</button>
      </li>
    </div>
  )
}

export default Product

