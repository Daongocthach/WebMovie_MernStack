import { Box, Typography, Table, TableBody, TableCell, TableHead, TableRow, Paper, TableFooter, TablePagination } from '@mui/material'
import { useEffect, useState } from 'react'
import { Delete, Create, Person } from '@mui/icons-material'
import AddDirector from './Formdirector/Adddirector'
import UpdateDirector from './FormDirector/UpdateDirector'
import DeleteDirector from './Formdirector/Deletedirector'
import directorApi from '../../apis/directorApi'

function DirectorList() {
  const [directors, setDirectors] = useState([])
  const [update, setUpdate] = useState('')
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(3)
  const handleChangePage = (e, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  useEffect(() => {
    directorApi.getListDirectors()
      .then(response => {
        setDirectors(response.data)
        setUpdate('')
      })
      .catch(error => {
        console.error(error)
      })
  }, [update])
  return (
    <Box sx={{ height: '90vh', m: 5 }}>
      <Box sx={{ height: '10%', display: 'flex', justifyContent: 'space-between' }}>
        <Person />
        <Typography variant='h6' fontWeight={'bold'}>DirectorList</Typography>
        <AddDirector directors={directors} setUpdate={setUpdate} />
      </Box>
      <Box sx={{ height: 'fit-content', width: '100%', bgcolor: 'white', boxShadow: '0px 0px 10px  ' }}>
        <Paper>
          <Table aria-label="custom pagination table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Description</TableCell>
                <TableCell align="center">Update</TableCell>
                <TableCell align="center">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {directors?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((director, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell align="center">{director?.name}</TableCell>
                    <TableCell align="center">{director?.description}</TableCell>
                    <TableCell align="center" sx={{ '&:hover': { color: 'red' } }}><UpdateDirector director={director} setUpdate={setUpdate} /></TableCell>
                    <TableCell align="center" sx={{ '&:hover': { color: 'red' } }}><UpdateDirector director={director} setUpdate={setUpdate} /></TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  colSpan={3}
                  rowsPerPageOptions={[3, 5]}
                  count={directors?.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </Paper>
      </Box>
    </Box>
  )
}

export default DirectorList