// DashboardLayout component
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Nav from './nav';
import Main from './main';
import LeftSidebar from './left-sidebar'; 
import RightSidebar from './right-sidebar';
import MiddleSidebar from '../middle-sidebar';

export default function DashboardLayout({ children }) {
  return (
    <>
      <Box
        sx={{
          minHeight: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box sx={{ flexShrink: 0, height: 64 }}> 
          <Nav />
        </Box>

        <Box sx={{ display: 'flex', flexGrow: 1 }}> 
          <LeftSidebar />

          <Box component="main" sx={{ flexGrow: 1 }}>
            <Main>{children}</Main>
          </Box>

          <MiddleSidebar />

          <RightSidebar />
        </Box>
      </Box>
    </>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.node,
};
