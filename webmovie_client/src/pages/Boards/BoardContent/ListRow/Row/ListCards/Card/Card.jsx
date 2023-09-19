import CommentIcon from '@mui/icons-material/Comment'
import { Button, Typography, Tooltip, CardActions, CardMedia, CardContent } from '@mui/material'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'
import { Card as MuiCard } from '@mui/material'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Card({ movie }) {
    const [isHovered, setIsHovered] = useState(false)
    const handleMouseEnter = () => {
        setIsHovered(true)
    }
    const handleMouseLeave = () => {
        setIsHovered(false)
    }
    return (
        <MuiCard
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            sx={{
                cursor: 'pointer',
                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#1C1C1C' : '#D3D3D3'),
                transition: 'transform 1s',
                transform: isHovered ? 'scale(1.5)' : 'scale(1)',
                borderRadius: '10px',
                zIndex: isHovered ? 3 : 0,
                height: '200px',
                width: '220px'
            }}>
            {movie?.poster &&
                <CardMedia sx={{ height: '140px', borderRadiusLeft: '6px', borderRadiusRight: '6px' }}
                    image={movie?.poster}
                />
            }
            {!isHovered && (
                <CardContent sx={{ p: 0, ml: 1, mt: 0.5 }}>
                    <Typography variant='body1' sx={{ fontFamily: 'cursive', maxWidth: '200px' }}>
                        {movie?.title}
                    </Typography>
                </CardContent>
            )}
            {isHovered && (
                <CardActions sx={{ m: 0 }}>
                    <Link to={`/movie?${movie._id}`} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Tooltip title="Play"><Button size="small" startIcon={<PlayCircleOutlineIcon />} sx={{ color: 'red' }}></Button></Tooltip>
                    </Link>
                    <Tooltip title="Like"><Button size="small" startIcon={<ThumbUpOffAltIcon />} sx={{ height: '20px', color: (theme) => (theme.palette.mode === 'dark' ? 'white' : 'black') }}></Button></Tooltip>
                    <Tooltip title="Comment"><Button size="small" startIcon={<CommentIcon />} sx={{ color: (theme) => (theme.palette.mode === 'dark' ? 'white' : 'black') }}></Button></Tooltip>
                </CardActions>
            )}
        </MuiCard>
    )
}

export default Card