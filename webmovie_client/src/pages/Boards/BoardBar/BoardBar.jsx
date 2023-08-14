import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import theme from '../../../theme'

function BoardBar() {
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.webCustom.boardBarHeight,
      overflow: 'hidden',
      position: 'relative',
      zIndex: 1
    }}>
      <Box sx={{
        width: '100%',
        height: (theme) => theme.webCustom.appBarHeight,
        bgcolor: 'white'
      }}></Box>
      <img src='https://images8.alphacoders.com/378/thumb-1920-378546.jpg'
        alt='image home'
        style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      <Box sx={{
        position: 'absolute',
        width: '250px',
        top: '70%',
        left: '20%',
        bgcolor: 'transparent',
        transform: 'translate(-50%, -50%)',
        zIndex: 2,
        color: 'white',
        alignItems: 'center',
        fontSize: '30px',
        fontFamily: 'Rubik Vinyl, cursive'
      }}>
        <h1>Iron man 3</h1>
      </Box>
      <Box sx={{
        height: '60px',
        position: 'absolute',
        top: '90%',
        left: '20%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        opacity: 0.8,
        gap: 2
      }}>
        <Button variant="contained"
          startIcon={<PlayCircleOutlineIcon sx={{ color: 'black' }} />}
          sx={{ bgcolor: 'white', color: 'black', fontWeight: 'bold', width: '120px' }}>Phát
        </Button>
        <Button variant="contained" startIcon={<ErrorOutlineIcon />} sx={{
          color: 'white',
          border: 'none',
          backgroundColor: '#777777',
          fontWeight: 'bold'
        }}>Thông tin khác</Button>
      </Box>
    </Box>
  )
}

export default BoardBar