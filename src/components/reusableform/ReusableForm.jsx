import React from 'react';
import { TextField, Button, Grid, Box } from '@mui/material';

export const ReusableForm = ({ formFields, onSubmit, submitText }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {};
    formFields.forEach((field) => {
      formData[field.name] = event.target[field.name].value;
    });
    onSubmit(formData);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        p: 3,
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: 3,
        width: '100%',
        maxWidth: 500,
        mx: 'auto',
      }}
    >
      <Grid container spacing={2}>
        {formFields.map((field) => (
          <Grid item xs={12} key={field.name}>
            <TextField
              fullWidth
              type={field.type || 'text'}
              name={field.name}
              label={field.label}
              required={field.required}
              variant="outlined"
            />
          </Grid>
        ))}
        <Grid item xs={12}>
          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              fontSize: '16px',
              padding: '10px',
            }}
          >
            {submitText}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ReusableForm;
