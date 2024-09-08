import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const data = [
  { day: '08 Eyl Paz', departurePlace: 'ELAZIĞ', departure: '04:40', landing: '17:00', destination: 'İZMİR' },
  { day: '09 Eyl Pzt', departurePlace: 'ELAZIĞ', departure: '04:40', landing: '17:00', destination: 'BİNGÖL' },
];

function MiddleSidebar() {
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
      <Typography variant="subtitle" gutterBottom>
        Yolculuk Listesi
      </Typography>
      <List>
        {data.map((item, index) => (
          <ListItem key={index} sx={{ display: 'flex', flexDirection: 'column', mb: 2 }}>
            <Typography variant="body1" fontWeight="bold" sx={{ mb: 1 }}>
              {item.day}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <Typography variant="body2">
                Kalkış: {item.departure} <br />
                Kalkış Yeri: {item.departurePlace}
              </Typography>
              <Typography variant="body2">
                Varış: {item.landing} <br />
                Varış Yeri: {item.destination}
              </Typography>
            </Box>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default MiddleSidebar;
