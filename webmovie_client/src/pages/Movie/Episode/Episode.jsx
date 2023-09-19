import ReactPlayer from 'react-player'
import { useLocation } from 'react-router-dom'
import { Rating, Box, Typography } from '@mui/material'
import CommentSection from '../CommentSection'

function Episode() {
    const location = useLocation()
    const episode = location.state.episode
    return (
        <div>
            <Box sx={{
                height: '100%', width: '100%', display: 'flex',
                justifyContent: 'center'
            }}>
                <Box>
                    {/* Spacing Appbar */}
                    <Box sx={{
                        width: '100%',
                        height: (theme) => theme.webCustom.appBarHeight
                    }}>
                    </Box>
                    {/* Video */}
                    <Box sx={{
                        width: '80vw',
                        height: 'auto',
                        overflow: 'scroll',
                        overflowX: 'hidden',
                        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#363636' : '#FFFFF0')
                    }}>
                        <ReactPlayer width="100%"
                            style={{ justifyContent: 'center', alignContent: 'center', display: 'flex' }}
                            height="70vh"
                            controls={true}
                            url={episode?.link} />
                        <Box sx={{ width: '100%', height: '100%', p: 1 }}>
                            <Typography variant='h4' fontWeight={'bold'} fontFamily={'fantasy'}>{episode?.name}</Typography>
                            <Rating name="size-medium" size='large' value={4.7} precision={0.1} />
                            <CommentSection />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>
    )

}

export default Episode