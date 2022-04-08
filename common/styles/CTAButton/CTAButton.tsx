import { Button, ButtonProps, SxProps } from '@mui/material';

interface CTAButtonProps extends ButtonProps {
  label: string;
  href: string;
  isProcessing?: boolean;
  sx?: SxProps;
}

export const CTAButton = ({ label, href, isProcessing, sx }: CTAButtonProps) => {
  return (
    <Button
      disabled={isProcessing}
      href={href}
      sx={{
        color: 'common.white',
        background: `linear-gradient(90deg, #E1358D, #9232E8)`,
        py: 1,
        px: 2,
        '&:hover': {},
        ...sx
      }}
    >
      {label}
    </Button>
  );
};
