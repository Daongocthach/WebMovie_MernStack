import { useState } from 'react'
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import AddCircle from '@mui/icons-material/AddCircle'
import directorApi from '../../../apis/directorApi'

function AddDirector({ setUpdate }) {
    const [open, setOpen] = useState(false)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const handleClickOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    const handleClickAdd = () => {
        directorApi.adddirector(name, description)
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
                New Director
            </Button>
            <Dialog open={open} onClose={handleClose} >
                <DialogTitle >Add New Director</DialogTitle>
                <DialogContent >
                    <TextField fullWidth size='small' label="Name" sx={{ mt: 2 }} onChange={(e) => setName(e.target.value)} />
                    <TextField fullWidth size='small' label="Description" sx={{ mt: 2 }} onChange={(e) => setDescription(e.target.value)} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={() => { handleClickAdd() }}>Add</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
export default AddDirector