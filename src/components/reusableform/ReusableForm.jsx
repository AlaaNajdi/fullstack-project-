import React from 'react';

export const ReusableForm = ({ formFields, onSubmit, submitText }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {};
    formFields.forEach((field) => {
      formData[field.name] = event.target[field.name].value;
    });
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {formFields.map((field) => (
        <div key={field.name}>
          <label>{field.label}</label>
          <input
            type={field.type || 'text'}
            name={field.name}
            required={field.required}
          />
        </div>
      ))}
      <button type="submit">{submitText}</button>
    </form>
  );
};

export default ReusableForm;
