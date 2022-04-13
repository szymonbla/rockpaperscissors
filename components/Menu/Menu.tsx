import Image from 'next/image';
import Link from 'next/link';
import { AppBar, Container, Grid } from '@mui/material';

import { RoutesDefinition } from 'common';
import { CTAButton, LinkItem, ThemeSwitcherButton } from 'common/styles';
import Logo from './images/logo.png';

export const Menu = () => {
  const linkItems = [
    { label: 'About me', href: '#about-us' },
    { label: 'How to start?', href: '#how-to-start' },
    { label: 'History', href: '#history' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <AppBar position="static" sx={{ backgroundColor: 'primary.main' }}>
      <Container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link href={RoutesDefinition.landingPage} passHref>
          <a>
            <Image src={Logo} alt="logo.png" width={70} height={70} />
          </a>
        </Link>
        <Grid display="flex" justifyContent="flex-end" alignItems="center">
          <Grid display="flex" sx={{ '& > a': { mr: 2 } }}>
            {linkItems.map((linkItem) => (
              <LinkItem label={linkItem.label} href={linkItem.href} key={linkItem.label} />
            ))}
          </Grid>
          <ThemeSwitcherButton />
          <CTAButton label="Play" href="/her" sx={{ fontWeight: 800 }} />
        </Grid>
      </Container>
    </AppBar>
  );
};
