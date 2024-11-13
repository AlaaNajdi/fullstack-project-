export const CreatAdminProduct = async (newProduct) => {
  console.log("data should be sending", newProduct);
  try {
    const response = await fetch('https://sda-3-onsite-backend-teamwork-bw5k.onrender.com/api/v1/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProduct),
    });

    if (!response.ok) {
      const errorData = await response.json(); // get datails for any error
      throw new Error(`Failed to create product: ${errorData.message || response.statusText}`);
    }

    const data = await response.json(); // if json is pass store data into data
    return data;

  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};


export const UpdateAdminProduct = async (id, updatedProduct) => {
  try {
    const response = await fetch(`https://sda-3-onsite-backend-teamwork-bw5k.onrender.com/api/v1/products/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedProduct),
    });

    if (!response.ok) {
      const errorData = await response.json(); // get datails for any error
      throw new Error(`Failed to update product: ${errorData.message || response.statusText}`);
    }
    const updatedProductData = await response.json();

    return updatedProductData;

  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const DeleteAdminProduct = async (id) => {
  try {
    const response = await fetch(`https://sda-3-onsite-backend-teamwork-bw5k.onrender.com/api/v1/products/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });
    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const DeleteAdminUser = async (id) => {
  try {
    const response = await fetch(`https://sda-3-onsite-backend-teamwork-bw5k.onrender.com/api/v1/users/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });
    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

