import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
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
          <ListItem key={index} sx={{ display: 'flex', flexDirection: 'column', mb: 1 }}>
            <Card sx={{ maxWidth: 345, backgroundColor: grey }}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.day}
                  </Typography>
                  <Typography variant="body2">
                    Kalkış: {item.departure} <br />
                    Kalkış Yeri: {item.departurePlace}
                  </Typography>
                  <Typography variant="body2">
                    Varış: {item.landing} <br />
                    Varış Yeri: {item.destination}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Detay
                </Button>
              </CardActions>
            </Card>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default MiddleSidebar;
