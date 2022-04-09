import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Menu, Banner } from 'components';

const Home: NextPage = () => {
  return (
    <Root>
      <Head>
        <title>RockPaperScissors</title>
        <meta name="description" content="Rock, paper, scissors" />
        <link rel="icon" href="/favicons/favicon.ico" />
      </Head>
      <Menu />
      <Banner />
    </Root>
  );
};

const Root = styled('div')`
  min-height: 100vh;
  width: 100vw;
  background-color: #fef0f0;
  margin: 0;
  padding: 0;
`;

export default Home;
