import React, { useState } from 'react';
import Students from '../list.json';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function List() {
    const [selectedCity, setSelectedCity] = useState('');
    const [sortDirection, setSortDirection] = useState(null); // 'up', 'down', null
    const [filterName, setFilterName] = useState('');

    const handleSort = (direction) => {
        setSortDirection(direction);
    };

    const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
        setSortDirection(null);
    };

    const handleNameChange = (event) => {
        setFilterName(event.target.value);
    };

    const getSortedFilteredStudents = () => {
        return Students
            .filter(student =>
                (!selectedCity || student.city === selectedCity) &&
                (!filterName || student.name.toLowerCase().includes(filterName.toLowerCase()))
            )
            .sort((a, b) => {
                if (!sortDirection) return 0;
                return sortDirection === 'up' ? a.absences - b.absences : b.absences - a.absences;
            });
    };

    const sortedFilteredStudents = getSortedFilteredStudents();

    return (
        <Box sx={{ padding: 2 }}>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={4}>
                    <FormControl fullWidth>
                        <InputLabel>City</InputLabel>
                        <Select
                            value={selectedCity}
                            onChange={handleCityChange}
                            label="City"
                        >
                            <MenuItem value="">
                                <em>All Cities</em>
                            </MenuItem>
                            {[...new Set(Students.map((student) => student.city))].map((city) => (
                                <MenuItem key={city} value={city}>{city}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        fullWidth
                        label="Filter by name"
                        value={filterName}
                        onChange={handleNameChange}
                        margin="normal"
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Button onClick={() => handleSort('down')}>
                        <ArrowDownwardIcon />
                    </Button>
                    <Button onClick={() => handleSort('up')}>
                        <ArrowUpwardIcon />
                    </Button>
                    <Button onClick={() => handleSort(null)}>
                        <HighlightOffIcon />
                    </Button>
                </Grid>
            </Grid>

            <Box sx={{ marginTop: 2 }}>
                {sortedFilteredStudents.map((student, index) => (
                    <Box key={index} sx={{ padding: 2, border: '1px solid black', marginBottom: 1 }}>
                        <p>{student.name}</p>
                        <p>{student.absences}</p>
                        <p>{student.city}</p>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}

export default List;
