export const signUpUser = async (formData) => {
  try {
    const response = await fetch('https://sda-3-onsite-backend-teamwork-bw5k.onrender.com/api/v1/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    return response; 
  } catch (error) {
    console.error('Error:', error);
    throw error; 
  }
};

export const signInUser = async (formData) => {
  try {
    const response = await fetch('https://sda-3-onsite-backend-teamwork-bw5k.onrender.com/api/v1/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Something went wrong');
    }
    const data = await response.json();
    localStorage.setItem('token', data.token);
    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
export const signOutUser = () => {
  localStorage.removeItem('token'); 
};
