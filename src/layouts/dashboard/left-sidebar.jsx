import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function LeftSidebar() {
  return (
    <Box
      sx={{
        width: 240,
        bgcolor: 'background.paper',
        borderRight: '1px solid',
        borderColor: 'divider',
        p: 2,
      }}
    >
      <Typography variant="h6" gutterBottom>
        Sol Sidebar
      </Typography>
      <Typography>Burada sol sidebar içeriği yer alacak.</Typography>
    </Box>
  );
}
