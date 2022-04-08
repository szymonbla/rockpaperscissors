import { Button, Typography } from '@mui/material';
import Link from 'next/link';

interface LinkItemProps {
  label: string;
  href: string;
}

export const LinkItem = ({ label, href }: LinkItemProps) => {
  return (
    <Link href={href} passHref>
      <a style={{ textDecoration: 'none' }}>
        <Button>
          <Typography
            variant="subtitle1"
            sx={{
              color: 'primary.light',
              '&:hover': {
                color: 'common.white'
              }
            }}
          >
            {label}
          </Typography>
        </Button>
      </a>
    </Link>
  );
};
