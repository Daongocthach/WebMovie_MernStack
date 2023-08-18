import ReactPlayer from 'react-player'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Rating from '@mui/material/Rating'
import Box from '@mui/material/Box'
import AppBar from '../../components/AppBar/AppBar'
import { Typography } from '@mui/material'
import Stack from '@mui/material/Stack'
import Footer from '../../components/Footer/Footer'
import CommentSection from './CommentSection'
import movieApi from '../../apis/movieApi'
import { useNavigate } from 'react-router-dom'

function Movie() {
  const navigate = useNavigate()
  var id = window.location.search.substring(1) //get id from param request
  var [movie, setMovie] = useState(null)

  useEffect(() => {
    movieApi.getMovieById(id)
      .then(response => {
        setMovie(response)
      })
      .catch(error => {
        console.error(error)
      })
  }, [id])
  return (
    <div>
      <AppBar />
      <Box sx={{
        height: '100%', width: '100%', display: 'flex',
        justifyContent: 'center'
      }}>
        <Box>
          {/* Spacing Appbar */}
          <Box sx={{
            width: '100%',
            height: (theme) => theme.webCustom.appBarHeight
          }}>
          </Box>
          {/* Video */}
          <Box sx={{
            width: '80vw',
            height: 'auto',
            overflow: 'scroll',
            overflowX: 'hidden',
            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#363636' : '#D3D3D3')
          }}>
            <ReactPlayer width="100%"
              style={{ justifyContent: 'center', alignContent: 'center', display: 'flex' }}
              height="70vh"
              controls={true}
              url={movie?.link} />

            <Box >
              <Stack spacing={1} sx={{ m: 2, mr: 2 }}>
                {/* Title */}
                <Typography variant='h5' sx={{ fontFamily: 'sans-serif', fontWeight: 'bold' }}>{movie?.title}</Typography>
                {/* Rating */}
                <Rating name="size-medium" defaultValue={5} />
                {/* Description */}
                <Typography variant='h7' sx={{ fontFamily: 'sans-serif' }}> {movie?.description}</Typography>
                {/* Comment */}
                  {/* <Stack direction={'row'} >
                    <TextField
                      label='Nhập tin nhắn'
                      variant='outlined'
                      fullWidth
                      value={currentMessage}
                      onChange={handleInputChange}
                    />
                    <Button variant='contained' onClick={handleSendMessage}>
                      Gửi
                    </Button>
                  </Stack>
                  <Typography>aosdijg</Typography> */}
                  <CommentSection/>
                
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </div>
  )

}

export default Movie