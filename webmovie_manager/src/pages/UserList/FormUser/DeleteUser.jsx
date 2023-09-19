import { useState } from 'react'
import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import userApi from '../../../apis/userApi'

function DeleteUser({ user, setUpdate }) {
    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    const handleClickDelete = () => {
        userApi.deleteUser(user._id)
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
                Delete User
            </Button>
            <Dialog open={open} onClose={handleClose} >
                <DialogTitle >Are you sure you want to delete this user?</DialogTitle>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={() => { handleClickDelete() }}>Delete</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
export default DeleteUser