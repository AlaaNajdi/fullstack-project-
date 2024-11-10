import React, { useContext, useState } from 'react';
import { ProductContext } from '../../context/Productcontext';

export const ReusableForm = ({ formFields, onSubmit, submitText, includeCategory = false }) => {
  const { categories } = useContext(ProductContext);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {};
    formFields.forEach((field) => {
      formData[field.name] = event.target[field.name].value;
    });
    formData.imageFile = selectedFile; // إضافة ملف الصورة إلى البيانات
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {formFields.map((field) =>
        field.name === 'CategoryId' && includeCategory ? (
          <div key={field.name}>
            <label>{field.label}</label>
            <select name={field.name} required={field.required}>
              <option value="">Select Category</option>
              {Array.isArray(categories) && categories.length > 0 ? (
                categories.map((category) => (
                  <option key={category.categoryId} value={category.categoryId}>
                    {category.categoryName}
                  </option>
                ))
              ) : (
                <option disabled>No categories available</option>
              )}
            </select>
            <div>
              <label>Upload Image</label>
              <input type="file" onChange={handleFileChange} required />
            </div>
          </div>
        ) : (
          <div key={field.name}>
            <label>{field.label}</label>
            <input
              type={field.type || 'text'}
              name={field.name}
              required={field.required}
            />
          </div>
        )
      )}

      <button type="submit">{submitText}</button>
    </form>
  );
};

export default ReusableForm;
