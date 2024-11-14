import React, { useContext, useState } from 'react';

import { ProductContext } from '../../context/Productcontext';
import { TextField, Box } from '@mui/material'; 

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
        variant="outlined" 
        placeholder="Search about product"
        value={searchValue}
        onChange={handleSearchChange}
        size="small"
        fullWidth 
        sx={{
          maxWidth: '500px', 
          backgroundColor: '#fff', 
        }}
      />
    </Box>
  );
};

export default SearchBar;
