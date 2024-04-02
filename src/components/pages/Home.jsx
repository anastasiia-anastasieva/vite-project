import Welcome from "../Welcome.jsx";
import { useEffect, useState} from 'react';
import {auth} from '../../fb-conf.js';
import {onAuthStateChanged} from 'firebase/auth';
import Field from "../Field.jsx";
import List from "../List.jsx";
import MainContent from "../MainContent.jsx";
import React from "react";
import TodoList from "../TodoList.jsx";
import { Box, useTheme } from '@mui/material';

import SettingsModal from '../SettingsModal.jsx';
import Button from "@mui/material/Button";

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-size: ${props => props.fontSize}px;
    font-family: ${props => props.fontFamily};
  }
`;
const Home = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [fontSize, setFontSize] = useState(14); // Початковий розмір шрифту
    const [fontFamily, setFontFamily] = useState('Arial'); // Початкове сімейство шрифтів


    const [user, setUser] = useState(null);
    const theme = useTheme();

    useEffect(() => {
        // Очистити підписку, коли компонент знищується
        return onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser);
        });
    }, []);

    return (
        <>
            <GlobalStyle fontSize={fontSize} fontFamily={fontFamily} />
            <Box
                sx={{
                    bgcolor: 'background.default', // Встановлення кольору фону з поточної теми
                    color: 'text.primary', // Встановлення кольору тексту з поточної теми
                    minHeight: '100vh', // Висота контейнера, щоб він заповнював весь екран
                    padding: theme.spacing(3) // Використання відступів з поточної теми
                }}
            >
            <Button onClick={() => setModalOpen(true)}>Відкрити налаштування</Button>
                <SettingsModal
                    open={modalOpen}
                    onClose={() => setModalOpen(false)}
                    fontSize={fontSize}
                    setFontSize={setFontSize}
                    fontFamily={fontFamily}
                    setFontFamily={setFontFamily}
                />
            {/*<Welcome name={"Dima"} lastname={"Pryimak"}/>*/}
            <Field label={"Введіть текст"} placeholder={"..."}/>
            <List/>
            <TodoList/>
            <MainContent/>
            </Box>
        </>
    )

}

export default Home;