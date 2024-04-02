import React from "react";

import { Box, useTheme } from '@mui/material';
const Services = () => {
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
            <h2>Наші послуги</h2>
            <p>Ми пропонуємо широкий спектр послуг для наших клієнтів:</p>
            <ul>
                <li>Веб-розробка</li>
                <li>Мобільний додаток розробки</li>
                <li>UI/UX дизайн</li>
                <li>Цифровий маркетинг</li>
                <li>SEO оптимізація</li>
                <li>Хостинг та інфраструктура</li>
            </ul>
            <p>Будь ласка, зв'яжіться з нами, щоб дізнатися більше про наші послуги та обговорити ваші потреби.</p>
        </div>
        </Box>
    );
}

export default Services;