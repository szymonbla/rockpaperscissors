import { Box, Typography } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Custom404: NextPage = () => {
  return (
    <>
      <Head>
        <title>RockPaperScissors</title>
        <meta name="description" content="Rock, paper, scissors" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Image src="/logo.png" layout="fill" alt="Rock paper scissors logo" /> */}
    </>
  );
};

export default Custom404;
