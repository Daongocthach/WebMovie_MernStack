import Box from '@mui/material/Box'
import ListRow from './ListRow/ListRow'
import Footer from '../../../components/Footer/Footer'
function BoardContent() {
  return (
      <Box sx={{
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#33495e' : '#ECECEC'),
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        display: 'flex',
        p: '10px 0'
      }}>
        <Box sx={{ flexGrow: 1 }}>
          <ListRow />
          <Footer/>
        </Box>
      </Box>
  )
}

export default BoardContent