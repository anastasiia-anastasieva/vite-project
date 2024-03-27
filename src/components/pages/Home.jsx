import Welcome from "../Welcome.jsx";
import { useEffect, useState} from 'react';
import {auth} from '../../fb-conf.js';
import {onAuthStateChanged} from 'firebase/auth';
import Field from "../Field.jsx";
import List from "../List.jsx";
import MainContent from "../MainContent.jsx";
import React from "react";
import TodoList from "../TodoList.jsx";


const Home = () => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        // Очистити підписку, коли компонент знищується
        return onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser);
        });
    }, []);

    return (
        <>
            {/*<Welcome name={"Dima"} lastname={"Pryimak"}/>*/}
            <Field label={"Введіть текст"} placeholder={"..."}/>
            <List/>
            <TodoList/>
            <MainContent/>

        </>
    )

}

export default Home;