import { useState } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import TablePagination from '@mui/material/TablePagination'
import DeleteIcon from '@mui/icons-material/Delete'
import CreateIcon from '@mui/icons-material/Create'

function createData(name, description) {
  return { name, description }
}

const rows = [
  createData('Cupcake', 'A sweet treat.'),
  createData('Donut', 'A delicious pastry.'),
  createData('Eclair', 'A creamy dessert.'),
  createData('Frozen yoghurt', 'A frozen dessert.'),
  createData('Gingerbread', 'A spiced cookie.'),
  createData('Honeycomb', 'A sweet comb.'),
  createData('Ice cream sandwich', 'A delightful sandwich.'),
  createData('Jelly Bean', 'A fruity candy.'),
  createData('KitKat', 'A popular chocolate bar.'),
  createData('Lollipop', 'A colorful candy.'),
  createData('Marshmallow', 'A soft and fluffy treat.'),
  createData('Nougat', 'A chewy candy.'),
  createData('Oreo', 'A popular cookie sandwich.')
]

export default function CustomPaginationTable() {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Update</TableCell>
            <TableCell align="center">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.name}>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.description}</TableCell>
              <TableCell align="center">
                <CreateIcon />
              </TableCell>
              <TableCell align="center">
                <DeleteIcon />
              </TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={4} />
            </TableRow>
          )}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10]}
        colSpan={3}
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        SelectProps={{
          inputProps: {
            'aria-label': 'rows per page'
          },
          native: true
        }}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  )
}
