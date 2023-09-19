import { Box, Button } from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import ListCards from './ListCards/ListCard'

function Row({ title, movies }) {

    return (
        <Box sx={{}}>
            <Box sx={{
                minWidth: '200px',
                maxWidth: '200px',
                mx: 10,
                mt: 5,
                height: 'fit-content',
                bgcolor: 'transparent'
            }}>
                <Button
                    endIcon={<NavigateNextIcon />}
                    sx={{
                        color: (theme) => (theme.palette.mode === 'dark' ? 'white' : 'black'),
                        width: 'fit-content',
                        justifyContent: 'flex-start',
                        fontWeight: 'bold'
                    }}>
                    {title}
                </Button>
            </Box>
            <Box sx={{
                borderRadius: '6px',
                width: 'fit-content',
                ml: 10
            }}>
                <ListCards movies = {movies}/>
            </Box>
        </Box>
    )
}

export default Row