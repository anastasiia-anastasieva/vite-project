import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [newTodoText, setNewTodoText] = useState('');

    const addTodo = () => {
        if (newTodoText.trim()) {
            setTodos([{ id: Date.now(), text: newTodoText, completed: false }, ...todos]);
            setNewTodoText('');
        }
    };

    const toggleTodo = (id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div style={{ margin: 'auto', width: '50%', padding: '10px' }}>
            <h1>Todo List</h1>
            <TextField
                label="New Todo"
                variant="outlined"
                fullWidth
                value={newTodoText}
                onChange={(e) => setNewTodoText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addTodo()}
            />
            <Button
                variant="contained"
                onClick={addTodo}
                style={{ marginTop: '10px' }}
            >
                Add Todo
            </Button>
            <List>
                {todos.map((todo) => (
                    <ListItem
                        key={todo.id}
                        secondaryAction={
                            <IconButton edge="end" aria-label="delete" onClick={() => deleteTodo(todo.id)}>
                                <DeleteIcon />
                            </IconButton>
                        }
                    >
                        <Checkbox
                            checked={todo.completed}
                            onChange={() => toggleTodo(todo.id)}
                        />
                        <ListItemText
                            primary={todo.text}
                            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                        />
                    </ListItem>
                ))}
            </List>
        </div>
    );
}

export default TodoList;
