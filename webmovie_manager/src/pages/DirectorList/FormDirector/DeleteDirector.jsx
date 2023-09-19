import { useState } from 'react'
import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import directorApi from '../../../apis/directorApi'

function DeleteDirector({ director, setUpdate }) {
    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    const handleClickDelete = () => {
        directorApi.deleteDirector(director._id)
            .then(() => {
                alert('Delete Success')
                setUpdate('2')
            })
            .catch(() => {
                alert('Delete Fail')
            })
        handleClose()
    }
    return (
        <div>
            <Button startIcon={<DeleteIcon />} variant="outlined" onClick={handleClickOpen}>
                Delete Director
            </Button>
            <Dialog open={open} onClose={handleClose} >
                <DialogTitle >Are you sure you want to delete this item?</DialogTitle>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={() => { handleClickDelete() }}>Delete</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
export default DeleteDirector