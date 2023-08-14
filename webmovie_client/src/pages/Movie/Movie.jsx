import ReactPlayer from 'react-player'
import React from 'react'
import videoPath from '../../assets/video.mp4'
import { Link } from 'react-router-dom'
import Rating from '@mui/material/Rating'
import Box from '@mui/material/Box'
import AppBar from '../../components/AppBar/AppBar'
import { Typography } from '@mui/material'
import Stack from '@mui/material/Stack'
import Footer from '../../components/Footer/Footer'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import CommentSection from './CommentSection'

function Movie() {
  const [messages, setMessages] = React.useState([])
  const [currentMessage, setCurrentMessage] = React.useState('')
  const handleInputChange = (event) => {
    setCurrentMessage(event.target.value)
  }

  const handleSendMessage = () => {
    if (currentMessage.trim() !== '') {
      const newMessages = [...messages, currentMessage]
      setMessages(newMessages)
      setCurrentMessage('')
    }
  }
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
              url={'https://www.youtube.com/watch?v=qj7F47bwZfA'} />

            <Box >
              <Stack spacing={1} sx={{ m: 2, mr: 2 }}>
                {/* Title */}
                <Typography variant='h5' sx={{ fontFamily: 'sans-serif', fontWeight: 'bold' }}>Ironman 3</Typography>
                {/* Rating */}
                <Rating name="size-medium" defaultValue={5} />
                {/* Description */}
                <Typography variant='h7' sx={{ fontFamily: 'sans-serif' }}>When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution. </Typography>
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