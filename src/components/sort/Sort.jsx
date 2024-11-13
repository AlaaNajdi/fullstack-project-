import React from 'react';
import { Select, MenuItem, FormControl, InputLabel, Box } from '@mui/material';

export const Sort = ({ sortBy = '', sortOrder = '', onSortByChange, onSortOrderChange }) => {
  return (
    <Box display="flex" gap={2} justifyContent="center" alignItems="center" marginTop={2}>
      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel>Sort By</InputLabel>
        <Select
          value={sortBy}
          onChange={onSortByChange}
          label="Sort By"
          variant="outlined"
        >
          <MenuItem value="" disabled>Select an option</MenuItem>
          <MenuItem value="name">Name</MenuItem>
          <MenuItem value="price">Price</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel>Sort Order</InputLabel>
        <Select
          value={sortOrder}
          onChange={onSortOrderChange}
          label="Sort Order"
          variant="outlined"
        >
          <MenuItem value="" disabled>Select an Order</MenuItem>
          <MenuItem value="asc">Ascending</MenuItem>
          <MenuItem value="desc">Descending</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Sort;
