import { useState } from 'react';
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
        px: 1, // Reduced padding
      }}
    >
      <Avatar src={account.photoURL} alt="photoURL" sx={{ width: 32, height: 32 }} /> {/* Reduced Avatar size */}
      <Box sx={{ ml: 1 }}> {/* Reduced margin */}
        <Typography variant="subtitle2" sx={{ fontSize: 14 }}>{account.displayName}</Typography> {/* Smaller text */}
        <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: 12 }}>
          {account.role}
        </Typography>
      </Box>
    </Box>
  );

  const renderMenu = (
    <Stack direction="row" spacing={1} sx={{ px: 1 }}> {/* Reduced spacing and padding */}
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
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', py: 0.5 }}> {/* Reduced padding */}
        <Logo sx={{ ml: 1 }} /> {/* Reduced margin */}
        {renderMenu}
        {renderAccount}
      </Box>
    </Box>
  );
}

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
        px: 1, 
        py: 0.5, 
        textDecoration: 'none',
        color: active ? 'primary.main' : 'text.secondary',
        fontSize: 14, 
        fontWeight: active ? 'fontWeightBold' : 'fontWeightMedium',
        '&:hover': {
          color: 'primary.main',
        },
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Box sx={{ mr: 0.5 }}>
        {item.icon}
      </Box>
      {item.title}
      
      {item.children && hover && (
        <Box
          sx={{
            position: 'absolute',
            top: '100%',
            left: 0,
            backgroundColor: 'background.paper',
            boxShadow: 2,
            mt: 0.5, 
            zIndex: 1000,
            minWidth: 160, 
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
                px: 1,
                py: 0.5, 
                textDecoration: 'none',
                fontSize: 13, 
                color: 'text.primary',
                '&:hover': {
                  backgroundColor: 'action.hover',
                },
              }}
            >
              {subItem.icon && <Box sx={{ mr: 0.5 }}>{subItem.icon}</Box>} 
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

