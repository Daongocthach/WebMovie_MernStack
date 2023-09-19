import { Box, Typography, Table, TableBody, TableCell, TableHead, TableRow, Paper, TableFooter, TablePagination, TableContainer } from '@mui/material'
import { useEffect, useState } from 'react'
import { Category } from '@mui/icons-material'
import AddCategory from './FormCategory/AddCategory'
import UpdateCategory from './FormCategory/UpdateCategory'
import categoryApi from '../../apis/categoryApi'
import DeleteCategory from './FormCategory/DeleteCategory'

function CategoryList() {
  const [categories, setCategories] = useState([])
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
    categoryApi.getListCategories()
      .then(response => {
        console.log(response.data)
        setCategories(response.data)
        setUpdate('')
      })
      .catch(error => {
        console.error(error)
      })
  }, [update])
  return (
    <Box sx={{ height: '90vh', m: 5 }}>
      <Box sx={{ height: '10%', display: 'flex', justifyContent: 'space-between' }}>
        <Category />
        <Typography variant='h6' fontWeight={'bold'}>Category List</Typography>
        <AddCategory categories={categories} setUpdate={setUpdate} />
      </Box>
      <Box sx={{ height: 'fit-content', width: '100%', bgcolor: 'white', boxShadow: '0px 0px 10px  ' }}>
        <TableContainer component={Paper}>
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
              {categories?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((category, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell align="center">{category?.name}</TableCell>
                    <TableCell align="center">{category?.description}</TableCell>
                    <TableCell align="center" sx={{ '&:hover': { color: 'red' } }}><UpdateCategory category={category} setUpdate={setUpdate} /></TableCell>
                    <TableCell align="center" sx={{ '&:hover': { color: 'red' } }}><DeleteCategory category={category} setUpdate={setUpdate} /></TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  colSpan={3}
                  rowsPerPageOptions={[3, 5]}
                  count={categories?.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  )
}

export default CategoryList