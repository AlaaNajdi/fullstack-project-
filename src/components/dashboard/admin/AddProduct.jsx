import React, { useContext, useState } from 'react'
import { ProductContext } from '../../../context/Productcontext';
import { uploadImageToCloudinary } from '../../../../utility/uploadimageurl';
import { CreatAdminProduct } from '../../../services/adminService';
import ReusableForm from '../../reusableform/ReusableForm';

export const AddProduct = () => {
  const { categories,addProduct } = useContext(ProductContext);
  const [image, setImage] = useState(null);

  const formFields = [
    { name: 'name', label: 'Product Name', required: true },
    { name: 'price', label: 'Product Price', type: 'number', required: true },
    { name: 'CategoryId', label: 'Category name', required: true }, // يجب أن تكون هذه الفئة مختارة
  ];


  const handleSubmit = async (formData) => {
    console.log("formData:", formData);  // تأكد من طباعة formData
    try {
      const { CategoryId, ...restFormData } = formData;

      // ابحث عن categoryId بناءً على الفئة التي تم تحديدها من البيانات
      const category = categories.find((category) => category.categoryId === CategoryId);

      if (!category) {
        throw new Error('Category not found');
      }

      const categoryId = category.categoryId;

      // رفع الصورة إلى Cloudinary
      let imageUrl = '';
      if (image) {
        imageUrl = await uploadImageToCloudinary(image);
      }

      // إضافة رابط الصورة إلى بيانات المنتج
      const productData = { ...restFormData, categoryId, imageUrl };

      // استدعاء دالة إنشاء المنتج
      const newProduct = await CreatAdminProduct(productData);

      // تحديث قائمة المنتجات في الحالة
      addProduct(newProduct);
      alert("Product added successfully!");
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product.");
    }
  };

  return (
    <div>
      <h2>Add New Product</h2>
      <ReusableForm
        formFields={formFields}
        onSubmit={handleSubmit}
        submitText="Add Product"
        includeCategory={true} // تفعيل الفئات فقط عند إضافة المنتجات
      />
    </div>
  )
}

export default AddProduct
