import Box from '@mui/material/Box'
import ListCards from './ListCards/ListCard'
import Button from '@mui/material/Button'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'

function Row() {
    return (
        <Box sx={{ }}>
            <Box sx={{
                    minWidth: '200px',
                    maxWidth: '200px',
                    mx: 2,
                    mt: 5,
                    height: 'fit-content',
                    bgcolor: 'transparent'
                }}>
                    <Button
                        endIcon={<NavigateNextIcon />}
                        sx={{
                            color: (theme) => (theme.palette.mode === 'dark' ? 'white' : 'black'),
                            width: '100%',
                            justifyContent: 'flex-start',
                            fontWeight: 'bold'
                        }}>
                        Thịnh hành
                    </Button>
                </Box>
            <Box sx={{
                minHeight: '200px',
                maxHeight: '200px',
                borderRadius: '6px',
                ml: 2,
                width: 'fit-content'
            }}>
                <ListCards />
            </Box>
        </Box>
    )
}

export default Row