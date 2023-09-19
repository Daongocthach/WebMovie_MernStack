import { useState } from 'react'
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import { Create } from '@mui/icons-material'
import directorApi from '../../../apis/directorApi'

function UpdateDirector({ director, setUpdate }) {
  const [name, setName] = useState(director?.name)
  const [description, setDescription] = useState(director?.description)
  const [open, setOpen] = useState(false)
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const handleUpdate = () => {
    directorApi.updatedirector(director._id, name, description)
      .then(() => {
        alert('Update Success')
        setUpdate('1')
      })
      .catch(() => alert('Update Fail'))
    handleClose()
  }
  return (
    <div>
      <Button startIcon={<Create />} variant="outlined" onClick={handleClickOpen}>
        Update Director
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update Director</DialogTitle>
        <DialogContent>
          <TextField fullWidth size='small' label="Name" sx={{ mt: 2 }} value={name} onChange={(e) => setName(e.target.value)} />
          <TextField fullWidth size='small' label="Description" sx={{ mt: 2 }} value={description} onChange={(e) => setDescription(e.target.value)} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => handleUpdate()}>Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
export default UpdateDirector