import { FormControlLabel, FormGroup, styled, Switch } from '@mui/material';

export const ThemeSwitcherButton = () => {
  return (
    <FormGroup>
      <FormControlLabel control={<MaterialUISwitch sx={{ m: 1 }} />} label="" />
    </FormGroup>
  );
};

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('images/themeSwitcher/sun.svg')`
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be'
      }
    }
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'light' ? theme.palette.primary.main : theme.palette.primary.light,
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '80%',
      height: '80%',
      top: ' 50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      m: 1,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundImage: `url('images/themeSwitcher/moon.svg')`
    }
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2
  }
}));
