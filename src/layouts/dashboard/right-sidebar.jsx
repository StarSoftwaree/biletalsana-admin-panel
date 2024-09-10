import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function RightSidebar() {
  return (
    <Box
      sx={{
        width: 240,
        bgcolor: 'background.paper',
        borderLeft: '1px solid',
        borderColor: 'divider',
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar sx={{
          width: 200, mr: 1
        }} />
      </LocalizationProvider>

      <Button variant="contained" sx={{ mt: 2, width: '100%' }}>
        Bugün
      </Button>

      <Stack spacing={1} sx={{ mt: 2, width: '100%' }}>
        <Button variant="contained" sx={{ bgcolor: '#006994', color: '#fff' }}>
          F4 Bay Satış
        </Button>
        <Button variant="contained" sx={{ bgcolor: '#D90076', color: '#fff' }}>
          F5 Bayan Satış
        </Button>
        <Button variant="contained" sx={{ bgcolor: '#009ACD', color: '#fff' }}>
          F6 Bay Rez.
        </Button>
        <Button variant="contained" sx={{ bgcolor: '#FF5C77', color: '#fff' }}>
          F7 Bayan Rez.
        </Button>
        <Button variant="outlined">Tüm Kısayollar İçin Tıklayın</Button>
      </Stack>

      <Typography variant="h6" sx={{ mt: 2 }}>
        14:47
      </Typography>
      <Typography variant="body2">
        Öz Has Bingöl
      </Typography>
      <Typography variant="body2">
        ELAZIĞ: GEÇİCİ
      </Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>
        IP adresi: 193.255.125.65
      </Typography>

      <Typography variant="body2" sx={{ mt: 2 }}>
        ORS Teknik Destek Hattı: 0212 963 01 02
      </Typography>
      <Typography variant="body2">
        obilet.com çağrı merkezi:
      </Typography>

      <Button variant="contained" color="error" sx={{ mt: 2 }}>
        Canlı Destek
      </Button>
    </Box>
  );
}
