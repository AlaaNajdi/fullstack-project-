import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify';

import { ProductContext } from '../../../context/Productcontext';
import { CreatAdminProduct } from '../../../services/adminService';
import { Form, Button } from 'react-bootstrap';
import { uploadImageToCloudinary } from '../../../../utility/uploadimageurl';


const AddProduct = () => {
  const { categories } = useContext(ProductContext); 

  const [product, setproduct] = useState({
    name: '',
    image: '',
    price: 0,
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
    // if (product.location.length < 10) newErrors.location = 'Location should be at least 10 characters long';
    if (!product.price || parseFloat(product.price) <= 0) newErrors.price = 'Price must be a positive number';
    if (!product.image) newErrors.image = 'Please upload a product image';
    if (!product.categoryId) newErrors.categoryId = 'Category is required';  // التحقق من الفئة
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (validateInput()) {
      try {
        // رفع الصورة إلى Cloudinary
        const imageUrl = await uploadImageToCloudinary(product.image);
        const newProduct = {
          name: product.name,
          price: parseFloat(product.price),
          imageUrl: imageUrl,  // استخدام رابط الصورة
          // location: product.location,
          categoryId: product.categoryId,  // إضافة الفئة
        };
        // إرسال البيانات إلى الخادم
        const createdProduct = await CreatAdminProduct(newProduct);
        toast.success("Product created successfully!");

        // إعادة ضبط النموذج
        setproduct({
          name: '',
          image: '',
          price: 0,
          // location: '',
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
    <div className="container1">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Producr name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter product name"
            value={product.name}
            name="name"
            onChange={handleChange}
            required
          />
          {errors.name && <span className="text-danger">{errors.name}</span>}
        </Form.Group>

        <Form.Group controlId="formPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter product price"
            value={product.price}
            name="price"
            onChange={handleChange}
            required
          />
          {errors.price && <span className="text-danger">{errors.price}</span>}
        </Form.Group>

        <Form.Group controlId="formImage">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
          {product.image && (
            <div>
              <img
                className="user-img"
                src={URL.createObjectURL(product.image)}
                alt="Selected Preview"
                style={{ maxWidth: '100%', height: 'auto', marginTop: '10px' }}
              />
            </div>
          )}
          {errors.image && <span className="text-danger">{errors.image}</span>}
        </Form.Group>

        <Form.Group controlId="formCategory">
          <Form.Label>Category</Form.Label>
          <Form.Control
            as="select"
            name="categoryId"
            value={product.categoryId}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            {categories.length > 0 ? (
              categories.map((category) => (
                <option key={category.categoryId} value={category.categoryId}>
                  {category.categoryName}
                </option>
              ))
            ) : (
              <option disabled>No categories available</option>
            )}
          </Form.Control>
          {errors.categoryId && <span className="text-danger">{errors.categoryId}</span>}
        </Form.Group>

        {/* <Form.Group controlId="formLocation">
          <Form.Label>Location</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter property location"
            value={property.location}
            name="location"
            onChange={handleChange}
            required
          />
          {errors.location && <span className="text-danger">{errors.location}</span>}
        </Form.Group> */}

        <Button variant="primary" type="submit" className="btn add-button">
          Add
        </Button>
      </Form>
    </div>
  )
}

export default AddProduct
