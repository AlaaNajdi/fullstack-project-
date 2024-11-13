import React from 'react';
import { useNavigate } from 'react-router-dom';

import { signUpUser } from '../services/userService';
import ReusableForm from '../components/reusableform/ReusableForm';


export const SignUpPage = () => {
  const navigate = useNavigate();

  const handleSignUp = async (formData) => {
    try {
      const response = await signUpUser(formData);
      if (response.ok) {
        navigate('/signin');
      } else {
        console.error('Failed to register user');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const formFields = [
    { label: 'Name', name: 'Name', required: true },
    { label: 'Email', name: 'Email', type: 'email', required: true },
    { label: 'Password', name: 'Password', type: 'password', required: true },
  ];

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column',
        textAlign: 'center',
      }}
    >
      <h2>Sign Up</h2>
      <ReusableForm formFields={formFields} onSubmit={handleSignUp} submitText="Sign Up" />
    </div>
  );
};

export default SignUpPage;
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { signUpUser } from '../services/userService';
// import { TextField, Button, Typography, Container, Box } from '@mui/material';

// export const SignUpPage = () => {
//   const navigate = useNavigate();

//   const handleSignUp = async (formData) => {
//     try {
//       const response = await signUpUser(formData);
//       if (response.ok) {
//         navigate('/signin');
//       } else {
//         console.error('Failed to register user');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   const formFields = [
//     { label: 'Name', name: 'Name', required: true },
//     { label: 'Email', name: 'Email', type: 'email', required: true },
//     { label: 'Password', name: 'Password', type: 'password', required: true },
//   ];

//   return (
//     <Container sx={{ padding: 10 }}>
//       <Box sx={{ padding: 3, backgroundColor: '#fff', borderRadius: '8px', boxShadow: 3 }}>
//         <Typography variant="h5" gutterBottom align="center">
//           Sign Up
//         </Typography>
//         <form onSubmit={(e) => {
//           e.preventDefault();
//           const formData = Object.fromEntries(new FormData(e.target).entries());
//           handleSignUp(formData);
//         }}>
//           <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
//             {formFields.map((field) => (
//               <TextField
//                 key={field.name}
//                 label={field.label}
//                 name={field.name}
//                 type={field.type || 'text'}
//                 variant="outlined"
//                 required={field.required}
//                 fullWidth
//               />
//             ))}
//             <Button
//               fullWidth
//               type="submit"
//               variant="contained"
//               color="primary"
//               sx={{ padding: '10px', fontSize: '16px', marginTop: 2 }}
//             >
//               Sign Up
//             </Button>
//           </Box>
//         </form>
//       </Box>
//     </Container>
//   );
// };

// export default SignUpPage;
