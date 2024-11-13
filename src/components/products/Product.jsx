import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/Usercontext';
import { CartContext } from '../../context/CartContext';

const Product = ({ product}) => {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const { userLoggedIn} = useContext(UserContext);


  const handleDetailsClick = () => {
    navigate(`/productdetails/${product.id}`);
  }
  const handleAddToCart = () => {
    addToCart(product); 
  };

  return (
    <div>
      <li key={product.id}>
        <img src={product.imageUrl} alt="pro1 " />
        <h3>{product.name}</h3>
        <p>Prics: {product.price} SAR</p>
        <p>Description:{product.description}</p>
        <button onClick={handleDetailsClick}>Show deatils</button>
        {userLoggedIn &&(
          <button onClick={handleAddToCart}>Add to Cart</button>
          )}
      </li>
    </div>
  )
}

export default Product