import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'; // Додайте цей імпорт
import store from './store';
import App from './App.jsx'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}> {/* Обгорніть ваш App компонент за допомогою Provider */}
            <App />
        </Provider>
    </React.StrictMode>
);