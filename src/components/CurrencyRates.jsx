import React, { useState, useEffect } from 'react';
import { Typography, Paper, CircularProgress, Box } from '@mui/material';

const CurrencyRates = () => {
    const [rates, setRates] = useState(null);

    useEffect(() => {
        fetch('https://api.exchangerate-api.com/v4/latest/USD')
            .then(response => response.json())
            .then(data => setRates(data.rates))
            .catch(error => console.error(error));
    }, []);

    return (
        <Box sx={{ padding: 2 }}>
            <Typography variant="h4" gutterBottom>Курси валют по відношенню до USD</Typography>
            {rates ? (
                Object.entries(rates).map(([currency, rate]) => (
                    <Paper key={currency} sx={{ padding: 2, marginBottom: 1, display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="body1">{currency}</Typography>
                        <Typography variant="body1">{rate}</Typography>
                    </Paper>
                ))
            ) : (
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <CircularProgress />
                </Box>
            )}
        </Box>
    );
};

export default CurrencyRates;
