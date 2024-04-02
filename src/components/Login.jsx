import { useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../fb-conf.js';
import { Box, useTheme } from '@mui/material';

function Login() {
    const theme = useTheme();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log('Successfully logged in with email and password');
        } catch (error) {
            console.log(error.message);
        }
    };

    const handleGoogleLogin = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            console.log('Successfully logged in with Google');
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <Box
            sx={{
                bgcolor: 'background.default', // Встановлення кольору фону з поточної теми
                color: 'text.primary', // Встановлення кольору тексту з поточної теми
                minHeight: '100vh', // Висота контейнера, щоб він заповнював весь екран
                padding: theme.spacing(3) // Використання відступів з поточної теми
            }}
        >
        <div>
            <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login with Email</button>
            <button onClick={handleGoogleLogin}>Login with Google</button>
        </div>
        </Box>
    );
}

export default Login;