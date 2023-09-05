import { Box, Typography } from '@mui/material'
import { PieChart } from '@mui/x-charts/PieChart'

export default function BasicPie() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 10, label: 'series A' },
              { id: 1, value: 15, label: 'series B' },
              { id: 2, value: 20, label: 'series C' }
            ]
          }
        ]}
        width={500}
        height={300}
      />
      <Typography variant='h6' fontWeight={'bold'} color={(theme) => theme.palette.mode=== 'dark'?'orange':'green'}>Biểu đồ số lượt xem trong tuần</Typography>
    </Box>
  )
}