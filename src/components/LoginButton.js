import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from '@mui/material';

const LoginButton = () => {
    const [open, setOpen] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleLogin = () => {
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        // Send email via Mailchimp (handled in backend)
        // ...
        handleClose();
    };

    return (
        <div>
            <Button color="inherit" onClick={handleClickOpen}>
                Login
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Login</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="username"
                        label="Username"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                        margin="dense"
                        id="email"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleLogin}>Login</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default LoginButton;
