import { useState } from 'react'
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Select, MenuItem } from '@mui/material'
import AddCircle from '@mui/icons-material/AddCircle'
import userApi from '../../../apis/userApi'

function AddUser({ setUpdate }) {
    const [open, setOpen] = useState(false)
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [role, setRole] = useState('client')
    const [password, setPassword] = useState('')
    const [status, setStatus] = useState('active')

    const handleClickOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    const handleClickAdd = () => {
        userApi.addUser(email, username, password, phone, role, status)
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
                New User
            </Button>
            <Dialog open={open} onClose={handleClose} >
                <DialogTitle >Add New User</DialogTitle>
                <DialogContent >
                    <TextField fullWidth size='small' label="Email" sx={{ mt: 2 }} onChange={(e) => setEmail(e.target.value)} />
                    <TextField fullWidth size='small' label="Username" sx={{ mt: 2 }} onChange={(e) => setUserName(e.target.value)} />
                    <TextField fullWidth size='small' label="Password" sx={{ mt: 2 }} onChange={(e) => setPassword(e.target.value)} />
                    <TextField fullWidth size='small' label="Phone" sx={{ mt: 2 }} onChange={(e) => setPhone(e.target.value)} />
                    <Select fullWidth sx={{ mt: 2 }} value={role} onChange={(e) => setRole(e.target.value)}>
                        <MenuItem value='client'>Client</MenuItem>
                        <MenuItem value='admin'>Admin</MenuItem>
                    </Select>
                    <Select fullWidth sx={{ mt: 2 }} value={status} onChange={(e) => setStatus(e.target.value)}>
                        <MenuItem value='active'>Active</MenuItem>
                        <MenuItem value='inactive'>InActive</MenuItem>
                    </Select>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={() => { handleClickAdd() }}>Add</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
export default AddUser