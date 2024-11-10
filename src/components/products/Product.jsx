import React from 'react'
import { useNavigate } from 'react-router-dom';

const Product = ({ product, isAdmin }) => {
  const navigate = useNavigate();
  

  const handleDetailsClick = () => {
    navigate(`/productdetails/${product.id}`);
  }

  // const handleUpdateClick = () => {
  //   // تنفيذ منطق التحديث هنا
  // };

  // const handleDeleteClick = () => {
  //   // تنفيذ منطق الحذف هنا
  // };

  return (
    <div>
      <li key={product.id}>
        <img src={product.imageUrl} alt="pro1 " />
        <h3>{product.name}</h3>
        <p>Prics: {product.price} SAR</p>
        <button onClick={handleDetailsClick}>Show deatils</button>
      </li>
    </div>
  )
}

export default Product