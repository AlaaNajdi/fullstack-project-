import React, { useContext, useState } from 'react';
import { UserContext } from '../../context/Usercontext';
import { TextField, Box } from '@mui/material'; // استيراد المكونات من MUI

const UserSearchBar = () => {
  const { setSearchTerm } = useContext(UserContext);
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
    setSearchTerm(value);
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
        placeholder="Search for users"
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

export default UserSearchBar;
