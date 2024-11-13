import React, { useContext, useState } from 'react';

import { toast } from 'react-toastify';
import { ProductContext } from '../../../context/Productcontext';
import { CreatAdminProduct } from '../../../services/adminService';
import { uploadImageToCloudinary } from '../../../../utility/uploadimageurl';
import styled from 'styled-components';

const AddProduct = () => {
  const { categories } = useContext(ProductContext);

  const [product, setproduct] = useState({
    name: '',
    image: '',
    price: 0,
    Description: '',
    categoryId: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const inputField = event.target.name;
    const value = event.target.value;
    setproduct(prevState => ({ ...prevState, [inputField]: value }));
  };

  const handleImageChange = (event) => {
    setproduct(prevState => ({ ...prevState, image: event.target.files[0] }));
  };

  const validateInput = () => {
    const newErrors = {};
    if (!product.name) newErrors.name = 'Product name is required';
    if (product.name.length < 10) newErrors.name = 'Title should be at least 10 characters long';
    if (!product.price || parseFloat(product.price) <= 0) newErrors.price = 'Price must be a positive number';
    if (product.Description.length < 10) newErrors.Description = 'Description should be at least 10 characters long';
    if (!product.image) newErrors.image = 'Please upload a product image';
    if (!product.categoryId) newErrors.categoryId = 'Category is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (validateInput()) {
      try {
        const imageUrl = await uploadImageToCloudinary(product.image);
        const newProduct = {
          name: product.name,
          price: parseFloat(product.price),
          description: product.Description,
          imageUrl: imageUrl,
          categoryId: product.categoryId,
        };
        const createdProduct = await CreatAdminProduct(newProduct);
        toast.success("Product created successfully!");

        setproduct({
          name: '',
          image: '',
          price: 0,
          Description: '',
          categoryId: '',
        });
      } catch (error) {
        console.error('Error:', error);
        toast.error('Failed to create product. Please try again.');
      }
    } else {
      console.log(errors);
    }
  };

  return (
    <StyledWrapper>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          {/* Product Name */}
          <div className="form-group">
            <label htmlFor="name">Product Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={product.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Product Price */}
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              id="price"
              name="price"
              value={product.price}
              onChange={handleChange}
              required
            />
          </div>

          {/* Product Image */}
          <div className="form-group">
            <label htmlFor="image">Image</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
            {product.image && (
              <div style={{ marginTop: 10 }}>
                <img
                  src={URL.createObjectURL(product.image)}
                  alt="Selected Preview"
                  style={{ maxWidth: '100%', height: 'auto', borderRadius: 8 }}
                />
              </div>
            )}
            {errors.image && <span className="error">{errors.image}</span>}
          </div>

          {/* Category */}
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              name="categoryId"
              value={product.categoryId}
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option key={category.categoryId} value={category.categoryId}>
                  {category.categoryName}
                </option>
              ))}
            </select>
            {errors.categoryId && <span className="error">{errors.categoryId}</span>}
          </div>

          {/* Description */}
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="Description"
              value={product.Description}
              onChange={handleChange}
              rows={3}
              required
            />
            {errors.Description && <span className="error">{errors.Description}</span>}
          </div>

          {/* Submit Button */}
          <button type="submit" className="form-submit-btn">
            Add Product
          </button>
        </form>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .form-container {
    width: 400px;
    background: linear-gradient(#ffffff, #ffffff) padding-box,
                linear-gradient(94deg, transparent 35%,#e81cff, #40c9ff) border-box;
    border: 2px solid transparent;
    padding: 32px 24px;
    font-size: 14px;
    font-family: inherit;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 20px;
    box-sizing: border-box;
    border-radius: 16px;
  }

  .form-container button:active {
    scale: 0.95;
  }

  .form-container .form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .form-container .form-group {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .form-container .form-group label {
    display: block;
    margin-bottom: 5px;
    color: #717171;
    font-weight: 600;
    font-size: 12px;
  }

  .form-container .form-group input,
  .form-container .form-group textarea,
  .form-container .form-group select {
    width: 100%;
    padding: 12px 16px;
    border-radius: 8px;
    color: #000;
    font-family: inherit;
    background-color: transparent;
    border: 1px solid #414141;
  }

  .form-container .form-group input::placeholder {
    opacity: 0.5;
  }

  .form-container .form-group input:focus,
  .form-container .form-group textarea:focus,
  .form-container .form-group select:focus {
    outline: none;
    border-color: #e81cff;
  }

  .form-container .form-submit-btn {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    align-self: flex-start;
    font-family: inherit;
    color: #ffffff;
    font-weight: 600;
    width: 40%;
    background: #bf3ca5;
    border: 1px solid #414141;
    padding: 12px 16px;
    font-size: inherit;
    gap: 8px;
    margin-top: 8px;
    cursor: pointer;
    border-radius: 6px;
  }

  .form-container .form-submit-btn:hover {
    background-color: #fff;
    border-color: #fff;
  }

  .error {
    color: red;
    font-size: 12px;
  }
`;

export default AddProduct;
