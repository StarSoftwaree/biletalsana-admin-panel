import PropTypes from 'prop-types';

import Box from '@mui/material/Box';



// ----------------------------------------------------------------------


export default function Main({ children, sx, ...other }) {

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        px: 0, 
        py: '16px', 
        width: '100%',
        ...sx,
      }}
      {...other}
    >
      {children}
    </Box>


  );
}

Main.propTypes = {
  children: PropTypes.node,
  sx: PropTypes.object,
};
