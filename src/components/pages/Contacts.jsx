import React from "react";
import {Box, useTheme} from "@mui/material"; // Підключаємо CSS файл

const Contacts = () => {
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
            <h2>Контакти</h2>
            <p>Тут буде інформація про контакти.</p>
        </div>
        </Box>
    );
}

export default Contacts;