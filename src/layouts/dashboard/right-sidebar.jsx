import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function RightSidebar() {
  return (
    <Box
      sx={{
        width: 240,
        bgcolor: 'background.paper', 
        borderLeft: '1px solid',
        borderColor: 'divider',
        p: 2,
      }}
    >
      <Typography variant="h6" gutterBottom>
        Sağ Sidebar
      </Typography>
      <Typography>Burada sağ sidebar içeriği yer alacak.</Typography>
    </Box>
  );
}
