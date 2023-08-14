import { Card as MuiCard } from '@mui/material'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import CommentIcon from '@mui/icons-material/Comment'
import { Button, Typography } from '@mui/material'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'
import Tooltip from '@mui/material/Tooltip'
import React from 'react'
import { Link } from 'react-router-dom'

function Card() {
    const [isHovered, setIsHovered] = React.useState(false)
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
                transition: 'transform 2s',
                transform: isHovered ? 'scale(1.5)' : 'scale(1)',
                borderRadius: isHovered ? '10px' : '10px',
                zIndex: isHovered ? 3 : 0,
                height: isHovered ? '300px' : '',
            }}>

            <CardMedia sx={{ height: '140px', borderRadiusLeft: '6px', borderRadiusRight: '6px' }}
                image={'https://images7.alphacoders.com/329/thumbbig-329808.webp'}
            />
            {isHovered && (
                <CardContent sx={{ p: 0, ml: 1, mt: 0.5 }}>
                    <Typography variant='body1' sx={{ fontFamily: 'cursive', maxWidth: '200px' }}>
                        IronMan 3
                        Thể loại: Action - Fantasy - Technology
                    </Typography>
                </CardContent>
            )}

            <CardActions sx={{ m: 0 }}>
                <Link to={'/movie'} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Tooltip title="Play"><Button size="small" startIcon={<PlayCircleOutlineIcon />} sx={{ color: 'red' }}></Button></Tooltip>
                </Link>
                <Tooltip title="Like"><Button size="small" startIcon={<ThumbUpOffAltIcon />} sx={{ color: (theme) => (theme.palette.mode === 'dark' ? 'white' : 'black') }}></Button></Tooltip>
                <Tooltip title="Comment"><Button size="small" startIcon={<CommentIcon />} sx={{ color: (theme) => (theme.palette.mode === 'dark' ? 'white' : 'black') }}></Button></Tooltip>
            </CardActions>

        </MuiCard>
    )
}

export default Card