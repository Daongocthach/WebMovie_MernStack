import { useState } from 'react'
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import { Create } from '@mui/icons-material'
import episodeApi from '../../../apis/episodeApi'

function UpdateEpisode({ episode, setUpdate }) {
  const [name, setName] = useState(episode?.name)
  const [description, setDescription] = useState(episode?.description)
  const [duration, setDuration] = useState(episode?.duration)
  const [link, setLink] = useState(episode?.link)
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const handleUpdate = () => {
    episodeApi.updateEpisode(episode._id, name, description, duration, link)
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
        Update Episode
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update Episode</DialogTitle>
        <DialogContent>
          <TextField fullWidth size='small' label="Name" sx={{ mt: 2 }} value={name} onChange={(e) => setName(e.target.value)} />
          <TextField fullWidth size='small' label="Description" sx={{ mt: 2 }} value={description} onChange={(e) => setDescription(e.target.value)} />
          <TextField fullWidth size='small' label="Duration" sx={{ mt: 2 }} value={duration} onChange={(e) => setDuration(e.target.value)} />
          <TextField fullWidth size='small' label="Link" sx={{ mt: 2 }} value={link} onChange={(e) => setLink(e.target.value)} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => handleUpdate()}>Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
export default UpdateEpisode