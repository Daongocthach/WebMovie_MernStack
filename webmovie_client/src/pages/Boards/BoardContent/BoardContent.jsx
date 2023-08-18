import Box from '@mui/material/Box'
import ListRow from './ListRow/ListRow'
function BoardContent() {
  return (
      <Box sx={{
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#33495e' : '#ECECEC'),
        width: '100%',
        height: 'fit-content',
        flexDirection: 'column',
        display: 'flex',
        p: '10px 0',
        overflowX: 'hidden'
      }}>
        <Box sx={{ flexGrow: 1 }}>
          <ListRow />
        </Box>
      </Box>
  )
}

export default BoardContent