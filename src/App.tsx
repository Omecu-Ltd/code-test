import React from 'react';
import './App.css';
import { models } from "./_mock/models";
import Header from "./components/Header";
import ModelContainer from "./containers/ModelContainer";


function App() {
    return (
        <>
            <Header/>
            <main>
                <ModelContainer models={models}/>
            </main>
        </>
    );
}

export default App;
