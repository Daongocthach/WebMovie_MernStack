import { Box, Typography, Table, TableBody, TableCell, TableHead, TableRow, Paper, TableFooter, TablePagination, TableContainer } from '@mui/material'
import { useEffect, useState } from 'react'
import { Movie } from '@mui/icons-material'
import episodeApi from '../../apis/episodeApi'
import AddEpisode from './FormEpisode/AddEpisode'
import UpdateEpisode from './FormEpisode/UpdateEpisode'
import DeleteEpisode from './FormEpisode/DeleteEpisode'

function EpisodeList() {
  const [episodes, setepisodes] = useState([])
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
    episodeApi.getListEpisodes()
      .then(response => {
        console.log(response.data)
        setepisodes(response.data)
        setUpdate('')
      })
      .catch(error => {
        console.error(error)
      })
  }, [update])
  return (
    <Box sx={{ height: '90vh', m: 5 }}>
      <Box sx={{ height: '10%', display: 'flex', justifyContent: 'space-between' }}>
        <Movie />
        <Typography variant='h6' fontWeight={'bold'}>Episode List</Typography>
        <AddEpisode episodes={episodes} setUpdate={setUpdate} />
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
              {episodes?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((episode, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell align="center">{episode?.name}</TableCell>
                    <TableCell align="center">{episode?.description}</TableCell>
                    <TableCell align="center">{episode?.duration}</TableCell>
                    <TableCell align="center">{episode?.link}</TableCell>
                    <TableCell align="center" sx={{ '&:hover': { color: 'red' } }}><UpdateEpisode episode={episode} setUpdate={setUpdate} /></TableCell>
                    <TableCell align="center" sx={{ '&:hover': { color: 'red' } }}><DeleteEpisode episode={episode} setUpdate={setUpdate} /></TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  colSpan={3}
                  rowsPerPageOptions={[3, 5]}
                  count={episodes?.length}
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

export default EpisodeList