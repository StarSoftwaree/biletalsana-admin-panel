import { useState } from 'react';

import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';

import { trips } from '../../../../src/_mock/trips';


import TableNoData from '../table-no-data';
import TripTableRow from '../trip-table-row';
import TripTableHead from '../trip-table-head';
import TableEmptyRows from '../table-empty-rows';
import TripTableToolbar from '../trip-table-toolbar';

import Scrollbar from '../../../../src/components/scrollbar';
import { emptyRows, applyFilter, getComparator } from '../utils';
// ----------------------------------------------------------------------

export default function AppView() {

  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [orderBy, setOrderBy] = useState('name');

  const [filterName, setFilterName] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleSort = (event, id) => {
    const isAsc = orderBy === id && order === 'asc';
    if (id !== '') {
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(id);
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterByName = (event) => {
    setPage(0);
    setFilterName(event.target.value);
  };

  const dataFiltered = applyFilter({
    inputData: trips,
    comparator: getComparator(order, orderBy),
    filterName,
  });

  const notFound = !dataFiltered.length && !!filterName;
  return (
    <Container>
          <Card>
            <TripTableToolbar
              filterName={filterName}
              onFilterName={handleFilterByName}
            />

            <Scrollbar>
              <TableContainer sx={{ overflow: 'unset' }}>
                <Table >
                  <TripTableHead
                    order={order}
                    orderBy={orderBy}
                    rowCount={trips.length}
                    onRequestSort={handleSort}
                    headLabel={[
                      { id: 'id', label: 'ID' },
                      { id: 'from', label: 'Nereden' },
                      { id: 'to', label: 'Nereye' },
                      { id: 'department', label: 'Şube' },
                      { id: 'passenger', label: 'Yolcu' },
                      { id: 'status', label: 'Durum' },
                    ]}
                  />
                  <TableBody>
                    {dataFiltered
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((row) => (
                        <TripTableRow
                          key={row.id}
                          id={row.id}
                          from={row.from}
                          to={row.to}
                          department={row.department}
                          passenger={row.passenger}
                          status={row.status}
                        />
                      ))}

                    <TableEmptyRows
                      height={60}
                      emptyRows={emptyRows(page, rowsPerPage, trips.length)}
                    />

                    {notFound && <TableNoData query={filterName} />}
                  </TableBody>

                </Table>
              </TableContainer>
            </Scrollbar>

            <TablePagination
              page={page}
              component="div"
              count={trips.length}
              rowsPerPage={rowsPerPage}
              onPageChange={handleChangePage}
              rowsPerPageOptions={[5, 10, 25]}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Card>
    </Container>
  );
}
