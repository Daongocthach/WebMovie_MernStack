import { Box } from '@mui/material'
import PieChart from './Statistical/PieChart'
import LineChart from './Statistical/LineChart'
import Data from './Statistical/Data'
function BoardContent() {
  return (
    <Box sx={{
      height: '90vh'
    }}>
      <Data />
      <Box sx={{ display: 'flex', justifyContent:'center', m: 5, gap: 3 }}>
        <LineChart />
        <PieChart />
      </Box>
    </Box>
  )
}

export default BoardContent