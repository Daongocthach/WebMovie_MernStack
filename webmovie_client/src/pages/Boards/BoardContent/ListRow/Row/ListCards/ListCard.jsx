import Card from './Card/Card'
import Box from '@mui/material/Box'

function ListCards() {
  return (
    <Box sx={{
      gap: 2,
      display: 'flex',
      flexDirection: 'row',
      overflowX: 'auto',
      overflowY: 'hidden',
      '&::-webkit-scrollbar-thumb ': {
          backgroundColor: 'black'
      },
      '&::-webkit-scrollbar-thumb:hover ': {
          backgroundColor: 'black'
      }
  }}>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
  </Box>
  )
}

export default ListCards