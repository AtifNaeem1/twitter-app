import { Box, Grid, Typography } from '@mui/material';

const Header = () => {
  return (
    <>
      <Grid item role="header" sx={{ height: '40px' }}>
        <Box sx={{ marginLeft: '25px', marginTop: '5px' }}>
          <Typography
            variant="h5"
            children="Tweets"
            sx={{ fontWeight: 'bold' }}
          />
        </Box>
      </Grid>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
        }}
      />
    </>
  );
};

export default Header;
