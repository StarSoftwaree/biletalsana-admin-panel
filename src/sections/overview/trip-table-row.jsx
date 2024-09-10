import { useState } from 'react';
import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import Popover from '@mui/material/Popover';
import TableRow from '@mui/material/TableRow';
import MenuItem from '@mui/material/MenuItem';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import Iconify from '../../../src/components/iconify';

// ----------------------------------------------------------------------

export default function TripTableRow({
  id,
  from,
  to,
  department,
  passenger,
  status,
}) {
  const [open, setOpen] = useState(null);

  const handleOpenMenu = (event) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  return (
    <>
      <TableRow hover tabIndex={-1}>
        <TableCell component="th" scope="row" padding="none">
          <Stack direction="row" alignItems="center" spacing={0}>
            <Typography sx={{ ml: 2 }} variant="subtitle2" noWrap>
              {id}
            </Typography>
          </Stack>
        </TableCell>
        <TableCell>{from}</TableCell>
        <TableCell>{to}</TableCell>
        <TableCell>{department}</TableCell>
        <TableCell>{passenger}</TableCell>
        <TableCell>{status}</TableCell>

        <TableCell align="right">
          <IconButton onClick={handleOpenMenu}>
            <Iconify icon="eva:more-vertical-fill" />
          </IconButton>
        </TableCell>
      </TableRow>

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: { width: 140 },
        }}
      >
        <MenuItem onClick={handleCloseMenu}>
          <Iconify icon="eva:edit-fill" sx={{ mr: 2 }} />
          Edit
        </MenuItem>

        <MenuItem onClick={handleCloseMenu} sx={{ color: 'error.main' }}>
          <Iconify icon="eva:trash-2-outline" sx={{ mr: 2, fontSize: '0.875rem' }} />
          Delete
        </MenuItem>
      </Popover>
    </>
  );
}

TripTableRow.propTypes = {
  id: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
  passenger: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};
