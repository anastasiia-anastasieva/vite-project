import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainContent from './components/MainContent.jsx';
import Footer from './components/Footer.jsx';
import Navigation from "./components/Navigation.jsx";
import Welcome from './components/Welcome.jsx'
import Field from './components/Field.jsx';
import List from './components/List.jsx';
import TodoList from "./components/TodoList.jsx";
import './main.css';

function App() {

    return (
        <>
            <Navigation/>

            <Welcome name={"Anastasiia"} lastname={"Anastasieva"}/>
            <Field label={"Введіть текст"} placeholder={"..."}/>
            <List/>
            <TodoList/>
            <MainContent/>

            <Footer/>
        </>
    )
}

export default App;