import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { Box } from '@mui/material'
import Avatar from '@mui/material/Avatar'

function CommentSection() {
    const [comments, setComments] = useState([])
    const [newComment, setNewComment] = useState('')

    const handleInputChange = (event) => {
        setNewComment(event.target.value)
    }

    const handleAddComment = () => {
        if (newComment.trim() !== '') {
            // Replace 'avatarURL' with the actual URL of the sender's avatar
            const avatarURL = 'https://yt3.ggpht.com/5gUgK607yY7dhRaLNAe6bxwutsOMfUPsAajbk27GEwtgq3TXmw9Lujge8bNL2d1alzbuYiqBxnY=s108-c-k-c0x00ffffff-no-rj';
            const newCommentData = {
                text: newComment,
                avatar: avatarURL
            }

            const updatedComments = [...comments, newCommentData]
            setComments(updatedComments)
            setNewComment('')
        }
    }
        return (
            <Box sx={{ width: '100%', bgcolor: 'white', borderRadius: '6px' }}>
                    {comments.map((comment, index) => (
                        <Stack key={index} direction='row' alignItems='center' spacing={2} sx={{ m: 2}}>
                            <Avatar>
                                <img src={comment.avatar} alt='Avatar' style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                            </Avatar>
                            <div style={{ color: 'black' }}>{comment.text}</div>
                        </Stack>
                    ))}
                <Stack direction={'row'} spacing={1} sx={{ m:1, alignItems: 'center' }} >
                    <TextField
                        label='Viết bình luận'
                        fullWidth
                        variant="filled"
                        value={newComment}
                        onChange={handleInputChange}
                        sx={{ height: '50px', color: 'white', borderColor:'black', border: '1px solid rgba(0, 0, 0, 0.23)' }}
                    />
                    <Button variant='contained' size='small' sx={{ height: '54px', color: 'white', bgcolor: '#00BFFF' }} onClick={handleAddComment}>
                        <h5>Gửi bình luận</h5>
                    </Button>
                </Stack>
            </Box>
        )
    }

    export default CommentSection
