import { Box, Typography } from '@mui/material'
import { Person, PersonOutline, Category, Flag, Slideshow } from '@mui/icons-material'
const customBox = {
    display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'center'
}
function Data({ data }) {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 10, ml: 20, mr: 20 }} >
            <Box sx={customBox}>
                <Person />
                <Typography variant='h6' fontWeight={'bold'}>User: {data[0]?.length || 0}</Typography>
            </Box>
            <Box sx={customBox}>
                <Slideshow />
                <Typography variant='h6' fontWeight={'bold'}>Movie: {data[1]?.length || 0}</Typography>
            </Box>
            <Box sx={customBox}>
                <Category />
                <Typography variant='h6' fontWeight={'bold'}>Category: {data[2]?.length || 0}</Typography>
            </Box>
            <Box sx={customBox}>
                <PersonOutline />
                <Typography variant='h6' fontWeight={'bold'}>Director: {data[3]?.length || 0}</Typography>
            </Box>
            <Box sx={customBox}>
                <Flag />
                <Typography variant='h6' fontWeight={'bold'}>Country: {data[4]?.length || 0}</Typography>
            </Box>
        </Box>
    )
}

export default Data