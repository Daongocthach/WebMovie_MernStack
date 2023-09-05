import { Box, Typography } from '@mui/material'
import { Flag } from '@mui/icons-material'
import FormDialog from './FormTable/Form'
import Table from './FormTable/Table'
function CountryList() {
  return (
    <Box sx={{ height: '90vh', m: 5 }}>
      <Box sx={{ height: '10%', display: 'flex', justifyContent: 'space-between' }}>
        <Flag />
        <Typography variant='h6' fontWeight={'bold'}>CountryList</Typography>
        <FormDialog />
      </Box>
      <Box sx={{ height: 'fit-content', width: '100%', bgcolor: 'white', boxShadow: '0px 0px 10px  ' }}>
        <Table/>
      </Box>
    </Box>
  )
}

export default CountryList