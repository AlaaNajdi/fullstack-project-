import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

// استيراد صورة الخلفية
const backgroundImage = "https://i.pinimg.com/736x/a8/a7/40/a8a740267bf4698983221489fe16db97.jpg";

const HomePage = () => {
  return (
    <>
      {/* أول صورة مع اسم الموقع وعبارة ترحيبية */}
      <Box
        sx={{
          backgroundImage: `url(${backgroundImage})`, // تأكد من تعريف backgroundImage
          backgroundSize: 'contain',   // لتغطية كامل المساحة
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'left',   // لضبط الصورة في المنتصف
          height: '100vh',   // تحديد الارتفاع ليشمل كامل النافذة
          width: '100%',   // التأكد من أن العرض يغطي كامل المساحة
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          color: 'white',
          padding: 0.25,
        }}
      >
        <Box
          sx={{
            textAlign: 'right',
            color: '#000000',
            padding: 2,
            width: '70%', // تحديد العرض للنص
          }}
        >
          <Typography variant="h2" sx={{ fontWeight: 'bold' }}>
            Vintage Furniture Store
          </Typography>
          <Typography variant="h6" sx={{ marginTop: 2 }}>
            Explore the most beautiful vintage pieces and start renewing your home today!
          </Typography>

          {/* الأزرار للتوجيه إلى الصفحات */}
          <Box sx={{ marginTop: 3 }}>
            <Link to="/ProductList" style={{ textDecoration: 'none' }}>
              <Button variant="contained" color="primary" sx={{ marginRight: 2 }}>
                View Products
              </Button>
            </Link>
            <Link to="/about" style={{ textDecoration: 'none' }}>
              <Button variant="contained" color="secondary">
                About Us
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
