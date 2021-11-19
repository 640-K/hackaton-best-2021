import React, {useState,useEffect} from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Index from "./game/index.js";

const App = () =>{
    
    return (    
    <div className="App">
        <header className="App-header">
            <Index/>
        </header>
    </div>
    );
}



export default App;
