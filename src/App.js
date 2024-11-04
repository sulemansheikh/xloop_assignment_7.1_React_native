// src/App.js
import React from 'react';
import './App.css';
import Heading from './Heading';
import Profilex from './Profilex';
import Images from './Images';

const App = () => {
    const getCurrentTime = () => new Date().toLocaleTimeString();

    return (
        <div className="App">
            <Heading />
            <div className="profile">
                <h3>Current Time: {getCurrentTime()}</h3>
                <Profilex />
            </div>
            <Images />
        </div>
    );
};

export default App;
