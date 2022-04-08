import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import { Box, Typography } from '@mui/material';

const Custom404: NextPage = () => {
  return (
    <>
      <Head>
        <title>Whoops!</title>
        <meta name="description" content="Rock, paper, scissors 404 page" />
        <link rel="icon" href="/favicons/404/favicon.ico" />
      </Head>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          backgroundColor: 'secondary.main',
          width: '100vw',
          height: '100vh',
          p: 1
        }}
      >
        <Image src="/images/404/notFound.svg" width={800} height={600} alt="Rock paper scissors logo" priority />
        <Typography variant="h4" fontWeight="500" textAlign="justify">
          Whoops! The page you are looking for does not exist.
        </Typography>
      </Box>
    </>
  );
};

export default Custom404;
