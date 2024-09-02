import { useState } from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import ListItemButton from '@mui/material/ListItemButton';
import Popover from '@mui/material/Popover';
import Stack from '@mui/material/Stack';
import { alpha } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { usePathname } from '../../../src/routes/hooks';
import { RouterLink } from '../../../src/routes/components';
import Drawer from '@mui/material/Drawer';
import { HEADER } from './config-layout';
import { useResponsive } from '../../../src/hooks/use-responsive';
import Logo from '../../../src/components/logo';
import Scrollbar from '../../../src/components/scrollbar';

import navConfig from './config-navigation';

// ----------------------------------------------------------------------

export default function Nav({ openNav, onCloseNav }) {
  const pathname = usePathname();

  const upLg = useResponsive('up', 'lg');

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderMenu = (
    <Stack component="nav" direction="row" spacing={0.5} sx={{ px: 2 }}>
      {navConfig.map((item) => (
        <NavItem key={item.title} item={item} />
      ))}
    </Stack>
  );
  
  const renderContent = (
    <Scrollbar
      sx={{
        width: '100%',
        '& .simplebar-content': {
          width: '100%',
          display: 'flex',
          flexDirection: 'row',  // Yatay yapıya dönüştürüldü
        },
      }}
    >
      <Logo sx={{ mt: 3, ml: 4, mb: 2 }} />
  
      {renderMenu}
  
      <Box sx={{ flexGrow: 1 }} />
    </Scrollbar>
  );
  
  return (
    <Box
      sx={{
        flexShrink: { lg: 0 },
        width: '100%',
        height: HEADER.H_MOBILE,
      }}
    >
      {upLg ? (
        <Box
          sx={{
            height: HEADER.H_MOBILE,
            position: 'fixed',
            width: '100%',
            borderBottom: (theme) => `dashed 1px ${theme.palette.divider}`,
          }}
        >
          {renderContent}
        </Box>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          PaperProps={{
            sx: {
              width: '100%', // Drawer da tam genişlikte olmalı
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );  
}

Nav.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
};

// ----------------------------------------------------------------------


// ----------------------------------------------------------------------

function NavItem({ item }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const pathname = usePathname();
  const active = item.path === pathname;

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const open = Boolean(anchorEl);
  
  return (
    <>
      <ListItemButton
        component={RouterLink}
        onClick={item.children ? handleClick : null}
        sx={{
          minHeight: 44,
          borderRadius: 0.75,
          typography: 'body2',
          color: 'text.secondary',
          textTransform: 'capitalize',
          fontWeight: 'fontWeightMedium',
          ...(active && {
            color: 'primary.main',
            fontWeight: 'fontWeightSemiBold',
            bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08),
            '&:hover': {
              bgcolor: (theme) => alpha(theme.palette.primary.main, 0.16),
            },
          }),
        }}
      >
        <Box component="span">{item.title}</Box>
        {item.children && <ExpandMoreIcon sx={{ ml: 'auto' }} />}
      </ListItemButton>
  
      {item.children && (
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          sx={{
            mt: 1,
            ml: 0, 
            p: 1,
            boxShadow: (theme) => theme.shadows[3],
          }}
        >
          <Stack spacing={0.5}>
            {item.children.map((subItem) => (
              <NavItem key={subItem.title} item={subItem} />
            ))}
          </Stack>
        </Popover>
      )}
    </>
  );  
}

NavItem.propTypes = {
  item: PropTypes.object.isRequired,
};

