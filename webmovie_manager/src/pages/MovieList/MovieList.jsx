import { Box, Typography, Table, TableBody, TableCell, TableHead, TableRow, Paper, TableFooter, TablePagination } from '@mui/material'
import { Slideshow, Delete, Create } from '@mui/icons-material'
import { useEffect, useState } from 'react'
import categoryApi from '../../apis/categoryApi'
import directorApi from '../../apis/directorApi'
import countryApi from '../../apis/countryApi'
import episodeApi from '../../apis/episodeApi'
import movieApi from '../../apis/movieApi'

function MovieList() {
  const [movies, setMovies] = useState([])
  const [update, setUpdate] = useState('')
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(3)
  const [categoryNames, setCategoryNames] = useState({})
  const [directorName, setDirectorName] = useState({})
  const [countryName, setCountryName] = useState({})
  const [episodeNames, setEpisodeNames] = useState({})

  const handleUpdate = () => {
    console.log('update')
  }
  const handleDelete = () => {
    console.log('delete')
  }
  const handleChangePage = (e, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }
  useEffect(() => {
    movieApi.getListMovies()
      .then(response => {
        setMovies(response.data)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])
  useEffect(() => {
    async function fetchData() {
      const categoryOfMovie = {}
      const countryOfMovie = {}
      const directorOfMovie = {}
      const episodeOfMovie = {}
      for (const movie of movies) {
        const categories = await categoryApi.getCategoriesByMovieId(movie._id)
        const country = await countryApi.getCountryById(movie.country)
        const director = await directorApi.getDirectorById(movie.director)
        const episodes = await episodeApi.getEpisodesByMovieId(movie._id)
        categoryOfMovie[movie._id] = categories.data?.map(category => category.name).join(', ') || 'Not Found'
        countryOfMovie[movie._id] = country.data?.name || 'Not Found'
        directorOfMovie[movie._id] = director.data?.name|| 'Not Found'
        episodeOfMovie[movie._id] = episodes.data?.map(episode => episode.name).join(', ') || 'Not Found'
      }
      setCategoryNames(categoryOfMovie)
      setCountryName(countryOfMovie)
      setDirectorName(directorOfMovie)
      setEpisodeNames(episodeOfMovie)
    }
    fetchData()

  }, [movies])
  return (
    <Box sx={{ height: '90vh', m: 5 }}>
      <Box sx={{ height: '10%', display: 'flex', justifyContent: 'space-between' }}>
        <Slideshow />
        <Typography variant='h6' fontWeight={'bold'}>MovieList</Typography>
      </Box>
      <Box sx={{ height: 'fit-content', width: '100%', bgcolor: 'white', boxShadow: '0px 0px 10px  ' }}>
        <Paper >
          <Table sx={{}} aria-label="custom pagination table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Title</TableCell>
                <TableCell align="center">Description</TableCell>
                <TableCell align="center">Director</TableCell>
                <TableCell align="center">Category</TableCell>
                <TableCell align="center">Country</TableCell>
                <TableCell align="center">Episode</TableCell>
                <TableCell align="center">Poster</TableCell>
                <TableCell align="center">Series</TableCell>
                <TableCell align="center">Update</TableCell>
                <TableCell align="center">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {movies?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((movie, index) =>
                <TableRow key={index}>
                  <TableCell align="center">{movie?.title}</TableCell>
                  <TableCell align="center">{movie?.description}</TableCell>
                  <TableCell align="center">{directorName[movie?._id]}</TableCell>
                  <TableCell align="center">{categoryNames[movie?._id]}</TableCell>
                  <TableCell align="center">{countryName[movie?._id]}</TableCell>
                  <TableCell align="center">{episodeNames[movie?._id]}</TableCell>
                  <TableCell align="center"><img src={movie?.poster} width={'50px'} height={'50px'} /></TableCell>
                  <TableCell align="center">{movie?.series}</TableCell>
                  <TableCell align="center" onClick={handleUpdate} sx={{ '&:hover': { color: 'red' } }}><Create /></TableCell>
                  <TableCell align="center" onClick={handleDelete} sx={{ '&:hover': { color: 'red' } }}><Delete /></TableCell>
                </TableRow>
              )
              }
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  colSpan={3}
                  rowsPerPageOptions={[3, 5]}
                  count={movies?.length}
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

export default MovieList