import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import { grey } from '../../theme/palette';

const data = [
  { day: '08 Eyl Paz', departurePlace: 'ELAZIĞ', departure: '04:40', landing: '17:00', destination: 'İZMİR' },
  { day: '09 Eyl Pzt', departurePlace: 'ELAZIĞ', departure: '04:40', landing: '17:00', destination: 'BİNGÖL' },
  { day: '09 Eyl Pzt', departurePlace: 'ELAZIĞ', departure: '04:40', landing: '17:00', destination: 'BİNGÖL' },
  { day: '09 Eyl Pzt', departurePlace: 'ELAZIĞ', departure: '04:40', landing: '17:00', destination: 'BİNGÖL' },
  { day: '09 Eyl Pzt', departurePlace: 'ELAZIĞ', departure: '04:40', landing: '17:00', destination: 'BİNGÖL' },
  { day: '09 Eyl Pzt', departurePlace: 'ELAZIĞ', departure: '04:40', landing: '17:00', destination: 'BİNGÖL' },
  { day: '09 Eyl Pzt', departurePlace: 'ELAZIĞ', departure: '04:40', landing: '17:00', destination: 'BİNGÖL' },
  { day: '09 Eyl Pzt', departurePlace: 'ELAZIĞ', departure: '04:40', landing: '17:00', destination: 'BİNGÖL' },
  { day: '09 Eyl Pzt', departurePlace: 'ELAZIĞ', departure: '04:40', landing: '17:00', destination: 'BİNGÖL' },
  { day: '09 Eyl Pzt', departurePlace: 'ELAZIĞ', departure: '04:40', landing: '17:00', destination: 'BİNGÖL' },
  { day: '09 Eyl Pzt', departurePlace: 'ELAZIĞ', departure: '04:40', landing: '17:00', destination: 'BİNGÖL' },
  { day: '09 Eyl Pzt', departurePlace: 'ELAZIĞ', departure: '04:40', landing: '17:00', destination: 'BİNGÖL' },
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
      <Typography variant="h6" gutterBottom>
        Yolculuk Listesi
      </Typography>
      <List>
        {data.map((item, index) => (
          <ListItem key={index} sx={{ display: 'flex', flexDirection: 'column', margin: 0, paddingX: 0 }}>
            <Card sx={{ backgroundColor: grey, width: 200 }}>
              <CardActionArea sx={{ padding: 0 }}>
                <CardContent >
                  <Typography gutterBottom variant="h6" component="div" fontSize={12}>
                    {item.day}
                  </Typography>
                  <Typography variant="body2" fontSize={12}>
                    Kalkış: {item.departure} <br />
                    Kalkış Yeri: {item.departurePlace}
                  </Typography>
                  <Typography variant="body2" fontSize={12}>
                    Varış: {item.landing} <br />
                    Varış Yeri: {item.destination}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default MiddleSidebar;
