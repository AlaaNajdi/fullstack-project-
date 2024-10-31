export const getAllProducts = async () => {
  try {
    const response = await fetch('https://sda-3-onsite-backend-teamwork-bw5k.onrender.com/api/v1/products');
    const data = await response.json();
    return data; 
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
