import React from "react";
import "../../main.css";
import {Box, useTheme} from "@mui/material"; // Підключаємо CSS файл

const About = () => {
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
        <div className="developer-info">
            <p>Цей сайт був розроблений в межах навчання.</p>
            <p>Викладач: Сурков К.Ю.</p>
            <p>Розробник сайта: Anastasieva Anastasiia</p>
        </div>
        </Box>
    );
}

export default About;