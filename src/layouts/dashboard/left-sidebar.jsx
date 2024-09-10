import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

const busSeatLayout = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
  [13, 14, 15],
  [16, 17, 18],
  [19, 20, 21],
  [22, 23, 24],
  [25, 26, 27],
  [28, 29, 30],
  [31, 32, 33],
  [34, 35, 36],
  [37, 38, 39],
  [40, 0, 41], // Handle empty seat (seat 40) with a placeholder
];

const renderSeat = (seatNumber, isEmpty) => {
  if (isEmpty) {
    return <Box sx={{ width: '24px', height: '24px' }} />; // Placeholder for empty seat
  }
  return (
    <Button variant="contained" sx={{ bgcolor: '#FFF', color: '#000' }}>
      {seatNumber}
    </Button>
  );
};

function LeftSidebar() {
  return (
    <Box
      sx={{
        width: 260,
        bgcolor: 'background.paper',
        borderRight: '1px solid',
        borderColor: 'divider',
        p: 2,
      }}
    >
      <Typography variant="h6" gutterBottom>
        Otobüs Koltukları
      </Typography>
      <Grid container spacing={1} justifyContent="center">
        {busSeatLayout.map((row, rowIndex) => (
          <Grid container item spacing={1} key={rowIndex} justifyContent="center">
            {row.map((seat, seatIndex) => (
              <Grid item key={seatIndex}>
                {renderSeat(seat, seat === 0)}
              </Grid>
            ))}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default LeftSidebar;