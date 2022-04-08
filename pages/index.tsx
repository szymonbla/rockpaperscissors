import { Box, Typography } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>RockPaperScissors</title>
        <meta name="description" content="Rock, paper, scissors" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box sx={{ backgroundColor: 'primary.light' }}>
        <Typography variant="h1" sx={{ fontWeight: '600' }}>
          Rock, Paper, Scissors
        </Typography>
      </Box>
    </>
  );
};

export default Home;
