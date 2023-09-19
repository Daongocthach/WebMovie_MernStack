import Box from '@mui/material/Box'
import { useEffect, useState } from 'react'
import Row from './Row/Row'
import movieApi from '../../../../apis/movieApi'

function ListRow({ data }) {
  console.log(data)
  const [allMovies, setAllMovies] = useState([])
  const [moviesSeries, setMoviesSeries] = useState([])
  const [moviesSingle, setMoviesSingle] = useState([])

  useEffect(() => {
    movieApi.getListMovies()
      .then(response => {
        setAllMovies(response.data.docs)
      })
      .catch(error => {
        console.error(error)
      })

    movieApi.getAllMoviesSeries()
      .then(response => {
        setMoviesSeries(response.data.docs)
      })
      .catch(error => {
        console.error(error)
      })

    movieApi.getAllMoviesNoSeries()
      .then(response => {
        setMoviesSingle(response.data.docs)
      })
      .catch(error => {
        console.error(error)
      })

  }, [])

  return (
    <Box>
      <Box sx={{
        bgcolor: 'inherit',
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '100vw',
        overflowX: 'auto',
        overflowY: 'hidden'
      }}>
        <Box sx={{ flexGrow: 1, paddingBottom: 9 }}>
          <Row title={data?.title || 'New'} movies={data?.movies || allMovies} />
          <Row title='Series' movies={moviesSeries} />
          <Row title='Single Movies' movies={moviesSingle} />
        </Box>
      </Box>
    </Box>
  )
}

export default ListRow
