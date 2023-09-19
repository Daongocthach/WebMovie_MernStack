import { useState } from 'react'
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import { Create } from '@mui/icons-material'
import categoryApi from '../../../apis/categoryApi'

function UpdateCategory({ category, setUpdate }) {
  const [name, setName] = useState(category?.name)
  const [description, setDescription] = useState(category?.description)
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const handleUpdate = () => {
    categoryApi.updateCategory(category._id, name, description)
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
        Update Category
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update Category</DialogTitle>
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
export default UpdateCategory