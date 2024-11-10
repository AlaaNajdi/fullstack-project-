export const getAllProducts = async (searchTerm, currentPage, pageSize, sortBy = "name", sortOrder = "asc") => {
  try {
    const response = await fetch(`https://sda-3-onsite-backend-teamwork-bw5k.onrender.com/api/v1/products?Search=${searchTerm}&pageNumber=${currentPage}&pageSize=${pageSize}&SortBy=${sortBy}&SortOrder=${sortOrder}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const getProductById = async (id) => {
  try {
    const response = await fetch(`https://sda-3-onsite-backend-teamwork-bw5k.onrender.com/api/v1/products/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching product details:', error);
    throw error;
  }
};

export const getAllCategories = async () => {
  try {
    const response = await fetch(`https://sda-3-onsite-backend-teamwork-bw5k.onrender.com/api/v1/category`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};