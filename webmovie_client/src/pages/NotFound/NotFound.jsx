import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
const NotFound = () => {
    return (
        <Alert severity="error">
            <AlertTitle>Error Missing Url</AlertTitle>
            You’re either misspelling the URL — <strong>check it out!</strong>
            <br />
            <Link to={'/'} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Button href='/home' sx={{ color: 'orange' }}>Back to Home</Button>
            </Link>
        </Alert>

    )
}

export default NotFound