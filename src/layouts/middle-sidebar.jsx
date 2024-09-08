import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function MiddleSidebar() {
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
        Orta Sidebar
      </Typography>
      <Typography>Burada orta sidebar içeriği yer alacak.</Typography>
    </Box>
  );
}
