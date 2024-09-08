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

import { useState } from 'react';

function NavItem({ item }) {
  const [hover, setHover] = useState(false);
  const pathname = usePathname();
  const active = item.path === pathname;

  return (
    <Box
      component={RouterLink}
      href={item.path}
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
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
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Box sx={{ mr: 1 }}>
        {item.icon}
      </Box>
      {item.title}
      
      {/* Submenu */}
      {item.children && hover && (
        <Box
          sx={{
            position: 'absolute',
            top: '100%',
            left: 0,
            backgroundColor: 'background.paper',
            boxShadow: 2,
            mt: 1,
            zIndex: 1000,
            minWidth: 200,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {item.children.map((subItem, index) => (
            <Box
              key={index}
              component={RouterLink}
              href={subItem.path}
              sx={{
                px: 2,
                py: 1,
                textDecoration: 'none',
                color: 'text.primary',
                '&:hover': {
                  backgroundColor: 'action.hover',
                },
              }}
            >
              {subItem.icon && <Box sx={{ mr: 1 }}>{subItem.icon}</Box>}
              {subItem.title}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}

NavItem.propTypes = {
  item: PropTypes.object,
};

