import Welcome from "../Welcome.jsx";
import Field from "../Field.jsx";
import List from "../List.jsx";
import MainContent from "../MainContent.jsx";
import React from "react";
import TodoList from "../TodoList.jsx";


const Home = () => {
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