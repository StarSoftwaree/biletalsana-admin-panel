import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import { RouterLink } from '../../../src/routes/components';

// ----------------------------------------------------------------------

const Logo = forwardRef(({ disabledLink = false, sx, ...other }, ref) => {

  // OR using local (public folder)
  // -------------------------------------------------------
  // const logo = (
  //   <Box
  //     component="img"
  //     src="/logo/logo_single.svg" => your path
  //     sx={{ width: 40, height: 40, cursor: 'pointer', ...sx }}
  //   />
  // );

  const logo = (
    <Box
      ref={ref}
      component="div"
      sx={{
        width: 40,
        height: 40,
        display: 'inline-flex',
        ...sx,
      }}
      {...other}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 512 512">
        <defs>
          <linearGradient id="altBG1" x1="100%" x2="0%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#FF9800" />
            <stop offset="100%" stopColor="#FFC107" />
          </linearGradient>
        </defs>
        <g fill="none" fillRule="evenodd">
          <rect fill="url(#altBG1)" width="512" height="512" rx="15%" />
          <g transform="translate(128, 128)">
            <rect width="256" height="128" rx="32" ry="32" fill="#FFF" />
            <path d="M0,64 L64,64 M192,64 L256,64" stroke="#FF9800" strokeWidth="16" />
            <circle cx="128" cy="64" r="32" fill="#FF9800" />
          </g>
        </g>
      </svg>

    </Box>
  );

  if (disabledLink) {
    return logo;
  }

  return (
    <Link component={RouterLink} href="/" sx={{ display: 'contents' }}>
      {logo}
    </Link>
  );
});

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

Logo.displayName = "Logo"

export default Logo;
