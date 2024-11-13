import React, { useContext, useState } from 'react';
import { ProductContext } from '../../context/Productcontext';
import { TextField, Box } from '@mui/material'; // استيراد المكونات من MUI

const SearchBar = ({ onSearch }) => {
  const { setSearchTerm } = useContext(ProductContext);
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      marginTop="20px"
      width="100%"
    >
      <TextField
        variant="outlined" // تصميم بحواف واضحة
        placeholder="Search about product"
        value={searchValue}
        onChange={handleSearchChange}
        size="small" // تحديد الحجم الصغير
        fullWidth // العرض الكامل
        sx={{
          maxWidth: '500px', // تحديد العرض الأقصى للحقل
          backgroundColor: '#fff', // خلفية بيضاء
        }}
      />
    </Box>
  );
};

export default SearchBar;
