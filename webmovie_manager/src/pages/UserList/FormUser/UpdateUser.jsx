import { useState } from 'react'
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Select, MenuItem } from '@mui/material'
import { Create } from '@mui/icons-material'
import userApi from '../../../apis/userApi'

function UpdateUser({ user, setUpdate }) {
  const [username, setUserName] = useState(user?.username)
  const [email, setEmail] = useState(user?.email)
  const [phone, setPhone] = useState(user?.phone)
  const [role, setRole] = useState(user?.role)
  const [image, setImage] = useState(user?.image)
  const [status, setStatus] = useState(user?.status)
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const handleUpdate = () => {
    userApi.updateUser(user._id, email, username, phone, image, role, status)
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
        Update User
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update User</DialogTitle>
        <DialogContent>
          <TextField fullWidth size='small' value={email} label="Email" sx={{ mt: 2 }} onChange={(e) => setEmail(e.target.value)} />
          <TextField fullWidth size='small' value={username} label="Username" sx={{ mt: 2 }} onChange={(e) => setUserName(e.target.value)} />
          <TextField fullWidth size='small' value={image} label="Password" sx={{ mt: 2 }} onChange={(e) => setImage(e.target.value)} />
          <TextField fullWidth size='small' value={phone} label="Phone" sx={{ mt: 2 }} onChange={(e) => setPhone(e.target.value)} />
          <Select fullWidth sx={{ mt: 2 }} value={role} onChange={(e) => setRole(e.target.value)}>
            <MenuItem value='client'>Client</MenuItem>
            <MenuItem value='admin'>Admin</MenuItem>
          </Select>
          <Select fullWidth sx={{ mt: 2, color:'black' }} value={status} onChange={(e) => setStatus(e.target.value)}>
            <MenuItem value='active'>Active</MenuItem>
            <MenuItem value='inactive'>InActive</MenuItem>
          </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => handleUpdate()}>Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
export default UpdateUser