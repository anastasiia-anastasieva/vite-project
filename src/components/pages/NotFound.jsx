import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, useTheme } from '@mui/material';

function NotFoundPage() {
    const navigate = useNavigate();
    const theme = useTheme();

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
            <h1>404 - Page Not Found!</h1>
            <button onClick={() => navigate('/')}>Go Home</button>
        </div>
        </Box>
    );
}

export default NotFoundPage;
