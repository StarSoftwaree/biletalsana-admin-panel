import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

export default function LeftSidebar() {
  // Define seat data (1 = male, 2 = female, 3 = window, 0 = empty)
  const seats = [
    [1, 2, 3],
    [1, 0, 2],
    [1, 0, 2],
    [1, 0, 2],
    [1, 0, 2],
    [1, 0, 2],
    [1, 0, 2],
    [0, 0, 0],
    [1, 2, 0],
  ];

  // Seat button rendering logic based on seat type
  const renderSeat = (seat) => {
    if (seat === 1) {
      return <Button variant="contained" sx={{ bgcolor: '#006994', color: '#fff' }}>M</Button>;
    } else if (seat === 2) {
      return <Button variant="contained" sx={{ bgcolor: '#D90076', color: '#fff' }}>F</Button>;
    } else if (seat === 3) {
      return <Button variant="contained" sx={{ bgcolor: '#009ACD', color: '#fff' }}>W</Button>;
    } else {
      return <Box sx={{ width: '40px', height: '40px' }} />;
    }
  };

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
        Otobüs Koltukları
      </Typography>
      {/* Seat Layout */}
      <Grid container spacing={1} justifyContent="center">
        {seats.map((row, rowIndex) => (
          <Grid container item spacing={1} key={rowIndex} justifyContent="center">
            {row.map((seat, seatIndex) => (
              <Grid item key={seatIndex}>
                {renderSeat(seat)}
              </Grid>
            ))}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
