import React, {useState,useEffect} from "react";
import Index from "./game/index.js";
import Login from "./Login";
import "./App.css";

const App = () =>{
    const [name, setName] = useState(false);
    if(!name ){
        return <Login setName={setName}/>;
    }

    return (    
    <div className="App">
        <header className="App-header">

            <Index/>
        </header>
    </div>
    );
}



export default App;
