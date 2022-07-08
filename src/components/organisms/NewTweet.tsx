import { Button, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';

const NewTweet = () => {
  const [tweet, setTweet] = useState('');
  return (
    <Grid container direction="row" sx={{ marginTop: '15px' }}>
      <TextField
        fullWidth
        label="Tweet to @twitter"
        id="fullWidth"
        onChange={(e) => setTweet(e.target.value)}
        sx={{ width: '90%' }}
      />
      <Button>Post</Button>
    </Grid>
  );
};

export default NewTweet;
