// import DecodeToken from "../../utility/DecodeToken";

// export const getAllUsers = async (searchTerm, currentPage, pageSize) => {
//   const response = await fetch(`https://sda-3-onsite-backend-teamwork-bw5k.onrender.com/api/v1/users?Search=${searchTerm}&pageNumber=${currentPage}&pageSize=${pageSize}`);
//   return response.data;
// };

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
    const response = await fetch('http://localhost:5125/api/v1/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = response.json();
    console.log("data sign in user service ", data)
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
};



