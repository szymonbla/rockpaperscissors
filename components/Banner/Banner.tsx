import { Container, Typography, Grid, Box } from '@mui/material';
import Image from 'next/image';

export const Banner = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '70%',
        width: '100%',
        px: '10%'
      }}
    >
      <Grid sx={{ width: '35%' }}>
        <Typography variant="h1" fontWeight="600" fontSize="5em">
          This game settles every conflict
        </Typography>
      </Grid>
      <Image src="/images/banner.svg" width="800px" height="700px" alt="Banner" priority />
    </Box>
  );
};
