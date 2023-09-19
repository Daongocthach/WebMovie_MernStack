import { useState } from 'react'
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import AddCircle from '@mui/icons-material/AddCircle'
import episodeApi from '../../../apis/episodeApi'

function AddEpisode({ setUpdate }) {
    const [open, setOpen] = useState(false)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [duration, setDuration] = useState('')
    const [link, setLink] = useState('')

    const handleClickOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    const handleClickAdd = () => {
        episodeApi.addEpisode(name, description, duration, link)
            .then(() => {
                alert('Add Success')
                setUpdate('3')
            })
            .catch(error => {
                console.log(error)
                alert('Add Fail')
            })
        handleClose()
    }
    return (
        <div>
            <Button startIcon={<AddCircle />} variant="outlined" onClick={handleClickOpen}>
                New Episode
            </Button>
            <Dialog open={open} onClose={handleClose} >
                <DialogTitle >Add New Episode</DialogTitle>
                <DialogContent >
                    <TextField fullWidth size='small' label="Name" sx={{ mt: 2 }} value={name} onChange={(e) => setName(e.target.value)} />
                    <TextField fullWidth size='small' label="Description" sx={{ mt: 2 }} value={description} onChange={(e) => setDescription(e.target.value)} />
                    <TextField fullWidth size='small' label="Duration" sx={{ mt: 2 }} value={duration} onChange={(e) => setDuration(e.target.value)} />
                    <TextField fullWidth size='small' label="Link" sx={{ mt: 2 }} value={link} onChange={(e) => setLink(e.target.value)} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={() => { handleClickAdd() }}>Add</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
export default AddEpisode