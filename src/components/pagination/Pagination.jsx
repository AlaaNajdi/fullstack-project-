import React from 'react';

import { Button, Box, Pagination as MuiPagination } from '@mui/material';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    const startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 4 }}>
      <Button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        variant="contained"
        color="primary"
        sx={{ margin: 1 }}
      >
        Previous
      </Button>

      {getPageNumbers().map((page) => (
        <Button
          key={page}
          onClick={() => onPageChange(page)}
          variant={currentPage === page ? 'contained' : 'outlined'}
          color={currentPage === page ? 'primary' : 'default'}
          sx={{ margin: 1 }}
        >
          {page}
        </Button>
      ))}

      <Button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        variant="contained"
        color="primary"
        sx={{ margin: 1 }}
      >
        Next
      </Button>
    </Box>
  );
};

export default Pagination;
