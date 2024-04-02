import React, { useState } from 'react';
import { Modal, Box, Typography, Button, Select, MenuItem } from '@mui/material';

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const SettingsModal = ({ open, onClose, fontSize, setFontSize, fontFamily, setFontFamily }) => {
    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={modalStyle}>
                <Typography variant="h6" component="h2">
                    Налаштування
                </Typography>
                <Box>
                    <Button onClick={() => setFontSize(fontSize + 1)}>+</Button>
                    <Button onClick={() => setFontSize(fontSize - 1)}>-</Button>
                    <Typography>Розмір шрифту: {fontSize}</Typography>
                </Box>
                <Box>
                    <Select
                        value={fontFamily}
                        onChange={(e) => setFontFamily(e.target.value)}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        <MenuItem value="Arial">Arial</MenuItem>
                        <MenuItem value="Roboto">Roboto</MenuItem>
                        <MenuItem value="Georgia">Georgia</MenuItem>
                    </Select>
                    <Typography>Шрифт: {fontFamily}</Typography>
                </Box>
            </Box>
        </Modal>
    );
};

export default SettingsModal;
