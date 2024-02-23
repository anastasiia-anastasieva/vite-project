import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function Field({ label, placeholder }) {
    const [inputValue, setInputValue] = useState('');
    const [displayedText, setDisplayedText] = useState([]);
    const [editIndex, setEditIndex] = useState(-1);
    const [editText, setEditText] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddComment = () => {
        if (inputValue.trim()) {
            setDisplayedText([...displayedText, { text: inputValue, timestamp: new Date().toLocaleTimeString() }]);
            setInputValue('');
        }
    };

    const handleEditChange = (e) => {
        setEditText(e.target.value);
    };

    const handleSaveEdit = (index) => {
        const updatedComments = displayedText.map((comment, i) =>
            i === index ? { ...comment, text: editText } : comment
        );
        setDisplayedText(updatedComments);
        setEditIndex(-1);
        setEditText('');
    };

    const handleCancelEdit = () => {
        setEditIndex(-1);
        setEditText('');
    };

    const handleDeleteComment = (index) => {
        setDisplayedText(displayedText.filter((_, i) => i !== index));
    };

    const handleEditComment = (index) => {
        setEditIndex(index);
        setEditText(displayedText[index].text);
    };

    const renderComment = (comment, index) => {
        const isEditing = index === editIndex;
        return (
            <ListItem key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                {isEditing ? (
                    <>
                        <TextField
                            fullWidth
                            variant="outlined"
                            value={editText}
                            onChange={handleEditChange}
                            sx={{ mr: 1 }}
                        />
                        <IconButton onClick={() => handleSaveEdit(index)}><SaveIcon /></IconButton>
                        <IconButton onClick={handleCancelEdit}><CancelIcon /></IconButton>
                    </>
                ) : (
                    <>
                        <ListItemText primary={comment.text} secondary={comment.timestamp} />
                        <IconButton onClick={() => handleEditComment(index)}><EditIcon /></IconButton>
                        <IconButton onClick={() => handleDeleteComment(index)}><DeleteIcon /></IconButton>
                    </>
                )}
            </ListItem>
        );
    };


    return (
        <div>
            <TextField
                fullWidth
                label={label}
                placeholder={placeholder}
                margin="normal"
                value={inputValue}
                onChange={handleInputChange}
                onKeyPress={(e) => e.key === 'Enter' && handleAddComment()}
            />
            <Button variant="contained" color="primary" onClick={handleAddComment} sx={{ my: 2 }}>
                Add Comment
            </Button>
            <List>
                {displayedText.map(renderComment)}
            </List>
        </div>
    );
}

Field.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
};

export default Field;
