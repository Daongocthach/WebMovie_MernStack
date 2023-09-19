import { Box, Typography, Table, TableBody, TableCell, TableHead, TableRow, Paper, TableFooter, TablePagination } from '@mui/material'
import { useEffect, useState } from 'react'
import { Flag } from '@mui/icons-material'
import countryApi from '../../apis/countryApi'
import AddCountry from './FormCountry/AddCountry'
import UpdateCountry from './FormCountry/UpdateCountry'
import DeleteCountry from './FormCountry/DeleteCountry'

function CountryList() {
  const [countries, setCountries] = useState([])
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
    countryApi.getListCountries()
      .then(response => {
        setCountries(response.data)
        setUpdate('')
      })
      .catch(error => {
        console.error(error)
      })
  }, [update])
  return (
    <Box sx={{ height: '90vh', m: 5 }}>
      <Box sx={{ height: '10%', display: 'flex', justifyContent: 'space-between' }}>
        <Flag />
        <Typography variant='h6' fontWeight={'bold'}>CountryList</Typography>
        <AddCountry countries={countries} setUpdate={setUpdate}/>
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
              {countries?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((country, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell align="center">{country?.name}</TableCell>
                    <TableCell align="center">{country?.description}</TableCell>
                    <TableCell align="center" sx={{ '&:hover': { color: 'red' } }}><UpdateCountry country={country} setUpdate={setUpdate} /></TableCell>
                    <TableCell align="center" sx={{ '&:hover': { color: 'red' } }}><DeleteCountry country={country} setUpdate={setUpdate} /></TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  colSpan={3}
                  rowsPerPageOptions={[3, 5]}
                  count={countries?.length}
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

export default CountryList