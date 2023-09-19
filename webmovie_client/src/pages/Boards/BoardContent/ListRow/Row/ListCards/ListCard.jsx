import { Button, Box } from '@mui/material'
import { ArrowForwardIos, ArrowBackIos } from '@mui/icons-material'
import { useState } from 'react'
import Card from './Card/Card'

function ListCards({ movies }) {
  const [showMore, setShowMore] = useState(0)

  return (
    <Box sx={{
      gap: 1,
      display: 'flex',
      flexDirection: 'row'
    }}>
      { showMore > 0 && (
        <Button startIcon={<ArrowBackIos />} onClick={() => { setShowMore(showMore - 6) }}></Button>
      )}
      {movies?.slice(showMore, showMore + 6).map(movie => <Card key={movie._id} movie={movie} />)}
      {movies.length > showMore + 6 && (
        <Button startIcon={<ArrowForwardIos />} onClick={() => { setShowMore(showMore + 6) }}></Button>
      )}
    </Box>
  )
}

export default ListCards
