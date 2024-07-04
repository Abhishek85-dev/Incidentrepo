import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import "./Dashboard.css";
import { Link } from 'react-router-dom';

import { width } from '@fortawesome/free-brands-svg-icons/fa42Group';
import { Card } from 'reactstrap';

const columns = [
    { id: 'TicketID', label: 'TicketID', minWidth: 70 },
    { id: 'Subject', label: 'Subject', minWidth: 170,},
    { id: 'Status', label: 'Status', minWidth: 170 },
    { id: 'Priority', label: 'Priority', minWidth: 170},
    { id: 'CreatedAt', label: 'CreatedAt', minWidth: 100 },
  ];
  
  function createData(TicketID, Subject, Status, Priority, CreatedAt) {
    return { TicketID, Subject, Status, Priority, CreatedAt };
  }
  
  const rows = [
    createData(1, 'Login Issue', 'Open', 'High', '2024-06-01'),
    createData(2, 'Email Not Working', 'Closed', 'Medium', '2024-06-02'),
    createData(3, 'Network Slow', 'Open', 'Low', '2024-06-03'),
    createData(4, 'System Crash', 'Closed', 'High', '2024-06-04'),
    createData(5, 'Software Installation', 'Open', 'Medium', '2024-06-05'),
    // Add more rows as needed
  ];



export default function RecentTickets() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (


    <Paper sx={{ width: '87%',  marginLeft:"90px", marginTop:"25px", borderRadius:"5px",
         background: "linear-gradient(to right,#f6c553, white)",

    }}>
       
       
      <TableContainer className="tableContainer" sx={{ maxHeight: 340}}>
        <Table stickyHeader aria-label="sticky table" >
          <TableHead >
            <TableRow >
              {columns.map((column) => (
                <TableCell sx={{   cursor:"default",
                    textAlign: "left"
                }}
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    

  );
};


