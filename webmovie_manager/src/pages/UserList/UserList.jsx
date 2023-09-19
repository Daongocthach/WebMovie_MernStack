import { Box, Typography, Table, TableBody, TableCell, TableHead, TableRow, Paper, TableFooter, TablePagination } from '@mui/material'
import { Delete, Create, Person } from '@mui/icons-material'
import { useEffect, useState } from 'react'
import AddUser from './FormUser/AddUser'
import UpdateUser from './FormUser/UpdateUser'
import DeleteUser from './FormUser/DeleteUser'
import userApi from '../../apis/userApi'

function UserList() {
  const [users, setUsers] = useState([])
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
    userApi.getListUsers()
      .then(response => {
        setUsers(response.data)
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
        <Typography variant='h6' fontWeight={'bold'}>UserList</Typography>
        <AddUser users={users} setUpdate={setUpdate}/>
      </Box>
      <Box sx={{ height: 'fit-content', width: '100%', bgcolor: 'white', boxShadow: '0px 0px 10px  ' }}>
        <Paper>
          <Table sx={{}} aria-label="custom pagination table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">UserName</TableCell>
                <TableCell align="center">Image</TableCell>
                <TableCell align="center">Phone</TableCell>
                <TableCell align="center">Role</TableCell>
                <TableCell align="center">Status</TableCell>
                <TableCell align="center">Update</TableCell>
                <TableCell align="center">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell align="center">{user?.email}</TableCell>
                    <TableCell align="center">{user?.username}</TableCell>
                    <TableCell align="center"><img src={user?.image} width={'50px'} height={'50px'} /></TableCell>
                    <TableCell align="center">{user?.phone}</TableCell>
                    <TableCell align="center">{user?.role}</TableCell>
                    <TableCell align="center">{user?.status}</TableCell>
                    <TableCell align="center" sx={{ '&:hover': { color: 'red' } }}><UpdateUser user={user} setUpdate={setUpdate} /></TableCell>
                    <TableCell align="center" sx={{ '&:hover': { color: 'red' } }}><DeleteUser user={user} setUpdate={setUpdate} /></TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  colSpan={3}
                  rowsPerPageOptions={[3, 5]}
                  count={users?.length}
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

export default UserList