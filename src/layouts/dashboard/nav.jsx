import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { alpha } from '@mui/material/styles';

import { usePathname } from '../../../src/routes/hooks';
import { RouterLink } from '../../../src/routes/components';

import { account } from '../../../src/_mock/account';
import Logo from '../../../src/components/logo';
import navConfig from './config-navigation';

// ----------------------------------------------------------------------

export default function Nav() {

  const renderAccount = (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        px: 2,
      }}
    >
      <Avatar src={account.photoURL} alt="photoURL" />
      <Box sx={{ ml: 2 }}>
        <Typography variant="subtitle2">{account.displayName}</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {account.role}
        </Typography>
      </Box>
    </Box>
  );

  const renderMenu = (
    <Stack direction="row" spacing={2} sx={{ px: 2 }}>
      {navConfig.map((item) => (
        <NavItem key={item.title} item={item} />
      ))}
    </Stack>
  );

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        bgcolor: 'background.paper',
        boxShadow: (theme) => `0px 2px 8px ${alpha(theme.palette.grey[900], 0.1)}`,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', py: 1 }}>
        <Logo sx={{ ml: 2 }} />
        {renderMenu}
        {renderAccount}
      </Box>
    </Box>
  );
}

Nav.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
};

// ----------------------------------------------------------------------

function NavItem({ item }) {
  const pathname = usePathname();
  const active = item.path === pathname;

  return (
    <Box
      component={RouterLink}
      href={item.path}
      sx={{
        display: 'flex',      
        alignItems: 'center', 
        px: 2,
        py: 1,
        textDecoration: 'none',
        color: active ? 'primary.main' : 'text.secondary',
        fontWeight: active ? 'fontWeightBold' : 'fontWeightMedium',
        '&:hover': {
          color: 'primary.main',
        },
      }}
    >
      <Box sx={{ mr: 1 }}> 
        {item.icon}
      </Box>
      {item.title}
    </Box>
  );
}

NavItem.propTypes = {
  item: PropTypes.object,
};

