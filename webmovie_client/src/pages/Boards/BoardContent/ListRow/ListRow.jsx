import Box from '@mui/material/Box'

import Row from './Row/Row'

function ListRow() {
    return (
        <Box>
            <Box sx={{
                bgcolor: 'inherit',
                display: 'flex',
                flexDirection: 'column',
                maxWidth: '100vw',
                overflowX: 'auto',
                overflowY: 'hidden',
                '&::-webkit-scrollbar-track ': {
                    m: 2
                }
            }}>
                <Box sx={{ flexGrow: 1, paddingBottom: 9 }}>
                    <Row />
                    <Row />
                    <Row />
                </Box>
            </Box>
        </Box>
    )
}

export default ListRow