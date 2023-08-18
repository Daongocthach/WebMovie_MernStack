import { useEffect, useState } from 'react'
import Card from './Card/Card'
import Box from '@mui/material/Box'
import movieApi from '../../../../../../apis/movieApi'

function ListCards() {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    movieApi.getListMovies()
      .then(response => {
        setMovies(response.data.docs)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])
  return (
    <Box sx={{
      gap: 2,
      display: 'flex',
      flexDirection: 'row'
    }}>
      {movies?.map(movie => <Card key={movie._id} movie={movie} />)}
    </Box>
  )
}

export default ListCards
