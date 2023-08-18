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
                overflowY: 'hidden'
            }}>
                <Box sx={{ flexGrow: 1, paddingBottom: 9 }}>
                    <Row title= 'Thịnh hành'/>
                    <Row title= 'Mới nhất'/>
                </Box>
            </Box>
        </Box>
    )
}

export default ListRow